import React from "react";
import {useSelector}from 'react-redux';
import Post from "./post/post";
import useStyles from './styles';
 
const Posts = () => {
  const posts=useSelector((state)=>state.posts);
    const classes=useStyles();
    console.log(posts);
  return (
    <React.Fragment>
      <h1 >Posts</h1>
      <Post />
      <Post />
    </React.Fragment>
  );
};

export default Posts;
