const comments = (state=[], action)=>{
  switch(action.type){
    case 'ADD_COMMENT':
      return [
        ...state,
        {id: action.id,
         name: action.name,
         datetime: action.datetime,
         text: action.text}
      ]
    case 'DEL_COMMENT':
      return state.filter(comment=>{
        if (comment.id !== action.id){
          return{
            id:comment.id,
            name: action.name,
            datetime: action.datetime,
            text: action.text
           }
        }
      })
    default:
    return state;
  }

}
export default comments;
