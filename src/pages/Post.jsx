import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Post() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', { replace: true });


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {/* bad approach */}
            <button onClick={goHome}>Go home</button>
            {
                post &&
                <>
                    <h1>{post.id}. {post.title}</h1>
                    <p>{post.body}</p>
                </>
            }


        </div>
    )
}