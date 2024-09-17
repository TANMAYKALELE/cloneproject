// for (let i = 1; i<=5; i++){
//     console.log(i)
// }
// console.log("loop has ended");

// let str1 = "tanmay";
// console.log(str1.charAt(0));


// let fullname = prompt ("Enter your full name without spcaes ");
// let username = "@" + fullname + fullname.length;
// console.log(username);

// let item = [250,645,300,900,50]
 
// for (let i = 0; i < item.length; i++){
//     let offer = item[i] / 10;
//     item[i] -= offer;

// }
// console.log (item);

// arr = ["Bloomberg", "Miucrosoft", "Uber", "google", "IBM", "Netflix"]
// console.log(arr);
// arr.splice(2,1,"Ola");
// console.log(arr);
// arr.push ("Viahay");
// console.log(arr);




//filter array method practice question
// let marks = [99,73,84,92,90,63,97];
// let newmarks = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(newmarks);





//  Array Methods Reduce Practise question
// let n = prompt ("Enter a Number ");
// let arr = [];
// for (let i = 1 ; i<=n ; i++){
//     arr [i-1]= i;
// };
// console.log(arr);

// let sum = arr.reduce((res , curr)=>{
//     return res + curr;
// })
// console.log(sum);

// let btn1 = document.querySelector("#btn1")

// btn1.onclick = () =>{
//     console.log("btn1 was clicked")
//     let a = 25;
//     a++;
//     console.log(a);
// }
 
// let div = document.querySelector("div");
// div.onmouseover = () =>{

//     console.log("You are inside div")
// };


// class ToyotaCar{
//     constructor(brand, milege){
//         console.log("Creating New Object")
//         this.brand = brand;
//         this.milege = this.milege;
//     }
//     start(){
//         console.log("Toyota Car is started");
//     }
//     stop(){
//         console.log("Toyota Car is stopped");
//     }


// }
// let forutner = new ToyotaCar("Fortuner",12);


// class Person{
//     constructor(name){
//         this.species = "homo sepians"
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }

// }

// class Engineer extends Person{
//     constructor(name){
//         super(name);
        
//     }
//     work(){
//         super.eat();
//         console.log("work");
//     }
// }

// let tanmay = new Engineer("Tanmay");


// INHERITANCE
// let DATA = "secret info";
// class User{
//    constructor(name, email){
//     this.name = name;
//     this.email = email;
//    }
// viewData() {
//     console.log("Website data", DATA)
// }
// }
// class Admin extends User{
//     constructor(name, email ){
//         super(name, email);
//     }
//     editData(){
//         DATA = "new secret info";
//     }
// }
// let student1 = new User("tanmay", "jaintanmay2811@gmail.com");
// let student2 = new User("Mamta", "jainmamta2811@gmail.com");
// let Admin1 = new Admin("Admin", "Admin@collage.com");

//  getData(1 , ()=>{
//     getData(2, ()=>{
//         getData(3 , ()=>{
//             getData(4);
//         });
//     });
//  });


// async function hello(){
//     console.log("Hello");
// }

//  function getData(dataId){
//     return new Promise ((resolve, reject ) => {
        
//             setTimeout(()=>{
//                 console.log(dataId)
//                 resolve("Success");
//             },2000)
        
//     })}
//  }

//          getData(1).then((res) => {
//             console.log(res)
//             getData(2).then ((res)=>{
//                 console.log(res)
//             })
//             getData(3).then ((res) =>{
//                 console.log(res)
//             })
//         });

//ASYNC AWAIT

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Weather Data")
//             resolve("API Data",200);
//         }, 2000)
//     });
// }
// async function getWeatherData(){
//     await api();
//     await api();

// };
// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(dataId)
//             resolve("success", 200)

//         },2000)
//     });
// }

// async function  getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// };

// API 




//ASYNC AWAIT



// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// const getFacts = async()=>{
//     console.log("getting data ....")
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text);
//     factPara.innerHTML = data[1].text;
// };

//PROMISE
// function getFacts(){
//     fetch(URL).then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         console.log(data[0].text);
//     })
// }

// btn.addEventListener("click",getFacts);

c 

