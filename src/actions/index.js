
export const receiveTodos = json => ({
  type: 'RECEIVE_TODOS',
  todos: json,
});

export const fetchTodos = () => dispatch => {
  return fetch(`https://gg-todo-app.firebaseio.com/todos.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)))
};

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id,
});

export const updateTodo = (id, text) => dispatch => {
  fetch(`https://gg-todo-app.firebaseio.com/todos/${id}.json`, {
    body: JSON.stringify({ text }),
    method: 'PATCH',    
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json' },    
    })
    .then(response => response.json())
    .then(json => dispatch({
      type: "UPDATE_TODO",
      id, 
      text: json.text,
    }
  ))
};

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id,
});

export const addTodo = text => dispatch => {
  fetch(`https://gg-todo-app.firebaseio.com/todos.json`, {
    body: JSON.stringify({ text }),
    method: 'POST',    
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json' },    
    })
    .then(response => response.json())
    .then(json => dispatch({
      type: "ADD_TODO",
      id: json.name,
      text,
    }
  ))
};
