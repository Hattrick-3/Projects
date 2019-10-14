let nextId = 0;

export const addComment = (name, text)=>{
  return{
    type: 'ADD_COMMENT',
    id: nextId++,
    name: name,
    datetime: new Date().toLocaleString(),
    text: text
  }

}

export const deleteComment =(id)=>{
  return{
    type: 'DEL_COMMENT',
    id: id
  }
}
