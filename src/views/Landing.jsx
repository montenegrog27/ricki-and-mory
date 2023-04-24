import { Link } from 'react-router-dom';
import LogoRM from '../assets/logo.png'
import style from './Landing.module.css'



function Landing(){
    return(
        <div className={style.image_hover}>
         <div className={style.img_conteiner}>
        <img src={LogoRM} alt="" className={style.Landing} />
        <div className={style.boton}>
            <Link to='/home' className={style.ingresar}>INGRESAR</Link>
        </div>
    </div>
    </div>
)}
export default Landing;

// /////////

// import LogoRM from '../assets/logo.png'
// import style from './Landing.module.css'


// function Landing(){
//     return(
//         <div className={style.image_hover}>
//          <div className={style.img_conteiner}>
//         <img src={LogoRM} alt="" className={style.Landing} />
//         <button className={style.boton}>
//             <h4 className={style.texto}>INGRESAR</h4></button> 
//     </div>
//     </div>
// )}
// export default Landing;