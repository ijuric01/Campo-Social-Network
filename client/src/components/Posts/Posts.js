import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading)
    return <div style={{ color: "black" }}>There is no posts!</div>;

  return isLoading ? (
    <Loading />
  ) : (
    <Grid className={classes.mainContainer} container spacing={3}>
      {posts.map((post) => (
        <Grid
          className={classes.brandContainer}
          key={post._id}
          item
          xs={12}
          sm={6}
          md={6}
        >
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
