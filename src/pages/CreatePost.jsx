import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function CreatePost() {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Create post</h1>
            Добро пожаловать, {user || 'Вы не вошли'} 
            <button onClick={() => signOut(() => navigate('/', { replace: true }))}>Выйти</button>
        </div>
    )
}