import { useEffect, useState } from "react"
import exerciseAPI from "../../api/exerciseAPI"
import { useParams } from "react-router-dom"
import commentsApi from "../../api/comments-api"

export default function ExerciseDetails() {
    const [exercise, setExercise] = useState({})
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const {exerciseId} = useParams()

    useEffect(() => {
        (async () => {
            const result = await exerciseAPI.getOneExercise(exerciseId)
            setExercise(result)
        })()
    })
    
    const submitCommentHandler = async (e) => {

        const newComment = await commentsApi.create(exerciseId, username, comment)

        setExercise(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment
            }
        }))

        setUsername('')
        setComment('')
    }

    return(
        <section id="game-details">
            <h1>Exercise Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={exercise.imageUrl} />
                    <h1>{exercise.name}</h1>
                    <span className="levels">Muscle Group: {exercise.muscleGroup}</span>
                    <p className="type">{exercise.category}</p>
                </div>

                <p className="text">
                    {exercise.summary}
                </p>

                
                <div className="details-comments">
                    <h2>Comments:</h2>
                    {Object.keys(exercise.comments || {}).length > 0
                        ? Object.values(exercise.comments).map(comment => (
                            <ul key={comment._id}>
                                <li className="comment">
                                    <p>{comment.username}: {comment.text}</p>
                                </li>
                            </ul>
                        ))
                        : <p className="no-comment">No comments.</p>
                    }
                </div>

                
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            
            
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={submitCommentHandler}>
                    <input type="text" placeholder="Pesho" name="username" 
                onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <textarea name="comment" placeholder="Comment......"
                onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}