function About({
    image = "https://via.placeholder.com/215", 
    aboutText = "This is the blog about text."}) {
    return (
    <aside>
        <img src = {image} alt="blog logo"/>
        <p>{aboutText}</p>
    </aside>
    )
}

export default About