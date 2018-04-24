const connection = require('../db')

const tasksCreateOne = (req, res) => {
  const title = req.body.title
  const query = `INSERT INTO tasks(title, state) VALUES('${title}', 'todo')`
  connection.query(query, (error, result) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }

    res.json({ result: result })

  })
}

module.exports = tasksCreateOne
