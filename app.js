let express = require('express');
let mongoose = require('mongoose');
let taskRoutes = require('./routes/taskRoutes');
let app = express();

mongoose.connect('mongodb://localhost/mongo-crud');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', taskRoutes);

app.get('/', (req, res) => {
  res.send('hello');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
