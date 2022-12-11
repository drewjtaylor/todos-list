import {useState, useEffect} from 'react';
import dummyData from './dummydata';
import ListItem from './ListItem';
import './App.css';

function App() {
    // To work on displaying list properly, set up a "dummy" list state, including the name of the user and some list items
    const [listState, SetListState] = useState(dummyData)

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

        SetListState(updatedState)
    }

  return (
    <>
        <h1 className='list-header'>{`${listState.firstName}'s List`}</h1>
        {listState.listItems.map((item => {
            return <div key={item.id}>
                <button onClick={() => toggleComplete(item.id)}>Toggle complete</button>
                    <ListItem item={item} />
                <hr />
            </div>
        }))}
    </>
  );
}

export default App;
