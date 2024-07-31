//program 1
// function condition(num){
//     for(itr=1;itr<=num;itr++)
//     {
//     if(itr%3==0 && itr%5!=0)
//         console.log("fizz");
//     else if(itr%5==0 && itr%3!=0)
//         console.log("Bus");
//     else if(itr%3==0 && itr%5==0)
//         console.log("Busfizz")
//     else{
//         console.log(itr);
//     }}
// }
// condition(100);

//program 2 
// function text(str){
//   let str1=(str.split("").reverse().join(""));
//   if(str==str1){
//     return("palindrome");}
//   else{
//     return("Not a palindrome");
//   }
//  }
// console.log(text("kayak"));

//program 3
// let arr=[10,30,60,70];
// arr.sort();
// console.log(arr[arr.length-1]);

//program 6
// function factorial(num){
//     let fact=1,itr;
//     for(itr=1;itr<=num;itr++)
//     {
//         fact=fact*itr;
//     }
//     return fact;
// }
// console.log(factorial(6));

//program 7
// function fahrenheit(celsius){
//       let temp=(celsius-32)*5/9;
//       return temp;
//     }
// console.log(fahrenheit(40));

//program 5
// let str="this place looks beautiful";
// let words=str.split(" ");
// let longest=" ";
// for(let itr=0;itr<words.length;itr++){
//     if(words[itr].length>longest.length){
//         longest=words[itr];
//     }
// }
// console.log(longest); 

//program 4
// function count(str,char){
//     let count=0;
//     for(let itr=0;itr<str.length;itr++){
//         if(str[itr]==char){
//             count++
//         }
// }
// return count;
// }
// console.log("hello","hi");
// let message={
//     fname:"Lydia",
//     lname:"Ebikumar",
//     text:function(){
//     document.write(this.fname+this.lname);}
//     }
//     message.text()
// let message={
//     text:function(){
//     console.log(this.fname+this.lname+this.city+this.area);
//     }

// }
// let message1={
//     fname:"Lydia",
//     lname:" Ebikumar",
//     city:" chennai",
//     area:" Anna Nagar",
// }
// message.text.call(message1)
// const welcome={
//     fname:"Lydia",
//     lname:"Ebikumar",
//     text:function(){
//     document.write(this.fname +" "+this.lname);
//     }
// }
// welcome.text()
// const message={
//     city:"kallakurichi",
//     state:"Tamil Nadu",
// }
// document.write(message.city +" "+message.state);
// const hello=()=>
//     console.log("Lydia");
// hello();
// const sqr=(a)=>a*a;console.log(sqr(5));




// let arr=[10,30,20,50];
// console.log("array creation "+arr); //1.array creation
// arr.push(70);
// console.log("push "+arr); //2.array manipulation
// arr.pop();
// console.log("pop "+arr); //array manipulation
// console.log("array sorting "+arr.sort()); //3.array sorting
// console.log("array reverse "+arr.reverse()); //array reverse
// console.log("flatening array "+arr.flat()); //4.flatening array
// console.log("array searching "+arr.indexOf(20)); //5.array searching
// arr.sort();
// console.log("Max "+arr[arr.length-1]);//7.maximum
// console.log("min "+arr[0]);//minimum


// let x=[10,20,30,40];//array manipulation with slice
// let y=x.slice();y.push(50);
// console.log(y);
// x.splice(1,3)//removing array items by index
// console.log(x);

// let arr1=[10,20,30];
// let arr2=[40,50,60];
// console.log(...arr1,...arr2);//array spreading

// let message=['lydia','evanjelin','serena'];
// let text=message.filter(message=>message.length<6)
// console.log(text);

// let numbers=[20,30,50,70];//map()
// let numbers1=numbers.map((x)=>x*2);
// console.log(numbers1);

// let str=['Hi','hello'];
// let result=str.map((x)=>x.toUpperCase());
// console.log(result);

// function validationform(){
//     var fname=document.validate.fname.value;
//     var lname=document.validate.lname.value;
//     var city=document.validate.city.value;
//     var phno=document.validate.phno.value;
//     var address=document.validate.address.value;
//     if(fname==null || fname==""){
//            alert("Enter your Firstname");
//            return false;
// }
// else if(lname==null || lname==""){
//     alert("Enter your Lastname");
//     return false;
// }
// else if(city==null || city==""){
//     alert("Enter your City");
//     return false;
// }
// else if(phno.length<10 || phno.length>10){
//     alert("Check your Phone Number");
//     return false;
// }
// else if(address==null || address==""){
//     alert("Enter your Address");
//     return false;
// }
// }


// let arr=['lydia','evanjelin','serena']
// let text=arr.filter(arr=>arr.length>5)//array filtering
// console.log(text);
// let message=arr.map((x)=>x.toUpperCase());//array mapping
// console.log(message);
// let add=arr.join();//array joining
// console.log(add);
// let str='hello';//array spliting
// let result=str.split('');
// console.log(result);
// let arr1=[2,3,4];//array merging
// let arr2=[5,6,7];
// let res=arr1.concat(arr2);
// console.log(res);
// let str1="full stack development";//finding a longest string
// let words=str1.split(" ");
// let longest=" ";
// for(let itr=0;itr<words.length;itr++){
//     if(words[itr].length>longest.length){
//         longest=words[itr];
//     }
// }
// console.log(longest); 
// let inputs=document.getElementById("inp");
// let text=document.querySelector(".text");
// function Add(){
//      if(inputs.value == ""){
//         alert("please enter task");
//     }
// }
// function remove(){
//     let message=document.getElementById("inp");
//     message.remove();}

// let taskList = document.getElementById('task-list');
// let addBtn = document.getElementById('add');
// let taskInput = document.getElementById('task');
// function addTask() {
//     let task = taskInput.value;
//      if (task!="") {
//         let taskElement = document.createElement('li');
//         taskElement.textContent = task;
//         taskElement.innerHTML += '<button class="delete" onclick="f()">Delete</button>';
//         taskList.appendChild(taskElement);
//         taskInput.value = '';
//         taskElement.querySelector('.delete').addEventListener('click', deleteTask);
//         }
//        else{
//             alert("fill the input");
//         }
//         }
//         function deleteTask(event) {
//             let taskElement = event.target.parentNode;
//             taskList.removeChild(taskElement);
//             }
// try{
//     num1=prompt("enter num1");
//     num2=prompt("enter num2");
//     if(num2==0)
//         throw "it should be zero";
//     console.log(num1/num2);
// }
// catch(error){
//     console.log(error);
// }
// let arr=[1,3,4,5];
// let arr1=[6,7,8,9];
// console.log(...arr,...arr1);
// let obj={fnmae:"lydia",age:"19"};
// let obj1={city:"cbe"};
// console.log({...obj,...obj1});
// let a,b,c,sum=0;
// function add(a,b,c){
//    sum=a+b+c;
//    return sum;
// }
// let add1=[1,2,3];
// console.log(sum(...add));
// localStorage.setItem('name','lydia');
// localStorage.setItem('name','ev');
// localStorage.setItem('name','sere');

// sessionStorage.setItem('name','lydia');
// sessionStorage.setItem('city','ev');
// sessionStorage.setItem('age','sere');

// let str="Full stack development";
// let words=str.split(" ");
// let longest=" ";
// for(let itr=0;itr<words.length;itr++){
//     if(words[itr].length>longest.length){
//         longest=words[itr];
//     }
// }
// console.log(longest); 

// let arr1 = [1,2,3,4,5];
// let arr2 = [5,6,7,8,2];
// let inter = arr1.filter(x=>arr2.includes(x));//intersection
// console.log("Intersection of two arrays " +inter);
// let difference=arr1.filter(x=>!arr2.includes(x));//difference
// console.log("Difference between two arrays "+difference);
// const arrayOfArrays=[
//     [2,4,7],
//     [1,2,5],
//     [9,7,8]
// ];
// console.log(arrayOfArrays);//arrayOfArray
// const numbers=[10,60,87,50];
// const[first,...rest]=numbers;//array destructing
// console.log(first);
// console.log(rest);

// function removeIndex(arr,value){//removespecificindex
//      const index=arr[value-1];
//      if(index>-1){
//         arr.splice(index,1);
//      }
//      return arr;
// }
// let arr=[1,3,5,6];
// console.log(removeIndex(arr,2));
// let a1="@ $ % welcome to my message 2024 204 20739";
// let a2=/\d{3,}/gm;
// console.log(a1.match(a2));


// const colors=["lydia","hii","hello"];
// colors.forEach(function(){
//     console.log(colors);
// })

// const numbers=[1,2,3,4,5];
// const doubled=numbers.map(function(numbers){
//     return numbers*2;
// });
// console.log(doubled);

// const now=new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getDay());
// console.log(now.getMilliseconds());

// let promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("operation successful");
//     }
//     else{
//         reject("operation failed");
//     }
// })
//     promise
//     .then(result=>{
//         console.log(result);
//     })
//     .catch(error=>{
//         console.error(error);
//     })
//     .finally(()=>{
//         console.log("Task completed successfully");
//     })

    // function openForm() {
    //     document.getElementById("myForm").style.display = "block";
    //   }
      
    //   function closeForm() {
    //     document.getElementById("myForm").style.display = "none";
    //   }

    function rotateRight(arra,k){ //array rotation
      k = k%arra.length;
      const rotatedPart=arra.slice(arra.length-k);
      const restOfArray=arra.slice(0,arra.length-k);
      return rotatedPart.concat(restOfArray);
    }
    const array=[5,6,8,9,2];
    const rotations=1;
    const rotatedArray=rotateRight(array,rotations);
    console.log(rotatedArray);

    const number=[10,20,30,50];//checking array elements
    const add=number.includes(10);
    console.log(add);
    
    const message=[ //array of object sorting
     { fname:"Lydia",age:20},
     { fname:"Eva",age:18},
     { fname:"Serena",age:17},
     { fname:"Ela",age:13}
    ]
   message.sort((a,b)=>a.age-b.age);
   message.forEach((e)=>{
    console.log(e.age);
   })

   function equal(arr1, arr2) { //equality of array
    if (arr1.length !== arr2.length) {
        return false;
}
for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
}}
return true;
}
const array1 = [1,2,3,4,5,6];
const array2 = [1,2,3,4,5,6];
console.log(equal(array1, array2)); 

function NewArray(size) { //creating a new array with given length
  var x = [];
  for (var i=0;i<=size;++i) {
      x[i]= i;
  }
  return x;
}
var d = NewArray(10);
console.log(d);


