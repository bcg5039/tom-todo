const {get, set} = require('../lib/store.js')
const {map, curry, reduce, filter} = require('ramda')

module.exports = function(){

  console.log(`\n        ToDos`)
  console.log('_______________')
  map(printObj, toDoList.todos)
  console.log('_______________')
  console.log(`Total: ${toDoList.counter}  % Remaining:  `)
  }



function printObj(v){
  console.log(`${v.id} | [${isComplete(v) ? "X" : " "}] | ${v.text} `)
  return v
}

function isComplete(obj)  {
  return obj.completed
}
