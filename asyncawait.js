// async function greet(){
//     //return "dany"; // async function always return a promise
//     return new Promise((resolve, reject) => {
//         reject ("rohit");
//     })
// }
// const response=greet();
// // console.log(response);
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:", error);
// })
// const response=await fetch("https://api.github.com/users");
// const data=await response.json();
// console.log(data);
async function github() {
    try{
    const response=await fetch("https://api.github.com/users");
    if(!response.ok){
        throw new Error("Data is not present");
    }
    const data=await response.json();
    const parent =document.getElementById("first");
    // console.log(data);
    for(let user of data){
        const element=document.createElement("div");
        element.classList.add("user");
        const image=document.createElement("img");
        image.src=user.avatar_url;
        const username=document.createElement("h2");
        username.textContent=user.login;
        const anchor=document.createElement('a');
        anchor.href=user.html_url
        anchor.textContent="visit profile"
        element.append(image,username,anchor);
        parent.append(element);

    }
}
catch(error){
    console.log("Error:",error);


}

    
}
github();

async function userdetails() {
    // const comment=await fetch ("userComment");
    // const photos=await fetch ("userphoto");
    // const chat=await fetch("chat");
    // above three tasks are independ of each other they are making our code slow
    // and untill  the execution of the first response second will not start running 
    //so to solve this problem we are running this parralely like following
   const[comment,photos,chat] =await Promise.all([fetch("userComment"),fetch("userphoto"),fetch("chat")]);

    
}

