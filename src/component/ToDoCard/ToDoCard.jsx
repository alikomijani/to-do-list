import React, { useState } from 'react';
import { deleteToDo, toggleToDoCheckItemStatus } from '../../redux/toDo/todo.actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    Card, CardBody, CardHeader, Dropdown, FormGroup, Label, Input,
    DropdownToggle, DropdownMenu, DropdownItem, Collapse, Button
} from 'reactstrap';
function ToDoCard({ toDo, deleteToDo, toggleToDoCheckItemStatus }) {
    let history = useHistory();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = (event) => {
        event.target.attributes['aria-expanded'] && setDropdownOpen(prevState => !prevState);
    }
    const toggleCheckList = () => setIsOpen(prevState => !prevState);
    return (
        <Card>
            <CardHeader className='d-flex justify-content-between'>
                <p>{toDo.title}</p>
                <Dropdown id='dfdf' isOpen={dropdownOpen} toggle={toggleMenu}>
                    <DropdownToggle caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Actions</DropdownItem>
                        <DropdownItem onClick={() => history.push(`/update/${toDo.id}`)}>Edit</DropdownItem>
                        <DropdownItem onClick={() => deleteToDo(toDo.id)}>Delete</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </CardHeader>
            <CardBody>
                {toDo.text}
                <br />
                <br />
                <Button size={'sm'} color="primary" onClick={toggleCheckList} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <ol>
                        {toDo.checkList.map(checkItem =>
                            <li key={`${toDo.id}${checkItem.id}`}>
                                <FormGroup check>
                                    <Label check style={{ cursor: 'pointer' }}>
                                        <Input checked={checkItem.status} type="checkbox" onChange={() => toggleToDoCheckItemStatus(toDo.id, checkItem.id)} />{' '}
                                        {checkItem.status ? <del>{checkItem.text}</del> : checkItem.text}
                                    </Label>
                                </FormGroup>
                            </li>)}
                    </ol>
                </Collapse>
            </CardBody>
        </Card>
    )
}

export default connect(null, { deleteToDo, toggleToDoCheckItemStatus })(ToDoCard)
