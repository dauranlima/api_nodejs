
function getTasks(req, res) {
  res.status(200).send('Hello World')
    
}

function createTask(req, res) {
  res.status(201).send('insert a task ')
}

function updateTask(req, res) {
  res.status(200).send('update a task')
}

function deleteTask(req, res) {
  res.status(200).send('delete a task')
}

export default { getTasks, createTask, updateTask, deleteTask }


