import Box from "../UI/Box";

const array = [7,17,27,37,47,57,67,77,87,97,107,117,127,137,147,157,167,177,187,197]; 


const AisleRow = (props) =>{
    return(
        <div className="width aisleSeatColor">
            {array.map((index)=>
                <Box
                    key = {index+props.val}
                    value = {index+props.val}
                />
            )}
        </div>
    )
}

export default AisleRow;