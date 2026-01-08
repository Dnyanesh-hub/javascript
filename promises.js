//one way to get data by calling api 
// console.log("Hello world start");
// const p1=fetch("https://api.github.com/users");
// // console.log(p1)
// // promise is simply an object which contains three states pending fullfilled reject
// // only when we can read promise ->if the state is fullfiled or reject
// const p2=p1.then((response)=>{
// //    console.log(response.json()); //response.jspn is an asynchrouns task
//        return response.json();
// })
// //data will come in the byte stream we need to convert it into object
// //console.log(p2);// yaha pe bhi woh pending state main hi ayega humko usse bad main hi read krna pdega
// p2.then((response)=>{
//     console.log(response);
// })
// console.log("World end");
//2.second way to get data from api usiing promise chaning
// fetch("https://api.github.com/users")// this is api call come with bytestrem or any status 
// .then((Response)=>{
//     if(!Response.ok){
//         throw new Error("data is not present in server");

//     }
//     return Response.json(); //here by using .json we are going to convert that bytestream into javascrpit object
// })
// .then((data)=>{
//     //console.log(data);// here we are printing that data

//     const parent=document.getElementById("first");
//     for(let i=0;i<data.length;i++){
//         const image=document.createElement('img');
//         image.src=data[i].avatar_url;
//         image.style.height="50px";
//         image.style.width="50px"
//         parent.append(image);

//     }
//     //json=java script object notation each and every lanugauge understands json
// })

// .catch((error)=>{
//     const parent=document.getElementById("first");
//     parent.textContent=error.message;


// })

// const j1={
//     name:"dnyaneshwar",
//     age:20,
//     addrees:"pune",
// }
// // convert to json
// const jsonformat=JSON.stringify(j1);
// console.log(jsonformat);
// const jsonformat=`{
//     "name":"dany",
//     "age":20,
//     "Address":"Pune"
    
// }`;
// // converting json into javascript obje
// const jsobject=JSON.parse(jsonformat);
// console.log(jsobject);

// cretion of the promises
// const p1=new Promise((resolve,reject)=>{
//     // resolve("hello")//fullfilled
//     reject("hello");

// })
// // console.log(p1);
// p1.then((Response)=>{
//     console.log(Response);
// }).catch((error)=>{
//     console.log(error);
// })
// zomato code 
const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
   return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
     // return orderDetail;
      resolve(orderDetail);
      
    },3000)
})

    

    
}



function preparingOrder(orderDetail,){
    console.log(`Your food preparation started of ${orderDetail.food}`);
     return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
    
    },3000);
     })
    
}


function pickupOrder(orderDetail ){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
        
    },3000);
        
    })
   
}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
        resolve(orderDetail);
    },3000)
        
    })
    
}
// placedOrder(orderDetail)

// .then((orderDetail)=>preparingOrder(orderDetail))
// .then((orderDetail)=>pickupOrder(orderDetail))
// .then((orderDetail)=>deliverOrder(orderDetail))
// .then((orderDetail)=>{
//     console.log(orderDetail);
// })
// .catch((error)=>{
//     console.log("Error:",error);

// })
// .finally(()=>{
//     console.log("I am doing cleanup");

// })







// placedOrder(orderDetail, (orderDetail)=>{
//     preparingOrder(orderDetail ,(orderDetail)=>{
//         pickupOrder(orderDetail, (orderDetail)=>{
//             deliverOrder(orderDetail);
//         });
//     });
// });
async function ordering() {
    try{
        const response1=await placedOrder(orderDetail);
    const response2=await preparingOrder(response1);
     const response3=await pickupOrder(response2);
      const response4=await deliverOrder(response3);
      console.log(response4);

    }
    catch(error){
        console.log("error:",error);

    }
    
    
}