import React, { useState } from "react";

function Articles({ articles, isLoading }) {
  const [visable, setVisable] = useState(false);
  const [clickedId, setclickedId] = useState();
  const [buttonClick, setButtonClick] = useState();
  const [readButton, setReadButton] = useState("");

  const handleClick1 = (article_id) => {
    setVisable(!visable);
    setclickedId(article_id);
    setReadButton("Read");
  };

  const handleClick2 = () => {
    setButtonClick(!buttonClick);
    buttonClick ? setReadButton("Read") : setReadButton("Close");
  };

  if (isLoading) return <p>Loading...</p>;
  else
    return (
      <div>
        <h2> Article list</h2>
        <div>
          {articles.map(
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
                      <div className="read">
                        <button
                          onClick={() => {
                            handleClick2(setButtonClick(false));
                          }}
                        >
                          {readButton} the Article
                        </button>
                      </div>
                      <div
                        className={
                          readButton === "Close" && buttonClick
                            ? "element-visable"
                            : "element-hidden"
                        }
                      >
                        <p> Article: {body}</p>
                      </div>
                      <p></p>
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

export default Articles;
