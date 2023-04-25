import React, { Suspense } from "react";
import { useNavigate, useLoaderData, defer, Await } from "react-router-dom";

export default function Post() {

    const { post, comments } = useLoaderData();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', { replace: true });

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {/* bad approach */}
            <button onClick={goHome}>Go home</button>
            <Suspense fallback={<p>Loading post...</p>}>
                <Await resolve={post}>
                    {
                        (resolvePost) => <>
                            <h1>{resolvePost.id}. {resolvePost.title}</h1>
                            <p>{resolvePost.body}</p>
                        </>
                    }
                </Await>
            </Suspense>

            <Suspense fallback={<p>Loading comments...</p>}>
                <Await resolve={comments}>
                    {
                        (resolveComments) =>
                            resolveComments.map((resolveComment) =>
                                < div key={resolveComment.id} >
                                    <h3>{resolveComment.email}</h3>
                                    <h4>{resolveComment.name}</h4>
                                    <p>{resolveComment.body}</p>
                                </div>
                            )
                    }
                </Await>
            </Suspense>
        </div>
    )
}

async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    if (!response.ok) {
        throw new Response('', { status: response.status, statusText: 'Not Found!!' });
    }
    return data;
}

async function getComments(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const data = await response.json();
    return data;
}

async function loader({ params }) {
    return defer({
        post: await getPost(params.id),
        comments: getComments(params.id),
    })
}

export { loader }