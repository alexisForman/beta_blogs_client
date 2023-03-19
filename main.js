getBlogs().then((data)=>{
    console.log(data);

    data.forEach((blog)=>{
        appendBlogToDOM(blog)
    })
})

//access the create form blog elements
const form = document.querySelector("#form-blog");

form.addEventListener("submit", (e)=>{
    onCreateBlog(e);
})