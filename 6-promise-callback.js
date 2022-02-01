const  posts = [
    {title: "Post 1", body: "Text post 1."},
    {title: "Post 2", body: "Text post 2."},
]

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            console.log(post.title);
        })
    },2000)
}

function createPost(post, callback){

    return new Promise((resolve, reject) =>{   
        setTimeout(() => {
            posts.push(post);
            const error = false

            if(!error){
                resolve();
            } else{
                reject("Error: Something went wrong.");
            }
        },5000)
    })
}

createPost({title: "Post 3", body: "Text post 3."}).then(getPost);

