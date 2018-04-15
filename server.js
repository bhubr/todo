const express = require('express')
const app = express()

app.use(express.static(__dirname))

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

app.get('*', (req, res) => {
  res.send(indexHtml)
})

app.listen(3000)
