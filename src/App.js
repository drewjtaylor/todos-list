import {useState, useEffect, useRef} from 'react';
import ListItem from './ListItem';
import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function App() {
    // To work on displaying list properly, set up a "dummy" list state, including the name of the user and some list items
    const [listState, SetListState] = useState(() => {
        return JSON.parse(localStorage.getItem('todoState')) || {}
        })

    // Every time the "listState" is updated, update local storage information to match
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

    // Function to remove item from the list entirely
    const removeItem = (id) => {
        const updatedList = listState.listItems.filter((item) => (item.id !== id));
        SetListState({
            ...listState,
            listItems: updatedList
        })
    }


    // Handles New Item submission.
    const handleNewItemSubmit = (e) => {
        e.preventDefault();
        addItem(newTitleRef.current.value, newDescriptionRef.current.value)
        newTitleRef.current.value = '';
        newDescriptionRef.current.value = ''
    }

  return (
    <Container>
        <Row className='px-0'>

            {/* if there are no items in the list at all, use rounded. else use roudned top */}
            <Col>
                <h1 className={`${listState.listItems.length === 0 ? 'rounded' : 'rounded-top'} border mb-0 text-center bg-black text-light`}>{`${listState.firstName}'s List`}</h1>
            </Col>
        </Row>
            {listState.listItems.map(((item, index, arr) => {
                return <Row 
                    key={item.id} 
                    className={`
                        my-0 mx-0
                        ${index%2 === 0 ? 'list-item' : 'odd-list-item'}
                        ${index === arr.length-1 ? 'rounded-bottom' : null}
                    `}>
                        <Row>
                            <Col xs='1' className='my-auto'>
                                <Form.Check type='checkbox' checked={item.completed} onChange={() => toggleComplete(item.id)}/>
                            </Col>
                            <Col>
                                <ListItem item={item} removeItem={removeItem}/>
                            </Col>
                        </Row>
                        <Row className='mb-2'>
                            <Col><button className="remove-button" onClick={() => removeItem(item.id)}><div className="margin-auto">Clear Item</div></button></Col>
                        </Row>
                </Row>
            }))}


        <Form onSubmit={handleNewItemSubmit}>
            <Form.Group className='my-3'>
                <Form.Label>New To-Do Title</Form.Label>
                <Form.Control ref={newTitleRef} type='text' placeholder='Enter title here'/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>New To-Do Details</Form.Label>
                <Form.Control ref={newDescriptionRef} type='text' placeholder='Enter description here'/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {/* <label>
                New item title:
                <input type="text" name="item" ref={newTitleRef}/>
            </label>
            <label>
                New item description:
                <input type="text" name="description" ref={newDescriptionRef}/>
            </label> */}

            {/* <input type="submit" value="Submit" /> */}
        </Form>
        <br />


    </Container>
  );
}


export default App;
