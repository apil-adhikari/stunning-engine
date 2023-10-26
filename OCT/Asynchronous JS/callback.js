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

// post is pushed after 2 seconds
const createPost = (post) => {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
};

getPosts();

// calling createPost()
createPost({ title: "Post three", body: "This is post three." });

// Only 2 posts are shown in list as createPost() takes 2 seconds to run but getPosts() finishes displaying each post in 1 second.
// [To avoid this from happening, we use asynchronous way.]
