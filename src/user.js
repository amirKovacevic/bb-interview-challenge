import React from "react";

import { Post } from "./post";

// 1) import getUser and getPosts methods from api/restCalls.js

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    // 2) call getUser with id that was passed as a prop
    // 3) use the response.data object to set "user" field on the state
  }

  loadPosts() {
    // 4) call getPosts with the user's id */
    // 5) use the response.data object to set "posts" field on the state
  }

  render() {
    const { user, posts } = this.state;

    if (!user) return <p>No user loaded yet!</p>;

    return (
      <div>
        <hr />
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>
        <button>Load posts</button>
        <ol>{/* 4) map posts to Post component */}</ol>
      </div>
    );
  }
}
