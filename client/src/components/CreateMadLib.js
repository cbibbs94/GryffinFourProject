function CreateMadLib(props) {

    const renderOptions = () => {
        const data = props.data

        return data.map((category, index) => {
            return(
                <option value={category.id} key={index}>{category.name}</option>
            )
        })
    }

    return (
        <div>
            <h2>Create a New Madlib</h2>
            <form action="/madlibs" method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    // required
                />
                <label htmlFor="content">Text Content</label>
                <input
                    type="text"
                    name="content"
                    id="content"
                    // required
                />
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    // required
                />
                <label htmlFor="genre">Genre</label>
                <select id="genre" name="genre">
                    {renderOptions()}
                    {/* <option value="horror">Horror</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="positive-mental-health">Positive Mental Health</option>
                    <option value="movie-reference">Movie Reference</option>
                    <option value="song-reference">Song Reference</option>
                    <option value="Historical">Historical</option>
                    <option value="other">Other</option> */}
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default CreateMadLib