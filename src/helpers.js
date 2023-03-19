function appendBlogToDOM(blog)  {

    //variables
    const container = document.querySelector(".blogs-container");
    console.log(container);
    const card = document.createElement('div');
    const titleElem = document.createElement('h2');
    const contentElem = document.createElement('p');
    const imageElem = document.createElement('img');

    const editBtn = document.createElement('button')

    //add content from api to each element variable
    titleElem.textContent = blog.title;
    contentElem.textContent = blog.content;
    imageElem.src = blog.image_path;
    editBtn.textContent = "Edit";

    //event listener
    editBtn.addEventListener("click", () => {
        onEditBlog(blog, {
            titleElem,
            contentElem,
            imageElem,
        })
    })

    //add a class to card
    card.classList.add("card")

    //appending elements together
    card.appendChild(titleElem);
    card.appendChild(contentElem);
    card.appendChild(imageElem);
    card.appendChild(editBtn);
    container.appendChild(card);
}

function onCreateBlog(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const image_path = e.target.image_path.value;
    const blog = { title, content, image_path };

    //send a request to save the blog
    createBlog(blog).then((data)=>{
        if(data.errors){
            console.log(data.errors)
        }else{
            appendBlogToDOM(data)
        }
    })
}

function onEditBlog(blog, blogElems)   {
    //show the form
    const editFormContainer = document.querySelector
    ("#edit-form-blog-container");
    editFormContainer.style.display = "block";
    //extract the blog contents into the form
    const editForm = document.querySelector("#edit-form-blog");
    editForm.title.value = blog.title;
    editForm.content.value = blog.content;
    editForm.image_path.value = blog.image_path;

    //add an event listener to the form
    editForm.addEventListener("submit", (e)=>{
        (e).preventDefault();

        const blogData = {
            title: editForm.title.value,
            content: editForm.content.value,
            image_path: editForm.image_path.value,
            id: blog.id
        }

        //send request
        updateBlog(blogData).then((data)=>{
            if(data.errors){
                console.log(data.errors)
            }else{
                blogElems.titleElem.textContent = editForm.title.value;
                blogElems.contentElem.textContent = editForm.content.value;
                blogElems.imageElem.src = editForm.image_path.value;
                editFormContainer.style.display = "none"
            }
        })
    })
}