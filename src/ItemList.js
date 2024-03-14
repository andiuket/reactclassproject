import React from 'react';
import LineItem from './LineItem';


const ItemList = ({list, handleChange, handleDelete }) => {
    return (
        <>
            <ul>
                {list.map(item => {
                    return (
                        <LineItem
                            list={item}
                            handleChange={handleChange}
                            handleDelete={handleDelete}
                        />
                    )
                })}
           </ul>
        </>
    )
}

export default ItemList