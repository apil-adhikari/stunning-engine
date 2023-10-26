const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
    });
    const error = false;

    if (!error) {
      resolve();
    } else {
      reject("Error: Something went wrong!");
    }
  }, 2000);
};

// .then() gets called if resolved
// .catch() gets called if rejected
createPost({ title: "Post three", body: "This is post three." })
  .then(getPosts)
  .catch((err) => console.log(err));
