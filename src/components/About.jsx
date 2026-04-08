function About({image}) {
    const defaultImage = "images/demo.png"

    return (
    <aside>
        <img src = {image ? image: defaultImage}/>
    </aside>
    )
}

export default About