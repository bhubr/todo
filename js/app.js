// app.js - Front-end app
console.log('Front-end app running')

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
      <a href="/edit/${task.id}"><span class="icon-pencil text-primary"></span></a>
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

      <form id="new-task" action="/tasks">
        <div class="form-group">
          <label for="input-task-title">Task title</label>
          <input name="title" type="text" class="form-control" id="input-task-title" placeholder="Enter task title">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  </div>`

const editTaskHtml = task => /* @html */ `
  <div class="row">
    <div class="col-md-12">
      <form>
        <div class="form-group">
          <label for="input-task-title">Intitulé</label>
          <input name="title" type="text" class="form-control" id="input-task-title" placeholder="Enter task title" value="${task.title}">
        </div>
        <select name="state" class="form-control">
          <option value="todo">&Agrave; faire</option>
          <option value="doing" selected>En cours</option>
          <option valus="done">Fait</option>
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
  // 1. Récupération des données depuis le serveur
  fetch('/tasks')
  .then(response => response.json())
  .then(tasks => {
    // 2. Affichage
    render('Accueil', buildHomeHtml(tasks))

    // 3. Mise en place des gestionnaires d'évènements
  })
}

const showNewTask = () => {
  // 1. Affichage
  render('Nouvelle tâche', newTaskHtml)
  // 2. Mise en place des gestionnaires d'évènements
  const form = document.getElementById('new-task')
  form.addEventListener('submit', event => {
    // Empêcher le comportement par défaut qui est de sortir de l'app JS
    event.preventDefault()

    const inputTitleElem = document.getElementById('input-task-title')
    const taskData = {
      title: inputTitleElem.value
    }
    const taskDataJson = JSON.stringify(taskData)
    fetch(form.action, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: taskDataJson
    })
    .then(response => {
      console.log(response)
    })
  })
}

const showEditTask = context => {
  const taskId = context.params.taskId
  fetch(`/tasks/${taskId}`)
  .then(response => response.json())
  .then(task => render(`Editer tâche #${task.id}`, editTaskHtml(task)))

}

const showNotFound = () => {
  render('Erreur 404', notFoundHtml)
}

page('/', showHome)
page('/new', showNewTask)
page('/edit/:taskId', showEditTask)
page('*', showNotFound)
page()
