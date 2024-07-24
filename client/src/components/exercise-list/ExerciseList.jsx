import { useEffect, useState } from 'react'
import * as exercise from '../../api/exerciseAPI'
import ExerciseListItem from './exercise-list-item/ExerciseListItem'

export default function ExerciseList() {
    const [exercises, setExercise] = useState([])
    
    useEffect(() => {
        exercise.getALL()
            .then(result => setExercise(result))
    }, [])

    return(
        <section id="catalog-page">
            <h1>All Exercises</h1>
            
            {exercises.length > 0
                ? exercises.map(exercise => <ExerciseListItem key={exercise._id} {...exercise} />)
                : <h3 className="no-articles">No exercises yet</h3>
            }
        </section>
    )
}