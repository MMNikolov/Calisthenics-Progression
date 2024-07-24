export default function ExerciseCreate() {
    return(
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <h1>Create Exercise</h1>
                    <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter exercise name..." />
                    <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" placeholder="Enter exercise category..." />
                    <label htmlFor="muscle-group">Muscle Group:</label>
                        <input type="text" id="muscleGroup" name="muscleGroup" placeholder="Bicep/Tricep/Chest ..." />
                    <label htmlFor="exercise-img">ImageURL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Name Exercise" />
                </div>
            </form>
        </section>
    )
}