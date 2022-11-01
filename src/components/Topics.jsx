
import { Link } from "react-router-dom";

function Topics({topics, isLoading}) {

    if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2> Select Topic to view articles</h2>
                <div >
                    {topics.map(({slug, description}) => {
                        return (
                        <div key={slug} >
                          <Link to={`/topics/${slug}`} className="topics">{slug} </Link>
                            <p>{description}</p>
                            
                        </div>
                        )
                    })}
                </div>
       {/* Display articles */}
    </div>
  )
}

export default Topics
