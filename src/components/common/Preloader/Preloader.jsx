import s from './Preloader.module.css'
import preloder from '../../../images/loading.gif'

let Preloader = (props) =>{
    return (
        <div className={s.preloader_wrapper}>
            <img src={preloder} alt="Loading..."/> 
        </div>
    )
}

export default Preloader;