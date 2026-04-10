const express = require('express');
const app = express();
const recipesRoutes = require('./routes/recipes.routes');

app.use(express.json());
app.use(express.static('public'));
app.use('/api', recipesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});