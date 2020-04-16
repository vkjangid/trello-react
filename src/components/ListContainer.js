import React from 'react';
import List from './List';

function ListContainer () {
    return (
        <div className="d-flex p-3">
            <List />
            <button className="btn h-25 text-white p-2" style={{backgroundColor: "rgba(255,255,255,0.2)", width: "15%"}}>
                + Add another list
            </button>
        </div>
    )
}
 
export default ListContainer;