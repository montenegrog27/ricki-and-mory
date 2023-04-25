import { Link } from "react-router-dom";
import style from './About.module.css'

function About () {
    return(
        <>
        <div className={style.nav}>
        <Link to='/home' className={style.home}>Home</Link>
        <Link to='/about' className={style.about}>About</Link>
        </div>
        <div className={style.texto}>
        <h1 className={style.h1}>Hola! Soy German Montenegro</h1>
        <h2 className={style.h2}>Soy estudiante de desarrollo Web Full Stack, y este es mi proyecto integrador</h2>
        </div>
        </>
    )
}

export default About;