// app.js - Front-end app
console.log('Front-end app running')

const tasks = [
  {
    id: 1,
    title: 'Devenir maître du monde',
    state: 'En cours'
  },
  {
    id: 2,
    title: 'Ranger mon appart',
    state: 'À faire'
  },
  {
    id: 3,
    title: 'Faire du sport',
    state: 'À faire'
  },
  {
    id: 4,
    title: 'Manger des pommes',
    state: 'Fait'
  },
  {
    id: 5,
    title: 'Dormir',
    state: 'À faire'
  }
]

const headerHtml = subtitle => /* @html */ `
  <div class="row">
    <div class="col-md-12">
      <h1 class="mt-5">Todo App &mdash; ${subtitle}</h1>
    </div>
  </div>
`

/**
 * Structure of a task object fetched from DB:
 * id
 * title
 * state
 * Example: { id: 1, title: 'Faire la vaisselle', state: 'À faire'  }
 */

const buildTaskRowHtml = task => /* @html */ `
  <tr>
    <td>${task.title}</td>
    <td>${task.state}</td>
    <td class="icons">
      <a href="/edit"><span class="icon-pencil text-primary"></span></a>
      <span class="icon-bin text-danger"></span>
    </td>
  </tr>
`

const buildHomeHtml = todoList => /* @html */ `
  <div class="row">
    <div class="col-md-12">

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Tâche</th><th>Etat</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${
            todoList.map(buildTaskRowHtml).join('')
          }
        </tbody>
      </table>

      <a href="/new"><button class="btn btn-primary">Ajouter une tâche</button></a>

    </div>
  </div>`

const newTaskHtml = /* @html */ `
  <div class="row">
    <div class="col-md-12">

      <form>
        <div class="form-group">
          <label for="input-task-title">Task title</label>
          <input name="title" type="text" class="form-control" id="input-task-title" placeholder="Enter task title">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  </div>`

const editTaskHtml = /* @html */ `
  <div class="row">
    <div class="col-md-12">

      <form>
        <div class="form-group">
          <label for="input-task-title">Devenir maître du monde</label>
          <input name="title" type="text" class="form-control" id="input-task-title" placeholder="Enter task title">
        </div>
        <select name="state" class="form-control">
          <option>&Agrave; faire</option>
          <option selected>En cours</option>
          <option>Fait</option>
        </select>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  </div>
`

const notFoundHtml = /* @html */ `
  <img src="https://img.memecdn.com/morphius-404_o_1938383.webp" alt="Morpheus - not found" />
`
const mainElement = document.getElementById('main')

const render = (subtitle, mainHtml) => {
  mainElement.innerHTML = headerHtml(subtitle) + mainHtml
}

const showHome = () => {
  render('Accueil', buildHomeHtml(tasks))
}

const showNewTask = () => {
  render('Nouvelle tâche', newTaskHtml)
}

const showEditTask = () => {
  render('Editer tâche', editTaskHtml)
}

const showNotFound = () => {
  render('Erreur 404', notFoundHtml)
}

page('/', showHome)
page('/new', showNewTask)
page('/edit', showEditTask)
page('*', showNotFound)
page()
