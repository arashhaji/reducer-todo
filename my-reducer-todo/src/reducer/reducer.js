// Building initialState
export const initialState = {
	items: [
		{
			item: 'Reduce',
			completed: false,
			
		},
		{
			item: 'Redux',
			completed: false,
			
		},
	]
};

// Building reducer
export const reducer = (state, action) => {
	switch (action.type) {
        case 'ADD_TODO':
            const newItem = {
                item: action.payload,
                completed: false,
               
            }
            return {
                ...state,
                items: [...state.items, newItem]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                items: state.items.map(item => {
                    if(item.id === action.payload2) {
                        item.completed = action.payload
                    } return {
                        ...item,
                        completed: item.completed
                    }
                })
            }
            case 'REMOVE_COMPLETED':
                return {
                    items: state.items.filter(item => item.completed !== true)
                }
		default:
			return state;
	}
};