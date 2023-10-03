//task start
let array = [];

for(let i = 0; i < Infinity; i++) {
  let type = prompt('Введите команду')
  let command = type.split(', ')
  if(command[0] == 'add') {
    array.push(command[1])
  }else if(command[0] == 'del') {
    for(let key in array) {
      array[key] == command[1] ? array.splice(key, 1) : ''
    }
  }else if(command[0] == 'stop') {
    break
  }
  console.log(array);
}
//task complete