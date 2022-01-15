import AisleRow from "../rows/AisleRow";
import MiddleRow from "../rows/MiddleRow";
import WindowRow from "../rows/WindowRow";

const Column3 = () => {
    return (
        <div className='column'>
            <AisleRow val={3}/>
            <MiddleRow val={3}/>
            <WindowRow val={1}/>
        </div>
    )
}

export default Column3;