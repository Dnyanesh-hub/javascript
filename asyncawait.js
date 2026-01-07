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
    const response=await fetch("https://api.github.com/users");
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
github();


