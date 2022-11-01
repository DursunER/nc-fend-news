import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { fetchArticles, fetchTopics, fetchUsers } from "./api";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import Topics from "./components/Topics";
import Articles from "./components/Articles";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetchTopics().then((data) => {
      setTopics(data.topics);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then((data) => {
      setUsers(data.users);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/users"
            element={<Users users={users} isLoading={isLoading} />}
          />

          <Route
            path="/topics"
            element={
              <Topics
                topics={topics}
                setTopics={setTopics}
                articles={articles}
                isLoading={isLoading}
              />
            }
          />

          <Route
            path="/articles"
            element={<Articles articles={articles} isLoading={isLoading} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
