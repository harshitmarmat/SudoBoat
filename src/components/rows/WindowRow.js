import Box from "../UI/Box";

const array = [5,15,25,35,45,55,65,75,85,95,105,115,125,135,145,155,165,175,185,195]; 
const WindowRow = (props) =>{

    return(
        <div className="width windowSeatColor">
           {array.map((index)=>
               <Box
                key={index}
                value={index+props.val}
               />
           )}
        </div>
    )
}

export default WindowRow;