import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

export default function Layout() {
    const setActive = ({ isActive }) => isActive ? 'active-link' : '';

    return (
        <>
            <header>
                <NavLink to="/" className={setActive}>Home</NavLink>
                <NavLink to="posts" className={({ isActive }) => isActive ? 'active-link' : ''}>Blog</NavLink>
                <CustomLink to="about">About</CustomLink>
                <CustomLink to="about2">About2</CustomLink>
            </header>
            <main className="container">
                <Outlet />
            </main>
            <footer className="container">2023</footer>
        </>
    )
}