import Header from './Header';
import Content from './Content'
import Footer from './Footer'
import React from 'react'

function App() {
  const [items, setItems] = React.useState([
    {
        id: 1,
        checked: true,
        item: "Great Job"

    },
    {
        id: 2,
        checked: false,
        item: "Great Job"

    }, 
    {
        id: 3,
        checked: false,
        item: "Great Job"

    }
])

  const addingToLocalStorage = (item) => {
    setItems(item)
    localStorage.setItem("shoppingList", JSON.stringify(item))
  }

  const handleChange = (id) => {
    const listItems = items.map(item => {
            return (
                item.id === id ? 
                {...item, checked: !item.checked} 
                : item )
        })
    addingToLocalStorage(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id && item)
    addingToLocalStorage(listItems)
  }

  return (
    <main className='main'>
      <div className="app">
        <Header 
          title="Grocery"
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
