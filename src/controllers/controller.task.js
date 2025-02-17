import service from '../services/service.task.js'

function getTasks(req, res) {
  service.getTasks((error, result) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(200).json(result)
    }
  })

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


