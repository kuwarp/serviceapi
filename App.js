const api = require('./Api/BooksApi');
const database = require('./Database/config')
const cors= require('cors')
const app = api.app;

app.use(cors())
database.connect()
// Api Routes
app.post('/alldata', api.createData);
app.get('/course', api.getAllCourse);
app.get('/result', api.getAllresult);
app.get('/latestJob', api.getAllJobs);
app.get('/getAllCourse/:id', api.getBookById);
app.put('/alldata/:id', api.updateData);
app.delete('/alldata/:id', api.deleteData);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
