import { useContext } from 'react';
import Context from '../../store/context';
import classes from './Box.module.css'

const Box = (props) => {
    let color = 'green';
    if(props.seat==='w'){
        color = 'blue'
    }
    if(props.seat==='m'){
        color='orange'
    }
    const style = `${classes.box} ${color}`;

    const ctx = useContext(Context);
    const seatBooked = ctx.seat;
    const seatNumber = props.value;
    let booked = '';
    if(seatBooked>=seatNumber){
        booked=seatNumber;
    }

    return(
        <div className= {style}>
            <span>{booked}</span>
        </div>
    )
}

export default Box;