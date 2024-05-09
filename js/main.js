import { getPosts } from "./postsAPI.js";
import { printPosts } from "./dom.js";

let logInBtn = document.getElementById("log-in-btn");

logInBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.open("../views/login.html", "_self");
});

let loggedUser = localStorage.getItem("token");

let userBtns = document.getElementById("user-login");
let registerBtns = document.getElementById("register-btns");

if (loggedUser) {
  userBtns.classList.remove("d-none");
  registerBtns.classList.add("d-none");
} else {
  userBtns.classList.add("d-none");
  registerBtns.classList.remove("d-none");
}

const getPostInfo = async () => {
  let postArr = await getPosts();

  printPosts(postArr, "posts-wrapper");
};

getPostInfo();

let saveBlogEntry = document.getElementById("create-blog-entry");

saveBlogEntry.addEventListener("click", () => {
  let inputs = document.querySelectorAll("#post-form input");

  let entryObject = {};

  inputs.forEach(({ name, value }) => {
    entryObject[name] = value;
  });

  postEntry(entryObject);
});

const postEntry = async (entryObject) => {
  let response = await fetch(
    "https://ejercicio-kodercrud-default-rtdb.firebaseio.com/BlogPosts/.json",
    {
      method: "POST",
      body: JSON.stringify(entryObject),
    }
  );
  let data = await response.json();
  console.log(data);

  getPostInfo();
};

let searchPost = document.getElementById("search-input");

searchPost.addEventListener("keyup", async (event) => {
  let query = event.target.value;

  let postArr = await getPosts();

  let result = postArr.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  printPosts(result, "posts-wrapper");
});
