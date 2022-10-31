import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { fetchTopics, fetchUsers } from "./api";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchTopics().then((data) => {
      console.log(data.topics);
      setTopics(data.topics);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then((data) => {
      console.log(data.users);
      setUsers(data.users);
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
            element={
              <Users
                users={users}
                isLoading={isLoading}
                setCurrentUser={setCurrentUser}
              />
            }
          />

          <Route path="/articles/:id" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
