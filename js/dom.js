const printPosts = (postArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  wrapper.innerHTML = "";

  postArray.forEach((post) => wrapper.append(createBlogEntry(post)));
};

const createBlogEntry = (postObject) => {
  let { author, category, date, image, rating, relevant, title } = postObject;

  let blogEntry = document.createElement("article");
  blogEntry.classList.add("card");

  let cardImg = document.createElement("img");
  cardImg.classList.add("card-img");
  cardImg.src = image;

  let cardContent = document.createElement("div");
  cardContent.classList.add("content");

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  let blogAuthor = document.createElement("div");
  blogAuthor.classList.add("blog-author", "d-flex", "gap-2");

  let authorImg = document.createElement("img");
  authorImg.classList.add("rounded-circle", "img-thumbnail");
  authorImg.src = "https://randomuser.me/api/portraits/men/40.jpg";

  let creationInfo = document.createElement("div");
  creationInfo.classList.add(
    "blog-creation-info",
    "d-flex",
    "justify-content-center",
    "flex-column"
  );

  let authorName = document.createElement("div");
  authorName.classList.add("blog-author__name");
  authorName.innerText = author;

  let creationTime = document.createElement("div");
  creationTime.classList.add("timestamp");
  creationTime.innerText = date;

  creationInfo.append(authorName, creationTime);
  blogAuthor.append(authorImg, creationInfo);

  let blogContent = document.createElement("div");
  blogContent.classList.add("card-content");

  const blogTitle = document.createElement("h2");
  blogTitle.textContent = title;

  const hashtags = document.createElement("div");
  hashtags.classList.add("hashtags", "d-flex", "col-8", "gap-2");

  blogContent.append(blogTitle, hashtags);

  blogEntry.append(cardImg, cardContent, cardHeader, blogAuthor, blogContent);

  return blogEntry;
};

export { printPosts, createBlogEntry };
