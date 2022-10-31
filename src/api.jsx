import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://dursun-news.herokuapp.com/api",
});

export const fetchTopics = () => {

    return ncNewsApi
      .get("/topics")
      .then((res) => {
        console.log(res)
        return res.data;
       
      })
      .catch(console.log);
  };

  export const fetchUsers = () => {

    return ncNewsApi
      .get("/users")
      .then((res) => {
        console.log(res)
        return res.data;
       
      })
      .catch(console.log);
  };

