const connection = require('../db')

const tasksFindAll = (req, res) => {
  connection.query('SELECT id, title, state FROM tasks', (error, tasks) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }

    res.json(tasks)
  })
}

module.exports = tasksFindAll
