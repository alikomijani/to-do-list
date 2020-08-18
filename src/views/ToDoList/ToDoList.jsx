import React from 'react';
import ToDoCard from '../../component/ToDoCard/ToDoCard';
import { connect } from 'react-redux';
import { Row, Container, Col } from 'reactstrap';
function ToDoList({ toDoList }) {

    return (
        <Container>
            <Row className='mt-5' >
                {
                    toDoList.map(item =>
                        <Col className='mt-3' key={item.id} xs={12} md={6}>
                            <ToDoCard toDo={item} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}
const mapStateToProps = state => {
    return {
        toDoList: state.todo.toDoList
    }
}
export default connect(mapStateToProps, {})(ToDoList)
