import produce from 'immer'

export default (state = {counter:0}, action) => produce(state, draft =>{
      switch (action.type) {
    case 'INCREMENT':
        draft.counter  =  draft.counter + 1
        break;
    case 'DECREMENT':
       draft.counter  =  draft.counter - 1
        break;
    default:
      return draft
  }
})
