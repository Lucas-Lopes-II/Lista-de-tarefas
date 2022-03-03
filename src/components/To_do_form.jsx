import React, { useState } from 'react';

const Form = (props) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        let txt = event.target.value;
        setText(txt);
    };

    function addItem(event){
        event.preventDefault();
        if(text !== ''){
            props.onAddItem(text);
            setText('');
        }else{
            props.handleErr(true);
        };
    };

    return(
        <form>
            <input onChange={handleChange} type='text' className="input" value={text}/>
            <button onClick={addItem} type="button" className="button">Register</button>
        </form>
    );
};

export default Form;