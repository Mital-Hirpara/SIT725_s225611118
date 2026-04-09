const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

/* MongoDB Atlas Connection */

mongoose.connect("mongodb+srv://mital2203_db_user:MitalHirpara@cluster0.fxvztft.mongodb.net/?appName=Cluster0")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* Recipe Schema */

const recipeSchema = new mongoose.Schema({
    name: String,
    ingredients: String,
    time: String
});

const Recipe = mongoose.model("Recipe", recipeSchema);

/* Add Recipe */

app.post("/addRecipe", async(req,res)=>{

    const recipe = new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        time: req.body.time
    });

    await recipe.save();

    res.json({message:"Recipe Added"});
});

/* Get Recipes */

app.get("/recipes", async(req,res)=>{

    const data = await Recipe.find();
    res.json(data);
});

// Delete recipe by ID
app.delete('/deleteRecipe/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (deletedRecipe) {
      res.json({ message: 'Recipe deleted successfully' });
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});