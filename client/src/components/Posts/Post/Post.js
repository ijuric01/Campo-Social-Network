import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Avatar,
  CardHeader,
  IconButton,
} from "@material-ui/core/";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart, AiOutlineEdit } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { animateScroll as scroll } from "react-scroll";
import { Subtitle, Subtitle2, TopLine } from "../../Posts/PostsElements";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    margin: "4px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#f98424",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    height: "100%",
    position: "relative",
    " &:hover": {
      transform: "scale(1.02)",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
    },
  },
}));
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();
  const [likes, setLikes] = useState(post?.likes);

  // const userId = user?.result.googleId || user?.result?._id;
  // const hasLikedPost = post.likes.find((like) => like === userId);

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post?.likes?.find((like) => like === userId);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes?.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <AiFillHeart color="#f7882f" fontSize="25px" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <AiOutlineHeart color="#f7882f" fontSize="25px" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <AiOutlineHeart color="#f7882f" fontSize="25px" />
        Like
      </>
    );
  };

  const openPost = () => history.push(`/posts/${post._id}`);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatar}
            alt={post?.name}
            src={post?.creator}
          >
            {post?.name?.charAt(0)}
          </Avatar>
        }
        action={
          (user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <div className={classes.overlay2} name="edit">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentId(post._id);
                }}
                size="small"
              >
                <AiOutlineEdit
                  to="/post"
                  onClick={toggleHome}
                  fontSize="25px"
                  style={{ marginTop: "5px" }}
                />
              </Button>
            </div>
          )
        }
        title={<Subtitle>{post.name}</Subtitle>}
        subheader={<Subtitle2>{moment(post.createdAt).fromNow()}</Subtitle2>}
      />

      <CardMedia
        onClick={openPost}
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />

      <CardContent style={{ paddingBottom: "0" }}>
        <TopLine>Location: {post.location}</TopLine>
        <div className={classes.details}>
          <Subtitle2 variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Subtitle2>
        </div>
        <Subtitle>{post.title}</Subtitle>
      </CardContent>

      <CardActions disableSpacing>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={handleLike}
        >
          <Likes />{" "}
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button onClick={() => dispatch(deletePost(post._id))}>
            <TiDeleteOutline
              style={{ marginRight: "10px", fontSize: "25px", color: "black" }}
            />
            Delete
          </Button>
        )}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ paddingTop: "0" }}>
          <Subtitle variant="body2" color="textSecondary" component="p">
            {post.message}
          </Subtitle>
          <Subtitle2
            variant="body2"
            color="textSecondary"
            component="p"
            onClick={openPost}
            style={{ marginTop: "20px" }}
          >
            See comments...
          </Subtitle2>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
