export default function ExerciseCreate() {
    return(
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <h1>Create Exercise</h1>
                    <label htmlFor="leg-title">Name:</label>
                        <input type="text" id="title" name="name" placeholder="Enter exercise title..." />
                    <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" placeholder="Enter exercise category..." />
                    <label htmlFor="levels">Muscle Group:</label>
                        <input type="text" id="maxLevel" name="muscleGroup" placeholder="Bicep/Tricep/Chest ..." />
                    <label htmlFor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}