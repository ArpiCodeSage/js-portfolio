let books = JSON.parse(localStorage.getItem("books")) || [
  { title: "Pride and Prejudice by Jane Austen", read: false },
  { title: "1984 by George Orwell", read: true },
  { title: "The Great Gatsby by F. Scott Fitzgerald", read: true },
  { title: "The Alchemist by Paulo Coelho", read: false },
  { title: "Wings of Fire by A.P.J. Abdul Kalam", read: true },
  { title: "To Kill a Mockingbird: by Harper Lee", read: false },
  { title: "The Lord of the Rings: by J.R.R. Tolkien", read: false },
  { title: "Sapiens: by Yuval Noah Harari", read: true }
];

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}


function renderBooks() {
  const list = document.querySelector(".book_list ul");
  list.innerHTML = "";

  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.classList.add("book");
    li.classList.add(book.read ? "read" : "unread");

    li.innerHTML = `
      <p>${book.title}</p>
      <button class="read-toggle" data-index="${index}">
        ${book.read ? "Mark as Unread" : "Mark as Read"}
      </button>
      <button class="delbtn" data-index="${index}">delete</button>
    `;

    list.appendChild(li);
  });
}

renderBooks();


document.querySelector(".book_list").addEventListener("click",(e)=>{
  if(e.target.classList.contains("delbtn")){
    const index=e.target.dataset.index;
    books.splice(index,1);
    saveBooks();
    renderBooks();

}});

document.querySelector(".book_list").addEventListener("click",(e)=>{
    if(!e.target.classList.contains("read-toggle"))
        return;

    const index=e.target.dataset.index;
    books[index].read=!books[index].read;
    saveBooks();
    renderBooks();
})
 document.getElementById("addbook").addEventListener("click",()=>{
    const input=document.getElementById("add_books_here");
    const title=input.value.trim();
    if(!title)return;

    books.push({title,read:false});
    input.value="";
    saveBooks();
    renderBooks();
 })

 const searchbook=document.forms["searchbar"].elements["book-search"];
 searchbook.addEventListener("keyup",(e)=>{
    const term=e.target.value.toLowerCase();
    const bookUI=document.querySelectorAll("li.book");

    bookUI.forEach((book)=>{
        const title=book.querySelector("p").textContent.toLowerCase();
        book.style.display=title.includes(term)?"flex":"none";
    })
 });

 const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");

tabs.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    document
      .querySelectorAll(".tabs li")
      .forEach((tab) => tab.classList.remove("active"));

    e.target.classList.add("active");

    const targetPanel = document.querySelector(e.target.dataset.target);

    panels.forEach((panel) => {
      panel.classList.toggle("active", panel === targetPanel);
    });
  }
});

// HIDE ALL BOOKS CHECKBOX
// -------------------------------
const checkbox = document.getElementById("check-box");

checkbox.addEventListener("change", () => {
  const booksUI = document.querySelectorAll(".book");

  booksUI.forEach((book) => {
    book.style.display = checkbox.checked ? "none" : "flex";
  });
});

// -------------------------------
// FILTER BUTTONS (ALL / READ / UNREAD)
// -------------------------------
const filterbtns = document.querySelectorAll(".filters button");

filterbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    const booksUI = document.querySelectorAll(".book");

    booksUI.forEach((book) => {
      if (filter === "all") {
        book.style.display = "flex";
      } else {
        book.style.display = book.classList.contains(filter) ? "flex" : "none";
      }
    });
  });
});

