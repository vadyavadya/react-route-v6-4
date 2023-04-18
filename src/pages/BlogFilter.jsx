import React, { useState } from "react";

export default function BlogFilter({ queryParams, latestParams, setSearchParams }) {
    const [query, setQuery] = useState(queryParams);
    const [latest, setLatest] = useState(latestParams);

    function handelSubmit(event) {
        event.preventDefault();
        const search = event.target.search.value;
        const latest = event.target.latest.checked;
        let params = {};
        if (search.length) params.search = search;
        if (latest) params.latest = latest;
        setSearchParams(params);
    }

    return (
        <form onSubmit={handelSubmit} >
            <input type="text" name="search" value={query} onChange={(e) => setQuery(() => {

                return e.target.value
            })} />
            <label style={{ padding: '0 10px' }}>
                <input type="checkbox" name="latest" checked={latest} onChange={(e) => setLatest(e.target.checked)} />
                New post
            </label>
            <input type="submit" />
        </form>
    )
}