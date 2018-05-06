const mockState = [
  {
    id: 0,
    text: 'foo',
    completed: false,
  },
  {
    id: 1,
    text: 'bar',
    completed: false,
  },
]

const todos = (state = mockState, action) => {
  switch (action.type) { 
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
        ? {...todo, completed: !todo.completed}
        : todo
      )

    case 'UPDATE_TODO': 
      return state.map(todo => 
        (todo.id === action.id)
          ? {...todo, text: action.text}
          : todo
      )

    case 'REMOVE_TODO':
      return state.filter(todo => 
        todo.id !== action.id
      )

    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ];

    default:
      return state
  }
}

export default todos
