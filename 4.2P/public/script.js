const API = "http://localhost:3000";

async function addRecipe(){

const name = document.getElementById("name").value;
const ingredients = document.getElementById("ingredients").value;
const time = document.getElementById("time").value;

await fetch(API+"/addRecipe",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
ingredients,
time
})
});

loadRecipes();
}

async function loadRecipes(){

const res = await fetch(API+"/recipes");
const data = await res.json();

const list = document.getElementById("recipeList");

list.innerHTML="";

data.forEach(r=>{
const li = document.createElement("li");

li.innerHTML = `
<b>${r.name}</b><br>
Ingredients: ${r.ingredients}<br>
Time: ${r.time}
`;

list.appendChild(li);

});

}

loadRecipes();