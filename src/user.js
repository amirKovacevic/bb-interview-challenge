import React from "react";

// 1) import Post component, getUser and getPosts methods from api/restCalls.js

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  // 2) implement lifecycle hook that is called upon rendering in the DOM
  // 3) call getUser with id that was passed as a prop
  // 4) use the response.data object to set "user" field on the state

  loadPosts() {
    // 5) call getPosts with the user's id */
    // 6) use the response.data object to set "posts" field on the state
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
