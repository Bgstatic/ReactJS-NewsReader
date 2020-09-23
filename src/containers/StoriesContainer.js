import React, { useEffect, useState } from "react";
import { Story } from "../components/Story";
import { getStoryId } from "../services/HackerNewsApi";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryId().then((data) => setStoryIds(data));
  }, []);

  return storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />);
};
