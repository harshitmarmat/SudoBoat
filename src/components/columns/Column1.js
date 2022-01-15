import AisleRow from "../rows/AisleRow";
import MiddleRow from "../rows/MiddleRow";
import WindowRow from "../rows/WindowRow";

const Column1 = () => {
    return (
        <div className='column'>
            <WindowRow val={0}/>
            <MiddleRow val={0}/>
            <AisleRow val={0}/>
        </div>
    )
}

export default Column1;