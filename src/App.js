import React from 'react';
import { Provider } from 'react-redux';
import ToDoList from './views/ToDoList/ToDoList';
import AddToDoForm from './views/AddToDo/AddToDoForm';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap'
function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Switch>
            <Route path="/" exact>
              <ToDoList />
            </Route>
            <Route path="/add">
              <AddToDoForm />
            </Route>
            <Route path="/update/:id">
              <AddToDoForm />
            </Route>
            <Route path="/todo/:id">
            </Route>
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
