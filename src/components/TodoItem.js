import React, { Component } from 'react';
import './TodoItem.css';


class TodoItem extends Component { 

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {

        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={ () => onToggle(id)}>
                <div className="remove" onClick={ (e) => {
                    // e.stopPropagation() 은 이벤트의 “확산” 을 멈춰줍니다. 
                    // 즉, 삭제부분에 들어간 이벤트가 해당 부모의 이벤트까지 전달되지 않도록 해줍니다. 
                    //따라서, onToggle 은 실행되지 않고 onRemove 만 실행되죠.
                    e.stoipPropagation(); //onToggle 이 실행되지 않도록 함. 
                    onRemove(id)}
                }>&times;</div> 
                <div className={`todo-text ${ checked ? ' checked' : '' }`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;