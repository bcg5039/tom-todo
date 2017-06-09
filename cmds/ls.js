const {get, set} = require('../lib/store.js')
const { map} = require('ramda')

module.exports = function(){
  const toDoList = get()
  console.log(`\n        ToDos`)
  console.log('_______________')
  map(printObj, toDoList.todos)
  console.log('_______________')
    return
  }



function printObj(v){
  console.log(`${v.id} | [${isComplete(v) ? "X" : " "}] | ${v.text} `)
  return v
}

function isComplete(obj)  {
  return
obj.completed
}
