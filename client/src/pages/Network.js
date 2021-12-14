import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";
//import { getPosts } from "../actions/posts";
import { useHistory, useLocation } from "react-router-dom";
import {
  NetworkCard,
  NetworkContainer,
  NetworkCard2,
  FormButton,
} from "./NetworkElements";
import Pagination from "../components/Pagination";
import { TextField } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import { getPostsBySearch } from "../actions/posts";
import { BsSearch } from "react-icons/bs";
import useStyles from "./styles2";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Network = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const query = useQuery();
  const classes = useStyles();
  const history = useHistory();
  //  const user = JSON.parse(localStorage.getItem("profile"));
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/posts");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  return (
    <NetworkContainer>
      <Form currentId={currentId} setCurrentId={setCurrentId} />

      <NetworkCard>
        <TextField
          className={classes.textfield1}
          name="search"
          variant="standard"
          //  disableUnderline
          // color="none"
          onKeyPress={handleKeyPress}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          placeholder="Search titles..."
          InputProps={{ disableUnderline: true }}
        />
        <ChipInput
          className={classes.chip}
          value={tags}
          onAdd={handleAddChip}
          onDelete={handleDeleteChip}
          variant="standard"
          disableUnderline
          placeholder="Search tags..."
          // color="none"
        />
        <FormButton>
          <BsSearch className={classes.searchButton} onClick={searchPost}>
            Search
          </BsSearch>
        </FormButton>
      </NetworkCard>

      <Posts setCurrentId={setCurrentId} />

      {!searchQuery && !tags.length && (
        <NetworkCard2>
          <Pagination page={page} />
        </NetworkCard2>
      )}
    </NetworkContainer>
  );
};

export default Network;
