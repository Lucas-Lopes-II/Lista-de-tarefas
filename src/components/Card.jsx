import React, { useState } from 'react';
import Form from './To_do_form';
import List from './List';
import Error from './ErrorMsg'
import Item from './item';

const Card = (props) => {
    const [items, setItems] = useState([]);
    const [errorMsg, setError] = useState(false);

    function onAddItem(text){
        let newItem = new Item(text);
        setItems([...items, newItem]);
        setError(false);
    };

    return(
        <div className='card'>
            <h1 className='principal-text'>To-Do List</h1>
            <Form onAddItem={onAddItem}/>
            <List items={items}/>
            <Error show={errorMsg}/>
        </div>
    );

};

export default Card;