// /*let arr = [ 1, 2 , 5 , 7]
// console.log(arr)
// console.log(arr.length-1)
// console.log(arr[0])
// console.log(arr[7])
// arr[5]=115
// console.log(arr[5])
// console.log(arr)
// arr[2]="Vaibhav"
// console.log(arr, typeof arr)*/

// /*

// const arr = ["ABC", "BCD", "CDE", "DEF", "EFG"]
// console.log(arr.toString())
// arr.push(25)
// console.log(arr)   

// const mySym = Symbol("Key1");

// const JsUser = {
//   Name : "Vaibhav",
//   Age : 25,
//   mySym : "myKey",
//   Location : "Pune",
//   Email : "Vaibhav123@gamil.com"
// }
// console.log(JsUser["Name"])
// console.log(JsUser[mySym])
// console.log(JsUser)


// function add(a, b){
//   return a + b
// }
// const x = add(5 , 6)
// console.log(x)

// (function(a, b){
//    var add = a + b;
//    console.log(add);
//  })(5,5);

// (function(a, b){
//   var divide = a * b;
//   console.log(divide);
// })(5, 6);*/

// const marvel = [" Thor", "IronMan", "SpiderMan"]
// const dc = ["SuperMan ", " Batman", " Flash"]

// //const all = marvel.concat(dc)
// //console.log(all)

// const hero = [...marvel, ...dc]
// console.log(hero)

// const simpleArray = [1, 2, 3 ,[4, 5 ,[6, 7 ] ] ]
// const Array = simpleArray.flat(Infinity)
// console.log(Array)


// 
// const JsUser = {
//   id : "Vaibhav",
//   UserName : " Vaibhav123",
//   Password : " Vaibhav@123",
//   BirthDate : "18/0/2003"
// }

//   console.log(JsUser.id)


//  const data = [
//   {
//     id : 1,
//     name : "vaibhav",
//     mobile : 9529209143,
//   },
//   {
//     id : 2,
//     name : "Omake",
//     mobile : 1234567820,
//   }
// ]
// console.log(JSON.stringify(data,null,2))

// const  names = data.map(item => item.name)
// console.log(names)

// function add ( a, b, c)
// {
//   return a + b + c
// }

// const x = add( 5, 6 , 7)
// console.log(x)

// const add = (a,b,c) => {
//   return a + b + c
// }
// const x =add(5,6,7)
// console.log(x)


const JSUser = [
  {
    id: 1,
    name: "Vaibhav",
    Location: "pune",
    Email: "vaibhav@123"
  },
  {
    id: 2,
    name: "Sakshi",
    Location: "Mumbai",
    Email: "Sakshi@123"
  },
  {
    id: 3,
    name: "Neha",
    Location: "Jalgoan",
    Email: "Neha@123"
  },
  {
    id: 4,
    name: "Om",
    Location: "Town",
    Email: "Om@123"
  }
]
// console.log(JSON.stringify(JSUser, null , 2))

// const render = (item) => {
//   const { id , name , Location , Email } = item
//   console.log(`ID : ${id}  , Name : ${name} , Location : ${Location} , Email : ${Email} `)
// }
// JSUser.forEach(render)

const Timer = () => {

}