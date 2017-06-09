const {get, set} = require('../lib/store.js')
const ls = require('./ls')
const {map} = require('ramda')
module.exports = function(id){
  const toDoList = get()
    //console.log(map(x => updateToggle(id,x),toDoList.todos))
    set(toDoList, map(x => updateToggle(id,x),toDoList.todos))
  return ls()
}

function updateToggle(id,list){
  if(list.id == id){
    console.log("UT if happened")
    toggle(list)
  }
  else{
  }
}

// function toggle(id) {
//   if (id == true){
//     console.log("toggle if'd")
//     return id = false
//   } else {
//     console.log("toggle else")
//     return id = true
//   }
// }
function toggle(obj) {
  obj.completed = !obj.completed
  console.log(obj)
  return obj
}
