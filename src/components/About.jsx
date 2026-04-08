function About({image}) {
    const defaultImage = "images/demo.png"

    return (
    <aside>
        <img src = {image ? image: defaultImage} alt="blog logo"/>
    </aside>
    )
}

export default About