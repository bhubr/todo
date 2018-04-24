const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

const tasksFindAll = require('./routes/tasksFindAll')
const tasksCreateOne = require('./routes/tasksCreateOne')
const tasksFindOne = require('./routes/tasksFindOne')
const getIndex = require('./routes/getIndex')

const staticPath = path.normalize(__dirname + '/../public')
app.use(express.static(staticPath))
app.use(bodyParser.json())

app.get('/tasks', tasksFindAll)
app.post('/tasks', tasksCreateOne)
app.get('/tasks/:taskId', tasksFindOne)
app.get('*', getIndex)

app.listen(3000)
