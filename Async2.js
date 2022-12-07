let posts = [
    {title:'Post One', body:'This is Post One',createdAt:new Date().getTime()},
    {title:'Post Two', body:'This is Post Two', createdAt: new Date().getTime()}
]
const posts =
[
    {title : 'Post one' , body : 'This is post one' , createdAt : new Date().getTime()},
    {title : 'Post two' , body : 'This is post two' , createdAt : new Date().getTime()}

];


function getPosts()
{
    setTimeout(()=>
    {
        let output = ''
        posts.forEach((post)=>
    return new Promise((resolve, reject) =>{
        setInterval(() =>
        {
            output+= `<li>${post.title} Last edited ${post.createdAt} seconds ago</li>`
        })
        document.body.innerHTML = output
    },4000)
            let output = ''
            posts.forEach((post) =>
            {
                output+= `<li>${post.title} Last Edited ${post.createdAt} seconds ago</li>`;
            });
            document.body.innerHTML = output;
            // console.log(output);
            resolve()

        }, 4000)
    })


}
function createPost(post)
{
    let Create =  new Promise((resolve, reject)=>

function createPost(post){
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        setTimeout(() =>
        {
            posts.push({...post , createdAt : new Date().getTime()});
            posts.push({...post ,createdAt : new Date().getTime() });


            const error = false;
            if(!error)
            {

            if(!error){
                resolve()
            }else{
                reject('Error: Somthing is worng ')
            }
            else
            {
        },1000)
    })

    let updateLastUserActivityTime = new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.forEach((post) => {
                post.createdAt = (new Date().getTime() - post.createdAt)/1000;
            })

            const error = false

            if(!error){
                resolve()
            }else{
                reject('Something went wrong')
            }
        },2000)
        }, 2000);
    })
    let  updateLastUserActivityTime = new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {   
            posts.forEach((post)=>
        {
            post.createdAt = ((new Date().getTime()) - (post.createdAt))
        })
            resolve()
        })
    },3000)
    return  [Create , updateLastUserActivityTime]

    return  updateLastUserActivityTime;

}

function deletePost(){
    return new Promise((resolve, reject)=>
function delectePost(){
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
        if(posts.length!=0)
        setTimeout(() =>
        {
            posts.pop()
            console.log(posts)

            const error = false
                if(!error)
                {
                    resolve()
                }
                else
                {

            if(posts.length !=0)
            {
                posts.pop(posts.length -1);
                const error = false
                if(!error){
                    resolve('')
                }else{
                    reject('Something went wrong')
                }
        }
        else
        {
            reject('Error: Array is Empty')
        }

    },3000)
})
            }else{

                reject('Array is Epmty now')
            }
        },1000)
    })
}

Promise.all(createPost({title:'Post Three', body:'This is Post Three'})).then().then(getPosts)