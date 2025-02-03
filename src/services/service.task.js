
function getTasks(callback) {
  callback(null, [
    {description: 'Task 1'},
    {description: 'Task 2'},
    {description: 'Task 3'}
  ])
}

function createTask(callback) {
  callback(null, 'insert a task')
} 


function updateTask() {
  return 'update a task'
}

function deleteTask() {
  return 'delete a task'
} 

export default { getTasks, createTask, updateTask, deleteTask }

