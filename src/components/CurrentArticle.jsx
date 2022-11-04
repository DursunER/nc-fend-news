import React from "react";

function CurrentArticle({ currentArticle, isLoading }) {
  console.log(currentArticle);
  const {
    article_id,
    title,
    topic,
    author,
    body,
    created_at,
    votes,
    comment_count,
  } = currentArticle;

  if (isLoading) return <p>Loading...</p>;
  else
    return (
      <div className="currentArticle">
        <p>
          <strong>Article Id:</strong>: {article_id}
        </p>
        <p>
          <strong>Topic:</strong>: {title}
        </p>
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
        <p>
          <strong>Article: </strong> {body}
        </p>
      </div>
    );
}

export default CurrentArticle;
