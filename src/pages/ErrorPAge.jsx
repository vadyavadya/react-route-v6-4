import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPAge() {
    const errors = useRouteError();

    return (
        <div>
            <h1>{errors.status}</h1>
            <h2>{errors.statusText || 'Something goes wrong!'}</h2>
        </div>
    )
}