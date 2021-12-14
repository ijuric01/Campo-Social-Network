import React, { useEffect } from "react";
import { Divider } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import Comments from "./Comments";
import { getPost } from "../../actions/posts";
import useStyles from "./styles";
import {
  Column1,
  Column2,
  Container,
  Row,
  Img,
  Heading,
  Subtitle,
  Subtitle2,
} from "./DetailsElements";
import StatusBar from "../StatusBar/statusBar";
import Loading from "../Loading";
import { TopLine } from "../Posts/PostsElements";
const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <div style={{ display: "center" }}>
        <Loading size="7em" />
      </div>
    );
  }
  return (
    <>
      <StatusBar />
      <Container>
        <Row>
          <Column1>
            <Heading>{post.title}</Heading>
            <TopLine variant="h6">Location: {post.location}</TopLine>
            <Subtitle
              gutterBottom
              variant="h6"
              color="textSecondary"
              component="h2"
            >
              {post.tags.map((tag) => `#${tag} `)}
            </Subtitle>
            <Subtitle gutterBottom variant="body1" component="p">
              {post.message}
            </Subtitle>
            <Subtitle2 variant="h6">Created by: {post.name}</Subtitle2>

            <Subtitle2 variant="body1">
              {moment(post.createdAt).fromNow()}
            </Subtitle2>
            <Divider style={{ margin: "20px 0" }} />
            <Comments post={post} />
            <Divider style={{ margin: "20px 0" }} />
          </Column1>

          <Column2>
            <Img
              src={
                post.selectedFile ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              alt={post.title}
            />
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default PostDetails;
