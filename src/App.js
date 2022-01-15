import { useState } from "react";
import NavBar from "./components/NavBar";
import SeatArrangement from "./components/SeatArrangement";
import Context from "./store/context";

function App() {

  const [initialSeatBooked,setInitialSeatBooked] = useState(0);

  const seatBookingHandler = (number) =>{
    setInitialSeatBooked((prev)=>{
      console.log(prev);
      return prev+number
    })
  }


  return (
    <Context.Provider value={{seat:initialSeatBooked,
      onBook:seatBookingHandler
    }}>
      <NavBar/>
      <SeatArrangement/>
    </Context.Provider>
  );
}

export default App;
