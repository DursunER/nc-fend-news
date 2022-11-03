import React, { useState } from 'react'

function TopicArticles({currentArticles, isLoading }) {

 
    const [hide, setHide] = useState(true);

    if (isLoading) return <p>Loading...</p>
    else return (
      <div>
        <h2> Topic Article list</h2>
      <div >
            {currentArticles.map(({article_id, title, topic, author, body, created_at, votes, comment_count}) => {
                return (
                  <div key={article_id} >
                      <button type="button" className="collapsible" onClick={() => setHide(false)}><strong>Title:</strong>  {title}</button>
                          <div className={hide ? "hiden" : null}>
                                <p><strong>Topic:</strong>: {topic}</p>
                                <p><strong>Author:</strong> {author}</p>
                                <p><strong>Content:</strong> {body}</p>
                                <p><strong>Created on:</strong>{created_at}</p>
                                <p><strong>Votes:</strong> {votes}</p>
                                <p><strong>Comment count:</strong> {comment_count}</p> 
                            </div>
                        </div>
                        )
                    })}
      </div>
    </div>
  )
}

export default TopicArticles