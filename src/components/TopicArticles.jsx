import React, { useState } from "react";
import { fetchTopicByArticleId } from "../api";
import { Link } from "react-router-dom";

function TopicArticles({
  currentArticles,
  currentArticle,
  setCurrentArticle,
  isLoading,
  setIsLoading,
}) {
  const [visable, setVisable] = useState(false);
  const [clickedId, setclickedId] = useState();

  const handleClick1 = (article_id) => {
    setVisable(!visable);
    setclickedId(article_id);
  };

  const handleClick2 = (article_id) => {
    setIsLoading(true);
    fetchTopicByArticleId(article_id).then((data) => {
      setCurrentArticle(data.article);
      setIsLoading(false);
    });
  };

  if (isLoading) return <p>Loading...</p>;
  else
    return (
      <div>
        <h2> Topic Article list</h2>
        <div>
          {currentArticles.map(
            ({
              article_id,
              title,
              topic,
              author,
              body,
              created_at,
              votes,
              comment_count,
            }) => {
              return (
                <div key={article_id}>
                  <button
                    type="button"
                    className="collapsible"
                    onClick={() => {
                      handleClick1(article_id);
                      setVisable(!visable);
                    }}
                  >
                    <strong>Title:</strong> {title}
                  </button>
                  <div className="article">
                    <div
                      className={
                        visable && clickedId === article_id
                          ? "element-visable"
                          : "element-hidden"
                      }
                    >
                      <p>
                        <strong>Topic:</strong>: {topic}
                      </p>
                      <p>
                        <strong>Author:</strong> {author}
                      </p>

                      <p>
                        <strong>Created on:</strong>
                        {created_at}
                      </p>
                      <p>
                        <strong>Votes:</strong> {votes}
                      </p>
                      <p>
                        <strong>Comment count:</strong> {comment_count}
                      </p>

                      <Link
                        to={`/articles/${article_id}`}
                        className="topics"
                        onClick={() => handleClick2(article_id)}
                      >
                        Read the Article
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
}

export default TopicArticles;
