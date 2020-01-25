import React from 'react';

const TodoForm = (props) => {
   
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <input 
                    type='text'
                    value={props.input}
                    name='todoForm'
                    onChange={props.handleChanges}
                />
                <button className="Button" onClick={() => props.dispatch({ type: 'ADD_TODO', payload: props.input })} >Add</button>
                <button className="Button" onClick={() => props.dispatch({ type: 'REMOVE_COMPLETED' })} >Delete</button>
            </form>
        </div>
    )
}

export default TodoForm;