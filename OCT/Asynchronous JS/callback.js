const posts = [
  { title: "Post one", body: "This is post one." },
  { title: "Post two", body: "This is post two." },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

// createPost() takes 2 seconds to push the post, so we should have some way to hold until createPost() finishes its job then run the getPosts() to get all posts. We do this by passing a callback function as an argument to the createPost() and calling it inside the function itself [i.e. Callback Function: a function calling itself]
const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    // calling callback()
    callback();
  }, 2000);
};

//calling createPost() and passing required arguments as well as getPosts() as parameter to createPost() so getPost() will be called as soon as createPost() push work has beed done.
createPost({ title: "Post three", body: "This is post three." }, getPosts);
