import React, { useEffect, useState } from "react";
import { getStoryId } from "../services/HackerNewsApi";

export const StoriesContainer = () => {
  const [storyIDs, setStoryIDs] = useState([]);

  useEffect(() => {
    getStoryId().then((data) => setStoryIDs(data));
  }, []);

  return <p>{storyIDs}</p>;
};
