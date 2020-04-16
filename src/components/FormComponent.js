import React from 'react';
import deleteIcon from '../images/delete-icon.png'

function Form(props) {
    return ( 
        <form onSubmit={props.handleForm}>
            <input type="text" className="form-control mb-2" onChange={props.handleChange}/>
            <button className='btn btn-success py-1 px-2 mr-2'>
                Add
            </button>
            <button className='btn py-1 px-2' onClick={props.handleCancel}>
                <img src={deleteIcon} alt="" style={{width: "1.5em"}} />
            </button>
        </form>
    );
}
 
export default Form;