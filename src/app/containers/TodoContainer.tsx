import  React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionTypes, addTodo, deleteTodo } from '../actions';
import TodoItem from '../components/TodoItem';

interface TodoContainerState {
  todoInput: string;
}

interface TodoContainerProps {
  count: number;
  todoList: string[];
  addToDo: (item: string) => object;
  deleteToDo: (idx: number) => object;
}

class TodoContainer extends React.Component<TodoContainerProps, TodoContainerState> {
  constructor(props: TodoContainerProps) {
    super(props);
    this.state = {
      todoInput: ""
    };
  }

  handleTextChange = (e: any) => {
    this.setState({
      todoInput: e.target.value
    });
  };

  handleButtonClick = () => {
    this.props.addToDo(this.state.todoInput);
    this.setState({
      todoInput: ""
    });
  };

  handleDeleteButtonClick = (idx: number) => {
    console.log("deleting", idx);
    this.props.deleteToDo(idx);
  };

  render() {
    let todoJSX: JSX.Element[] | JSX.Element;
    if (!this.props.todoList.length) {
      todoJSX = <p>No to do</p>;
    } else {
      todoJSX = this.props.todoList.map((item, idx) => {
        return (
          <TodoItem item={item} key={idx} idx={idx} handleDelete={this.handleDeleteButtonClick} />
        );
      });
    }

    return (
      <div>
        {todoJSX}
        <input
          onChange={this.handleTextChange}
          placeholder={"New To Do Here"}
          value={this.state.todoInput}
        />
        <button onClick={this.handleButtonClick}>Add To Do</button>
      </div>
    );
  }
}

const MapStateToProps = (state: any) => {
  return {
    count: state.todo.count,
    todoList: state.todo.list
  };
};

const MapDispatchToProps = (dispatch: Dispatch) => ({
  addToDo: (item: string) => dispatch(addTodo(item)),
  deleteToDo: (idx: number) => dispatch(deleteTodo(idx))
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(TodoContainer);
