// let num=(Math.floor(Math.random()*10))+1;
// console.log(num);
//otp generation using math.random but it is not safe cuz it take time as seed or input to generate some xyz otp 
//generate 5 digit otp 100000-99999
let num2=(Math.floor(Math.random()*(99999-10000)+1))+10000;
console.log(num2);
//write and random math function 
 function random(){
    let now=new Date();
    let num =now.getMilliseconds();
    //let num=25987**0.5;// this is the seed or input // here the value is remaming constst we need variable values
    num= num**3;
    num/=10000;
    let decimal='.'+num.toString().split(".")[1];
    return Number(decimal);
    //formula for the genrating otp using math .random function
    //math.floor(math.randm()*(max-min)+1)+min
    
    

}
random();
// generate otp 
function generate(){
    console.log(Math.floor(random()*(9999-1000)+1))+1000;
}
generate();
