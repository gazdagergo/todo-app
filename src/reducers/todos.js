const mockState = [{
  id: 0,
  text: 'foo',
  completed: false,
}]

const todos = (state = mockState, action) => {
  switch (action.type) { 
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
        ? {...todo, completed: !todo.completed}
        : todo
      )
    case 'SAVE_TODO': 
      return state.map(todo => 
        (todo.id === action.id)
          ? {...todo, text: action.text}
          : todo
      )
    default:
      return state
  }
}

export default todos
