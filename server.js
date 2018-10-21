const express = require('express')
const bodyParser = require('body-parser')
const ps = require('python-shell')

const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API Running'))

// Accept the POST request from Mobile App
app.post('/', (req, res) => {
  let orgPhoto = req.body.photo
  console.log(req.body.photo)
})

// Accept the photo passed from Mobile App
app.post('/processPhoto', _process_Photo)
function _process_Photo(req, res) {
  let options = {
    args:[
      req.query.photo,
    ]
  }

  // ps.PythonShell.run('./processPhoto.py', options, (err, data) => {
  //   if(err) res.send(err)
  //   res.send(res.toString())
  // })
  ps.PythonShell.run('./processPhoto.py', options , (err, results) => {
    if(err) throw err;
    console.log('Finished');
    console.log(results);
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
