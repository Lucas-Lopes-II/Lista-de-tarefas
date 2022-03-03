import React from 'react';

const List = (props) => {
    return(
        <ul className='list'>
            {props.items.map(item => <li key={item.id} onClick={() => props.onItemDeleted(item)}>{item.text}</li>)}
        </ul>
    );
};

export default List;