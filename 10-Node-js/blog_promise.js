const blogs = [
    { post: '1- lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum' },
    { post: '2- lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum' },
    { post: '3- lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum' },
    { post: '4- lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum' },
    { post: '5- lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum' }
];

const listBlogs = () => {
    blogs.map((blog) => {
        console.log(blog.post);
    });
};

const addBlog = (newBlog) => {
    blogs.push(newBlog);
};

const deleteBlog = (blog) => {
    const index = blogs.indexOf(blog);
    blogs.splice(index, 1);
};

async function showBlogs() {
    try {
        await addBlog({ post: '6- lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum' });
        listBlogs();
    } catch (error) {
        console.log(error);
    }
}

showBlogs();