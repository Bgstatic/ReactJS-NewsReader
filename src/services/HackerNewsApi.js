import axious from "axios";

export const baseUrl = " https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryId = async () => {
  const result = await axious.get(newStoriesUrl).then(({ data }) => data);

  return result;
};
