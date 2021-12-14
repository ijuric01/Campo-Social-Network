import React, { useState, useRef } from "react";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { commentPost } from "../../actions/posts";
import { Subtitle, Subtitle2, CommentSec, FormButton } from "./DetailsElements";

const Comments = ({ post }) => {
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post?.comments); //redux data from backend
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );
    setComment("");
    setComments(newComments);
    // commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Subtitle>Comments</Subtitle>
          {comments?.map(
            (
              c,
              i //loop over comments
            ) => (
              <CommentSec>
                <Subtitle2 style={{ paddingBottom: "1px", margin: "10px" }}>
                  {c.split(": ")[0]}
                </Subtitle2>
                <Subtitle
                  key={i}
                  style={{
                    margin: "10px",
                    marginTop: "5px",
                    paddingBottom: "12px",
                  }}
                >
                  {c.split(":")[1]}
                </Subtitle>
              </CommentSec>
            )
          )}

          <div ref={commentsRef} />
        </div>
        {user?.result?.name && (
          <div style={{ width: "100%" }}>
            <Subtitle style={{ marginTop: "25px", marginBottom: "5px" }}>
              Write a comment
            </Subtitle>
            <TextField
              style={{ marginTop: "4px" }}
              fullWidth
              rows={2}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <br />
            <FormButton
              fullWidth
              disabled={!comment.length}
              color="primary"
              variant="contained"
              onClick={handleComment}
            >
              Comment
            </FormButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
