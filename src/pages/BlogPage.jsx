import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";
import BlogFilter from "./BlogFilter";

const BlogPage = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const [searchParams, setSearchParams] = useSearchParams();

    const queryParams = searchParams.get('search') || '';
    const latestParams = searchParams.has('latest') ? 80 : 1;

    return (
        <div>
            <h1>Our news</h1>
            <Link to='/posts/new'>Add post</Link>

            <BlogFilter queryParams={queryParams} latestParams={searchParams.has('latest')} setSearchParams={setSearchParams} />

            <ul>
                {posts &&
                    posts
                        .filter(item => item.title.includes(queryParams) && item.id > latestParams)
                        .map((post) => {
                            return (
                                <li key={post.id}>
                                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                                </li>
                            );
                        })}
            </ul>
        </div>
    )
}

export { BlogPage }