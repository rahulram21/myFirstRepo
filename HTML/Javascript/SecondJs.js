function openDiv(){
    
    document.getElementById("demo").style.display="block"
    document.getElementById("demo").style.backgroundColor="#526eff"
    
}
function addContent(){
    document.getElementById("sam").innerHTML="Hyper text <span style='color:yellow'>millionaire</span> sam"
}
/*function getData(){
    alert(document.getElementById("username").value)
    
}*/
function setData(){
    document.getElementById("username").value="Rahul"
}
function plus(){
     let v=document.getElementById("val1").value
     let x=document.getElementById("val2").value
     document.getElementById("val3").value=parseFloat(v)+parseFloat(x)

}
let str="123.456"
console.log(parseFloat(str))
let d=1234;
let p=d.toString()
console.log(p, typeof p)
let x=String("boom")
console.log(x, typeof x)
let obj=new String("hello")//In obj other inbuilt functions are associated with it.
console.log(obj, typeof obj)
let obj1=new String(" hello world ")
/*let s2=obj1.toUpperCase()
console.log(s2)*/
console.log(obj1.length)
console.log(obj1.trim().length)//To remove empty space from beginning and end of the string
console.log(obj1.substring(1,3))//in substring, it excludes the second index
console.log(obj1.substr(1,3))// in substr, it includes the second index too
console.log(obj1.substr(4))
console.log(obj1.startsWith(" h"))
console.log(obj1.endsWith("world "))

let arr1=new Array()
let arr=["Anna","Babu","Meesh",1]
arr[0]="Arun"
arr[4]="dim"
arr.push("Don")
arr.pop()
arr.shift()
arr.unshift("anna")
console.table(arr)//to print with index of elements
for(let i=0;i<arr.length;i++){
    console.log("index : ",i," ", arr[i])
}
//for-each loop
for(let name of arr){
    console.log(name)
}
//for each using in keyword
for(let index in arr){
console.log(index)
console.log(arr[index])
}
//arr.splice(3)//Removing elements from the array after 3rd index

//console.log(arr)
//arr.splice(3,1)//removes only 1 index after 3rd index 
//console.log(arr)
//console.log(arr.splice(2,1,"Renu"))//Insertion also possible
let str2="hello eve, noon"
let str3=str2.split(",")
console.log(str3)
console.log(arr.join(" "))//for joining the array elements into a string by adding space between each elements
let numbers=[10,23,40,50,35,67]
console.log(numbers.length)
console.log(numbers.splice(2,2))
console.log(numbers)