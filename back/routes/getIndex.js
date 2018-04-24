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
    <!-- #alert-wrapper is where the JS app inserts notifications -->
    <div id="alert-wrapper" class="alert" role="alert"></div>
    <!-- #main is where the JS app inserts HTML content -->
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

const getIndex = (req, res) => {
  res.send(indexHtml)
}

module.exports = getIndex
