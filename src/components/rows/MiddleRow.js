import Box from "../UI/Box";

const array = [1,11,21,31,41,51,61,71,81,91,101,111,121,131,141,151,161,171,181,191]; 

const MiddleRow = (props) =>{
    return(
        <div className="width middleSeatColor">
           {array.map((index)=>
               <Box
                key={index}
                value={index+props.val}
               />
           )}
        </div>
    )
}

export default MiddleRow;