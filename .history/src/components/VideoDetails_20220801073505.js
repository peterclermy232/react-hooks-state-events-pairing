import {useState} from "react";

function VideoDetails(props) {
    const [upvotes, setUpvotes] = useState(props.upvotes)
    const [downvotes, setDownvotes] = useState(props.downvotes)

    function handleClick(event) {
        switch (event.target.id) {
            case 'upvote-button':
                setUpvotes(upvotes + 1)
                break;
            case 'downvote-button':
                setDownvotes(downvotes + 1)
                break;
            case 'toggle-comments-button':
                let commentsContainer = document.getElementById('video-comments-container');
                commentsContainer.classList.toggle("hidden")
                if (event.target.innerText === "Hide Comments") {
                    event.target.innerText = "Show Comments"
                } else {
                    event.target.innerText = "Hide Comments"
                }
                break;
            default:
                break
        }
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.viewCount} Views | Uploaded {props.createdAt}</p>
            <button onClick={handleClick} id="upvote-button">{upvotes} 👍</button>
            <button onClick={handleClick} id="downvote-button">{downvotes} 👎</button>
            <br></br>
            <br></br>
            <button onClick={handleClick} id="toggle-comments-button">Hide Comments</button>
        </div>
    )
}

export default VideoDetails;