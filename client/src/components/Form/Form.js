import React, { useState, useEffect } from "react";
import { Input } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { createPost, updatePost, getPosts } from "../../actions/posts";

import useStyles from "./styles";
import {
  FormWrap,
  Formm,
  FormButton,
  FormLabel,
  InputMessage,
  FormH1,
} from "./FormElements";
import { FormH2 } from "../Navbar/NavbarElements";
import "../../index.css";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    location: "",
    tags: [],
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      location: "",
      tags: [],
      selectedFile: "",
    });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(
        updatePost(
          currentId,
          { ...postData, name: user?.result?.name },
          history
        )
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <FormWrap style={{ marginTop: "200px", marginBottom: "100px" }}>
        <FormH2 style={{ color: "#6b7a8f" }}>
          Please Sign In to create your own posts and like other's.
        </FormH2>
      </FormWrap>
    );
  }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({
      ...postData,
      tags: postData.tags.filter((tag) => tag !== chipToDelete),
    });
  };

  return (
    <FormWrap>
      <Formm autoComplete="off" noValidate onSubmit={handleSubmit}>
        <FormH1 style={{ color: "#000" }}>
          {currentId ? `Editing "${post?.title}"` : "Share your post"}
        </FormH1>
        <FormLabel>Title of your post:</FormLabel>
        <Input
          className={classes.input1}
          name="title"
          disableUnderline
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <FormLabel>Location:</FormLabel>
        <Input
          className={classes.input1}
          name="location"
          variant="outlined"
          disableUnderline
          label="Location"
          fullWidth
          value={postData.location}
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />
        <FormLabel>Comment your experience</FormLabel>
        <InputMessage
          className={classes.input1}
          style={{ borderRadius: "15px" }}
          id="multiLineInput"
          rows="4"
          name="message"
          variant="outlined"
          type="message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <div
          style={{
            width: "100%",
            borderRadius: "30px",
            outline: "none",
          }}
        >
          <FormLabel>Leave a tag</FormLabel>
          <ChipInput
            name="tags"
            variant="standard"
            disableUnderline
            // color="none"
            fullWidth
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
            className={classes.chip}
          />
        </div>
        <label style={{ color: "black" }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </label>

        <FormButton type="submit">Publish</FormButton>
      </Formm>
    </FormWrap>
  );
};

export default Form;
