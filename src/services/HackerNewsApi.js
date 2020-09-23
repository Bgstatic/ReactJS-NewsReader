import axious from "axios";
import { selectFields } from "../utils/selectFields";

export const baseUrl = " https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryId = async () => {
  const result = await axious.get(newStoriesUrl).then(({ data }) => data);

  return result;
};

export const getStory = async (storyId) => {
  const result = await axious
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};
