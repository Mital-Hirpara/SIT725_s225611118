async function loadBooks(){

const res = await fetch("/api/books");

const books = await res.json();

const container = document.getElementById("books");

container.innerHTML="";

books.forEach(book=>{

const div = document.createElement("div");

div.innerHTML = `
<h3>${book.title}</h3>
<p>Author: ${book.author}</p>
`;

container.appendChild(div);

});

}

window.onload = loadBooks;