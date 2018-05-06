const initialState = [
  {
    id: 0,
    text: 'Az első tennivalóm',
    completed: false,
  }
]

const todos = (state = initialState, action) => {
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
