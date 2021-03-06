import React, { useState, useEffect } from 'react';
import Form from './To_do_form';
import List from './List';
import Error from './ErrorMsg';
import Item from './item';

const Card = (props) => {
    const [items, setItems] = useState([]);
    const [errorMsg, setError] = useState(false);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem('savedItems'));
        if(savedItems){
            setItems(savedItems);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('savedItems', JSON.stringify(items));
    }, [items]);

    function onAddItem(text){
        let newItem = new Item(text);
        setItems([...items, newItem]);
        setError(false);
    };

    function handleErr(error){
        if(error){
            setError(true);
        };
    };

    function onItemDeleted (item) {
        let filteredItems = items.filter(it => it.id !== item.id);
        setItems(filteredItems);
    };

    return(
        <div className='container'>
            <h1 className='principal-text'>To-Do List</h1>
            <div className='card-geral'>
                <Form onAddItem={onAddItem} handleErr={handleErr}/>
                <List items={items} onItemDeleted={onItemDeleted}/>
                <Error show={errorMsg}/>
            </div>
        </div>
    );

};

export default Card;