import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://floating-anchorage-63327.herokuapp.com/api",
});

export const fetchTopics = () => {

    return ncNewsApi
      .get("/topics")
      .then((res) => {
        return res.data;
      })
    .catch(console.log);
  };

  export const fetchUsers = () => {

    return ncNewsApi
      .get("/users")
      .then((res) => {
        return res.data;
       
      })
    .catch(console.log);
  };

  export const fetchArticles = () => {

    return ncNewsApi
      .get("/articles")
      .then((res) => {
     
        return res.data;
       
      })
    .catch(console.log);
  };