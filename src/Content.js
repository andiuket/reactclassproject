import React from "react"
import ItemList from "./ItemList"


const Content = ({item, handleChange, handleDelete}) => {
   
    // const [text, setText] = React.useState({
    //     inputItem: ""
    // })


    console.log(item)
    return (
        <div className="">
            {item.length ?
            <ItemList 
                list={item}
                handleChange={handleChange}
                handleDelete={handleDelete}
            />
           : (
                <p style={{ marginTop: "2rem" }}>You don't have any Items in the List</p>
            )
        }
        </div>
    )
}

export default Content