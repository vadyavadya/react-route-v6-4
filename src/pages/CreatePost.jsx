import React from "react";
import { redirect, useNavigate, useNavigation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import NewPost from "../components/NewPost";

export default function CreatePost() {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const navigation = useNavigation()

    return (
        <div>
            <h1>Create post</h1>
            Добро пожаловать, {user || 'Вы не вошли'}
            <NewPost submitting={navigation.state === 'submitting'} />
            <button onClick={() => signOut(() => navigate('/', { replace: true }))}>Выйти</button>
        </div>
    )
}

const createPost = async ({ title, body, userId }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId })
    })
    const newPost = await res.json()

    return newPost
}

const createPostAction = async ({ request }) => {
    const formData = await request.formData();
    const newPost = {
        title: formData.get('title'),
        body: formData.get('body'),
        userId: formData.get('userId')
    }
    const post = await createPost(newPost)

    return redirect('/posts/' + post.id)
}

export { createPostAction };