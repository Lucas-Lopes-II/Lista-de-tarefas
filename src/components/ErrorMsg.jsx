import React from 'react';

const ErrorMsg = (props) =>{
    return(
        props.show ? <span className='error'>You need to type a task</span> : <></>
    )
}

export default ErrorMsg;