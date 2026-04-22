const API = "http://localhost:3000/books";

function showError(message) {
    alert(message);
}

async function requestJson(url, options = {}) {
    let res;

    try {
        res = await fetch(url, options);
    } catch (err) {
        throw new Error("Cannot reach the server. Open the app from http://localhost:3000 and make sure npm start is running.");
    }

    let data = null;
    try {
        data = await res.json();
    } catch (err) {
        data = null;
    }

    if (!res.ok) {
        const message = data?.message || `Request failed with status ${res.status}`;
        throw new Error(message);
    }

    return data;
}

async function loadBooks() {
    try {
        const books = await requestJson(API);
        const list = document.getElementById("bookList");
        const emptyState = document.getElementById("emptyState");
        const count = document.getElementById("bookCount");

        list.innerHTML = "";
        count.textContent = books.length;
        emptyState.classList.toggle("show", books.length === 0);

        books.forEach((book) => {
            const card = document.createElement("article");
            card.className = "book-card";

            const initial = (book.title || "?").charAt(0).toUpperCase();

            card.innerHTML = `
                <div class="book-card-cover">
                    <i class="fas fa-book-open" aria-hidden="true"></i>
                </div>
                <div class="book-card-content">
                    <h3>${book.title}</h3>
                    <p>by ${book.author}</p>
                    <div class="card-meta">
                        <span class="book-badge">${initial} Shelf</span>
                        <button class="delete-btn" onclick="deleteBook('${book._id}')" title="Delete Book">
                            <i class="fas fa-trash-alt" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            `;

            list.appendChild(card);
        });
    } catch (err) {
        showError(err.message);
    }
}

async function addBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();

    if (!title || !author) {
        showError("Please enter all the fields");
        return;
    }

    try {
        await requestJson(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                author,
                genre: "General",
                rating: 4,
                available: true
            })
        });

        document.getElementById("title").value = "";
        document.getElementById("author").value = "";

        await loadBooks();
    } catch (err) {
        showError(err.message);
    }
}

async function deleteBook(id) {
    try {
        await requestJson(`${API}/${id}`, { method: "DELETE" });
        await loadBooks();
    } catch (err) {
        showError(err.message);
    }
}

loadBooks();
