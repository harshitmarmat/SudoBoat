import SeatInput from "./SeatInput"
import classes from './NavBar.module.css';
const NavBar = ()=>{
    return (
        <>
        <SeatInput/>
        <div className={classes.title}>
            <p>Aeroplane-Front</p>
        </div>
        </>
    )
}

export default NavBar;