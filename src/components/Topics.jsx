import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopicArticles } from "../api";
import TopicArticles from "./TopicArticles";

function Topics({
  topics,
  currentTopic,
  setCurrentTopic,
  isLoading,
  setIsLoading,
  onCurrentArticlesLoad,
}) {
  const [currentArticles, setCurrentArticles] = useState([]);

  const handleClick = (slug) => {
    setIsLoading(true);
    fetchTopicArticles(slug).then((data) => {
      setCurrentArticles(data.articles);
      setCurrentTopic(slug);
      setIsLoading(false);
      onCurrentArticlesLoad(data.articles);
    });
  };

  if (isLoading) return <p>Loading...</p>;
  else
    return (
      <div>
        <h2> Select Topic to view articles</h2>
        <div>
          {topics.map(({ slug, description }) => {
            return (
              <div key={slug}>
                <Link
                  to={`/topics/${slug}`}
                  className="topics"
                  onClick={() => handleClick(slug)}
                >
                  {slug}
                </Link>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Topics;
