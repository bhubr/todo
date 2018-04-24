const connection = require('../db')

const tasksFindOne = (req, res) => {
  const taskId = req.params.taskId
  const query = `SELECT id, title, state FROM tasks WHERE id = ${taskId}`

  connection.query(query, (error, tasks) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }
    if(tasks.length === 0) {
      return res.status(404).json({
        error: `Task with id ${taskId} not found`
      })
    }

    res.json(tasks[0])
  })
}

module.exports = tasksFindOne
