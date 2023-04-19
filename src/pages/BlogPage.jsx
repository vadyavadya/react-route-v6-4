import { Await, Link, defer, useLoaderData, useSearchParams } from "react-router-dom";
import BlogFilter from "./BlogFilter";
import { Suspense } from "react";

const BlogPage = () => {
    const { posts } = useLoaderData();    // const [posts, setPosts] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const queryParams = searchParams.get('search') || '';
    const latestParams = searchParams.has('latest') ? 80 : 1;

    return (
        <div>
            <h1>Our news</h1>
            <Link to='/posts/new'>Add post</Link>

            <BlogFilter queryParams={queryParams} latestParams={searchParams.has('latest')} setSearchParams={setSearchParams} />

            <Suspense fallback={<p>Loading posts....</p>}>
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => {
                            return (
                                <ul>
                                    {resolvedPosts
                                        .filter(item => item.title.includes(queryParams) && item.id > latestParams)
                                        .map((post) => {
                                            return (
                                                <li key={post.id}>
                                                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                                                </li>
                                            );
                                        })}
                                </ul>
                            );
                        }
                    }
                </Await>
            </Suspense>
        </div>
    )
}

async function getPosts() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();
    return data;
}

async function loader() {
    return defer({ posts: getPosts() })
}

export { BlogPage, loader }