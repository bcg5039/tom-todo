const {get, set} = require('../lib/store.js')
const ls = require('./ls')
const [a, b, cmd, ...rest] = process.argv
const { append, curry } = require('ramda')

module.exports = function(theRest) {
  const toDoList = get()
  //set(toDoList, toDoList.todos.push({"text": "test2", "id": "3", "completed": false}))
  set(toDoList, toDoList.todos.push(addNewToDo()))
  return ls()
}

function addNewToDo(obj, list)  {
let newObj = {
  text: [...rest].join(" "),
  id:  ,
  completed: false
}
return newObj
}

// function addNewToDo(obj, list)  {
// let newObj = {
//   text: [...rest].join(" "),
//   id:  "3",
//   completed: false
// }
//
// return append(newObj,list)
// }
