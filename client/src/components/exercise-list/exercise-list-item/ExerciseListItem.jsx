import {Link} from 'react-router-dom'

export default function ExerciseListItem({
    _id,
    name,
    category,
    imageUrl,
}){
    return (
        <div className="allGames">
                <div className="allGames-info">
                    <img src={imageUrl} />
                    <h6>{category}</h6>
                    <h2>{name}</h2>
                    <Link to={`/exercises/${_id}/details`} className="details-button">Details</Link>
                </div>
         </div>
    )
}