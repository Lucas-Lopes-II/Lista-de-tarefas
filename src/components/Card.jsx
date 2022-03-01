import React, { useState } from 'react';
import Form from './To_do_form';
import Item from './item';

const Card = (props) => {
    const [items, setItems] = useState([]);

    function onAddItem(text){
        let newItem = new Item(text);
        setItems([...items, newItem]);
    };

    return(
        <div className='card'>
            <h1 className='principal-text'>To-Do List</h1>
            <Form onAddItem={onAddItem}/>
        </div>
    );

};

export default Card;