import Header from './Header';
import Content from './Content'
import Footer from './Footer'
import React from 'react'
import AddItem from './AddItem';

function App() {
  const [items, setItems] = React.useState(JSON.parse(localStorage.getItem("shoppingList")))

const [newItem, setNewItem] = React.useState("");


  const updatingLocalStorageandState = (item) => {
    setItems(item)
    localStorage.setItem("shoppingList", JSON.stringify(item))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
      const myNewItem = {
          id,
          checked: false,
          item
      }
      const ListItem = [...items, myNewItem]
      updatingLocalStorageandState(ListItem)
  }

  const handleChange = (id) => {
    const listItems = items.map(item => {
            return (
                item.id === id ? 
                {...item, checked: !item.checked} 
                : item )
        })
      updatingLocalStorageandState(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id && item)
    updatingLocalStorageandState(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem("");
  }

  console.log(newItem)
  return (
    <main className='main'>
      <div className="app">
        <Header 
          title="Grocery"
        />
        <AddItem 
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
        />
        <Content
          item={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
        <Footer 
          item={items}
        />
      </div>
    </main>
  );
}

export default App;
