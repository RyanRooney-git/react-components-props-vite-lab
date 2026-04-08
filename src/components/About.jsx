function About({image = "https://via.placeholder.com/215", aboutText = "A blog created by me."}) {
    return (
    <aside>
        <img src = {image} alt="blog logo"/>
        <p>{aboutText}</p>
    </aside>
    )
}

export default About