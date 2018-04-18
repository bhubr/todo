const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const connection = require('./db')
const path = require('path')

const staticPath = path.normalize(__dirname + '/../public')
app.use(express.static(staticPath))
app.use(bodyParser.json())

const indexHtml = /* @html */ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Todo App</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/sticky-footer.css" rel="stylesheet">
    <link href="css/icons.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <!-- Begin page content -->
    <div id="alert-wrapper" class="alert" role="alert"></div>

    <main id="main" role="main" class="container"></main>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">&copy; WCS Toulouse 2018</span>
      </div>
    </footer>
    <script src=js/page.js></script>
    <script src=js/app.js></script>
  </body>
</html>
`

app.get('/tasks', (req, res) => {
  connection.query('SELECT id, title, state FROM tasks', (error, tasks) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }

    res.json(tasks)
  })
})

app.post('/tasks', (req, res) => {
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
})

app.get('/tasks/:taskId', (req, res) => {
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
})

app.get('*', (req, res) => {
  res.send(indexHtml)
})

app.listen(3000)
