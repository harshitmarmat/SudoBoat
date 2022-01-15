import Column1 from "./columns/Column1";
import Column2 from "./columns/Column2";
import Column3 from "./columns/Column3";
import classes from './SeatArrangement.module.css'

const SeatArrangement = ()=>{
    return (
        <div className={classes['seat-columns']} >
            <div className={classes.corner}>
                <p>Column A</p>
                <Column1/>
            </div>
            <div className={classes.middle}>
                <p>Column B</p>
                <Column2/>
            </div>
            <div className={classes.corner}>
                <p>Column C</p>
                <Column3/>
            </div>
        </div>
    )
}

export default SeatArrangement;