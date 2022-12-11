import {useState, useEffect} from 'react';

function App() {
    // To work on displaying list properly, set up a "dummy" list state, including the name of the user and some list items
    const [listState, SetListState] = {
        firstName: 'Andrew',
        listItems: [
            {
                title: 'Finish to-do list',
                description: 'Work on my to-do list until it\'s complete',
                completed: false
            },
            {
                title: 'Walk the dog',
                description: 'Walk the dog for at least 30 minutes. Bring baggies',
                completed: false
            },
            {
                title: 'Fix fridge',
                description: 'The ice-maker is only dispensing crushed ice, but should be able to switch between crushed and cubed.',
                completed: false
            },
            {
                title: 'Sell junk',
                description: 'Clean out closet. Sell stuff on eBay.',
                completed: false
            }
        ]
    }



  return (
    <>
        <h1>Title of list</h1>
    </>
  );
}

export default App;
