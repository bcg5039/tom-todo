const {get, set} = require('../lib/store.js')
//const ls = require('./ls')
const { filter, mapAccum, map, propEq } = require ('ramda')

module.exports = function(id){
const toDoList = get()
console.log(toDoList)
console.log(filterRemove(3,toDoList.todos))
//set(toDoList, filter(filterRemove,toDoList))
//set(mapAccum(reducer, 1, filter(x => !isId(id,x),list))[1])
  //console.log(id)
  //console.log(toDoList.todos)
return ls()
}

function filterRemove (id, list) {
  return list.filter(function(obj) {
    console.log(id != obj.id)
    return (id != obj.id)
  })
}

//const toDelete = new Set(['abc', 'efg']);
//const newArray = arrayOfObjects.filter(obj => !toDelete.has(obj.id));
function findPos (id, list) {
  return console.log(list.id !== id)
}
