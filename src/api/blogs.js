function getBlogs() {
    return fetch("http://localhost:3000/blogs").then((res) => res.json())
}

//not sure why but vs code recommends this function instead of the above.
// async function getBlogs() {
//     const res = await fetch("http://localhost:3000/blogs");
//     return await res.json();
// }

//request to save a blog
function createBlog(blog)   {
    return fetch("http://localhost:3000/blogs", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
    }).then((res) => res.json())
}

function updateBlog(blog)   {
    return fetch(`http://localhost:3000/blogs/${blog.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
    }).then(res => res.json())
}