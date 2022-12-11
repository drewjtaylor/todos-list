import {useState, useEffect} from 'react';
import dummyData from './dummydata';
import ListItem from './ListItem';

function App() {
    // To work on displaying list properly, set up a "dummy" list state, including the name of the user and some list items
    const [listState, SetListState] = useState(dummyData)



  return (
    <>
        <h1>{`${listState.firstName}'s List`}</h1>
        {listState.listItems.map((item => {
            return <>
                <ListItem item={item} id={item.id} />
                <hr />
            </>
        }))}
    </>
  );
}

export default App;
