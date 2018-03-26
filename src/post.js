import React from "react";

export const Post = ({ post }) => (
  <li style={{ marginTop: "5px" }}>
    <strong>Title:</strong>
    {post.title}
    <br />
    <strong>Body:</strong>
    {post.body}
  </li>
);
