import { useContext, useRef, useState } from "react";
import Context from "../store/context";

const SeatInput = ()=>{
    let seatBookNumber = useRef();
    const [showNotification,setShowNotification] = useState(false);
    const ctx = useContext(Context)

    const emptySeat = 200-ctx.seat;
    const submitFormHandler = (event) =>{
        event.preventDefault();
        const numberOfSeat = parseInt(seatBookNumber.current.value);
        console.log(numberOfSeat);
        if(emptySeat<numberOfSeat){
            return;
        }
        ctx.onBook(numberOfSeat);
        setShowNotification(true);
        seatBookNumber.current.value=''        
    }

    // const show = ctx.seat>11?emptySeat:'' ;

    let notification;
    if(emptySeat<=0){
        notification =<h2 style={{'textAlign':'center', 'color':'green'}}>All seats are booked!</h2>
    }
    else{
        notification=<h2 style={{'textAlign':'center', 'color':'red'}}>Hurry up!! {emptySeat} seats are left!</h2>
    }

    return (
        <form onSubmit={submitFormHandler}>
            <label>Number of Passengers:</label>
            <input ref={seatBookNumber} type='number' min='11' max={emptySeat} step='1' />
            <button type="submit">Click here to calculate seating!</button>
            { showNotification && notification}
        </form>
    )
}

export default SeatInput;