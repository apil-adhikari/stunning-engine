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
// createPost({ title: "Post three", body: "This is post three." })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Async / Await
const init = async () => {
  await createPost({ title: "Post three", body: "This is post three." });

  getPosts();
};

init();

// Async / Await with fetch
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

fetchUsers();

// Promise.all()
// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Good Bye")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((vlaues) =>
//   console.log(vlaues)
// );
