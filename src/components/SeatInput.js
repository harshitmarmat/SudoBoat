const SeatInput = ()=>{

    const submitFormHandler = (event) =>{
        event.preventDefault();
    }

    return (
        <form onSubmit={submitFormHandler}>
            <label>Number of Passengers: </label>
            <input type='number' min='11' max='200' step='1' placeholder="passenger shoulder from 11 to 200"/>
            <button type="submit">Click here to calculate seating</button>
        </form>
    )
}

export default SeatInput;