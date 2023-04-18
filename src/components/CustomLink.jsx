import React from "react";
import { Link, useMatch } from "react-router-dom";

// На основе линка при использовании хука useMatch можно сделать кастомный линк 

export default function CustomLink({ to, children, ...props }) {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link to={to} {...props} style={{ color: match ? 'red' : 'white' }}>
      {children}
    </Link>
  )
}