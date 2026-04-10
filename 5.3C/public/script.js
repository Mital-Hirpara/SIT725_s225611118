async function loadBooks(){

const res = await fetch("/api/books");
const books = await res.json();

const container = document.getElementById("books");

books.forEach(book => {

const div = document.createElement("div");

div.innerHTML = `
<h3>${book.title}</h3>
<p>${book.author}</p>
<p>Price: $${book.price}</p>
`;

container.appendChild(div);

});

}

loadBooks();