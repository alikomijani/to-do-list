import React, { useState } from 'react';
import {
    Form, Input, FormGroup, Label, Button
} from 'reactstrap';
import { addToDo , editToDo } from '../../redux/toDo/todo.actions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { toDoId } from '../../redux/toDo/todo.selectors';
import { createStructuredSelector } from "reselect";
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
function AddToDoForm({ addToDo, toDoId , editToDo }) {
    let history = useHistory();
    let {id} = useParams();
    const todoObject = useSelector(state => state.todo.toDoList.find(item => item.id == id))
    const [todo, setTodo] = useState( todoObject ? {title:todoObject.title , text:todoObject.text}:{
        title: '',
        text: '',
    })
    const [checkItems, setCheckItems] = useState(todoObject ? todoObject.checkList:
        [{
            id: 1,
            text: '',
            status: false
        }]
    )
    const addItem = () => {
        setCheckItems([...checkItems, { id: checkItems.length + 1, text: '', status: false }])
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setTodo({
            ...todo,
            [name]: value
        })
    }
    const handleChangeCheck = (event, id) => {
        setCheckItems(checkItems.map(item => item.id === id ? { ...item, text: event.target.value } : item))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        todoObject && editToDo ({
            id: todoObject.id,
            ...todo,
            checkList: checkItems
        }) 
        !todoObject && addToDo({
            id: toDoId,
            ...todo,
            checkList: checkItems
        })
        history.push('/')
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='title'>title</Label>
                    <Input value={todo.title} onChange={handleChange} name='title' id='title' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='text'>text</Label>
                    <Input value={todo.text} onChange={handleChange} name='text' id='text' />
                </FormGroup>
                {
                    checkItems.map(item =>
                        <FormGroup key={item.id}>
                            <Label htmlFor='text'>check item</Label>
                            <Input value={item.text} onChange={(event) => handleChangeCheck(event, item.id)} name='text' id='text' />
                        </FormGroup>
                    )
                }
                <Button type='button' onClick={addItem}>add check Item</Button>{' '}
                <Button>save</Button>
            </Form>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    toDoId
})

export default connect(mapStateToProps, { addToDo, editToDo })(AddToDoForm)
