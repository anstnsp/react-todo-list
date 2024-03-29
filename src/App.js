import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TotoItemList';
class App extends Component {

  id = 3; //이미 0, 1, 2 가 존재 하므로 3으로 설정 
  
  state = {
    input: '',
    todos: [
      { id: 0, text: 'react 0', checked: false},
      { id: 1, text: 'react 1', checked: true },
      { id: 2, text: 'react 2', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value 
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state; 
    this.setState({
      input: '', 
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false 
      })
    });
  }

  handleKeyPress = (e) => {
    //눌려진 키가 Enter면 handleCreate 호출 
    if(e.key === 'Enter') {
      this.handleCreate(); 
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state; 

    //파라미터로 받은 id를 가지고 몇번 째 아이템인지 찾습니다. 
    const index = todos.findIndex(todo => todo.id === id); 
    const seletecd = todos[index]; //선택한 객체 
    
    const nextTodos = [...todos]; //배열을 복사 

    //기존의 값들을 복사하고, checked값 덮어쓰기 
    nextTodos[index] = {
      ...seletecd,
      checked: !seletecd.checked 
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state; 
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    }); 
  }


  render() {
    const { input, todos } = this.state; 
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this; 

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
         <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}


export default App;
