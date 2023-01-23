const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const userRoutes = require('./routes/users.routes');
const coursesRoutes = require('./routes/courses.routes');
const categoriesRoutes = require('./routes/categories.routes');
const videosRoutes = require('./routes/videos.routes');

const PORT = 8000;

const app = express();

db.authenticate()
.then(() => console.log("Successful Authentication"))
.catch((error) => console.log(error));

initModels();
db.sync({force: false})
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
  res.status(200).json({message: "Welcome to the Server"});
});

app.use(express.json());
app.use('/api/v1', userRoutes);
app.use('/api/v1', coursesRoutes);
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', videosRoutes);

app.listen(PORT, () => {
  console.log(`Server running on the Port ${PORT}`);
});