// app.js - Front-end app
console.log('Front-end app running')

const headerHtml = /* @html */ `
  <div class="row">
    <div class="col-md-12">
      <h1 class="mt-5">Todo</h1>
    </div>
  </div>
`

const homeHtml = /* @html */ `
  <div class="row">
    <div class="col-md-12">

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Tâche</th><th>Etat</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Devenir maître du monde</td>
            <td>En cours</td>
            <td class="icons">
              <a href="/edit"><span class="icon-pencil text-primary"></span></a>
              <span class="icon-bin text-danger"></span>
            </td>
          </tr>
          <tr>
            <td>Ranger mon appart</td>
            <td>A faire</td>
            <td class="icons">
              <span class="icon-pencil text-primary"></span>
              <span class="icon-bin text-danger"></span>
            </td>
          </tr>
          <tr>
            <td>Faire du sport</td>
            <td>A faire</td>
            <td class="icons">
              <span class="icon-pencil text-primary"></span>
              <span class="icon-bin text-danger"></span>
            </td>
          </tr>
          <tr>
            <td>Manger des pommes</td>
            <td>Fait</td>
            <td class="icons">
              <span class="icon-pencil text-primary"></span>
              <span class="icon-bin text-danger"></span>
            </td>
          </tr>
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

const showHome = () => {
  mainElement.innerHTML = headerHtml + homeHtml
}

const showNewTask = () => {
  mainElement.innerHTML = headerHtml + newTaskHtml
}

const showEditTask = () => {
  mainElement.innerHTML = headerHtml + editTaskHtml
}

const showNotFound = () => {
  mainElement.innerHTML = headerHtml + notFoundHtml
}

page('/', showHome)
page('/new', showNewTask)
page('/edit', showEditTask)
page('*', showNotFound)
page()
