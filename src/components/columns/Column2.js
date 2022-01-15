import AisleRow from "../rows/AisleRow";
import MiddleRow from "../rows/MiddleRow";

const Column2 = () => {
    return (
        <div className='column'>
            <AisleRow val={1}/>
            <MiddleRow val={1}/>
            <MiddleRow val={2}/>
            <AisleRow val={2}/>
        </div>
    )
}

export default Column2;