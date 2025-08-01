import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});
console.log("Space:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
console.log("Token:", process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

export default client;
