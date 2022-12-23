import {useState, useEffect, useRef} from 'react';
import ListItem from './ListItem';
import './App.css';

function App() {
    // To work on displaying list properly, set up a "dummy" list state, including the name of the user and some list items
    const [listState, SetListState] = useState(() => {
        return JSON.parse(localStorage.getItem('todoState')) || {}
        })

    // Every time the "listState" is updated, update local storage keyto match
    useEffect(() => {
        localStorage.setItem('todoState', JSON.stringify(listState));
    }, [listState]);


    // Toggle existing item between "completed" or "uncomplete"
    const toggleComplete = (id) => {
        const updatedState = {
            ...listState,
            listItems: listState.listItems
        };

        updatedState.listItems.forEach((item, index) => {
            if (item.id === id) {
                updatedState.listItems[index].completed = !updatedState.listItems[index].completed
            }
        })

        SetListState(updatedState);
    }

    // References set up for input values (better than reloading state every time a character gets typed in the form)
    const newTitleRef = useRef();
    const newDescriptionRef = useRef();

    // Function to add item to state
    const addItem = (title, description) => {
        const updatedState = {
            ...listState,
            listItems: [...listState.listItems, {
                id: new Date().toISOString(),
                title,
                description,
                completed: false
            }]
        }

        SetListState(updatedState)
    }

    // Function to remove item from state entirely
    const removeItem = (id) => {
        const updatedList = listState.listItems.filter((item) => (item.id !== id));
        SetListState({
            ...listState,
            listItems: updatedList
        })
    }


    // 

    // Handles New Item submission.
    const handleNewItemSubmit = (e) => {
        e.preventDefault();
        addItem(newTitleRef.current.value, newDescriptionRef.current.value)
    }

  return (
    <>
        <h1 className='border button shadow rounded'>{`${listState.firstName}'s List`}</h1>
        <br />
        <form onSubmit={handleNewItemSubmit} className='border rounded button'>
            <label>
                New item title:
                <input type="text" name="item" ref={newTitleRef}/>
            </label>
            <label>
                New item description:
                <input type="text" name="description" ref={newDescriptionRef}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
        <br />
        <button onClick={() => {
            console.log(localStorage.getItem('todoState'));
        }}>Press button to check "localstorage.todoState"</button>


        {listState.listItems.map((item => {
            return <div key={item.id} className='list-item'>
                <button onClick={() => toggleComplete(item.id)}>Toggle complete</button>
                    <ListItem item={item} removeItem={removeItem}/>
                    <p>Remove from list</p>
                    <button className="remove-button" onClick={() => removeItem(item.id)}><div className="margin-auto">X</div></button>
                <hr />
            </div>
        }))}


    </>
  );
}

export default App;
