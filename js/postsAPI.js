const getPosts = async () => {
  let response = await fetch(
    "https://ejercicio-kodercrud-default-rtdb.firebaseio.com/BlogPosts/.json"
  );

  let posts = await response.json();

  let keys = Object.keys(posts);

  let postsArr = keys.map((key) => {
    return { ...posts[key], key };
  });

  return postsArr;
};

export { getPosts };
