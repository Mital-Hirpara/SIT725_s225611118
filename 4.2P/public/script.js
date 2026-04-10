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
Time: ${r.time}>
`;

 // Create Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.style.marginTop = "5px";
        delBtn.style.backgroundColor = "red";
        delBtn.style.color = "white";
        delBtn.style.border = "none";
        delBtn.style.padding = "5px 10px";
        delBtn.style.borderRadius = "5px";
        delBtn.style.cursor = "pointer";

        delBtn.onclick = async () => {
            await fetch(`${API}/${r.id}`, { method: "DELETE" });
            loadRecipes(); // refresh list
        };

        li.appendChild(document.createElement("br"));
        li.appendChild(delBtn);

list.appendChild(li);

});

}

async function deleteRecipe(id) {
    try {
        await requestJson(`${API}/${id}`, { method: "DELETE" });
        await loadBooks();
    } catch (err) {
        showError(err.message);
    }
}

loadRecipes();