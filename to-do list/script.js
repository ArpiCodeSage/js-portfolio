//DELETE BOOKS
const container = document.querySelector(".container");
const delbtns = document.querySelectorAll(".delbtn");
const book = document.querySelector(".book");
function deletebook(e) {

  e.target.closest(".book").remove();//to remove it entirely,not just hide it visually


}
delbtns.forEach((btn) => {
  btn.addEventListener("click", deletebook);
})
/* doing query selector all for book :works only for the books that already exist at page load.
Because querySelectorAll gives you a static NodeList — it won’t auto-update when you add new books dynamically as you have an add books option too* so put it inside an event listener to work*/


// ADD BOOKS
const addbook = document.querySelector("#addbook");
addbook.addEventListener("click", () => {
  const val = document.getElementById("add_books_here").value.trim();
  if (val == "")
    return;
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = val;
  li.appendChild(p);
  li.setAttribute('class', 'book unread');
  const rubtn = document.createElement('button');
  rubtn.className = "read-toggle";
  rubtn.textContent = "Mark as Read";
  li.appendChild(rubtn);
  const btn = document.createElement('button');
  btn.className = "delbtn";
  btn.innerHTML = "<span>delete</span>";
  li.appendChild(btn);
  document.querySelector(".book_list ul").appendChild(li);
  document.getElementById("add_books_here").value = "";
  btn.addEventListener("click", deletebook);
});

//SEARCH BOOK
const searchbook = document.forms["searchbar"].elements["book-search"];

searchbook.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  const books = document.querySelectorAll('li');

  books.forEach(book => {
    const title = book.querySelector('p').textContent;
    book.style.display = (title.toLowerCase().indexOf(term) != -1) ? "flex" : "none";
  });
});



//CHECKBOX TO HIDE ALL BOOKS
const checkbox = document.getElementById("check-box");
checkbox.addEventListener("change", () => {
  const books = document.querySelectorAll('.book');

  Array.from(books).forEach(book => {
    if (checkbox.checked) {
      book.style.display = "none";
    }
    else
      book.style.display = "flex";

  })

})


//TABBED CONTENTS
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function (e) {
  if (e.target.tagName === "LI") {
    // remove 'active' from all tabs first
    document.querySelectorAll('.tabs li').forEach(tab => tab.classList.remove('active'));

    // add 'active' to clicked tab
    e.target.classList.add('active');

    // get target panel
    const targetPanel = document.querySelector(e.target.dataset.target);

    // toggle panels
    panels.forEach(panel => {
      panel.classList.toggle('active', panel === targetPanel);
    });
  }
});



//ALL,READ,UNREAD FILTERS
const filterbtns = document.querySelectorAll('.filters button');

filterbtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
      if (filter == 'all')
        book.style.display = 'flex';
      else {
        book.style.display = book.classList.contains(filter) ? 'flex' : 'none';
      }
    })
  })
})



//MARK AS READ,UNREAD
document.querySelector('.book_list').addEventListener('click',
  (e) => {
    if(!e.target.classList.contains("read-toggle"))
      return;
    const book = e.target.closest('.book');
    if (book.classList.contains('unread')) {
      book.classList.remove('unread');
      book.classList.add('read');
      e.target.textContent = 'Mark as Unread';
    }
    else {
      book.classList.remove('read');
      book.classList.add('unread');
      e.target.textContent = 'Mark as Read';
    }

  });





