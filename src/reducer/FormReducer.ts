export const initialState = {
  selectedVersion: 0,
  products: [],
}

const formReducer = (state: any, action: any) => {
  //TODO
  const { type, payload } = action

  switch (type) {
    case 'SELECT_VERSION':
      console.log('SELECT_VERSION', payload)
      return [
        ...state,
        {
          selectedVersion: action.selectedVersion,
        },
      ]
    default:
      throw Error('Unknown action: ' + action.type)
  }
}

export default formReducer
