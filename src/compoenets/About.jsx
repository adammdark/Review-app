import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="about">
        <h2>This is the about page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam voluptates dolores culpa ut, eveniet amet error. Magni, placeat, facilis aperiam incidunt amet perferendis eveniet nulla quod nisi nobis voluptas.m</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  )
}

export default About