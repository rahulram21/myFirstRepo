/*names=["anna","boom","aswathi","babu","kiran","george","kabra"]
let itemlist=""
for(let name of names){
    itemlist+='<li>',name,'</li>'
}
document.getElementById("list").innerHTML=itemlist*/
function boom(){
    //document.getElementById("mydiv").innerHTML="<p>Boom Boom Boom</p>"
    let mypara=document.createElement("p")//creates html tag
    mypara.innerText="Welcome"
    document.getElementById("mydiv").appendChild(mypara)

}
let data=["a","b","c","d","e"]
for(let dat of data){
    let myp=document.createElement("li")
    myp.innerText=dat
    document.getElementById("bird").appendChild(myp)
}
function remove(){
    let parent=document.getElementById("bird")
    parent.removeChild(parent.childNodes[0])
}
/*let numm_arr=[10,9,8,6,7,4,3,]
numm_arr.forEach((num)=>{
    console.log(num)
})*/
/*********** **/
/*ARRAY FUNCTIONS*/
//Map function
let num_arr=[10,20,41,30,53,60]
console.log(num_arr)
let new_arr=num_arr.map((d)=>{//map function is to manipulate data
    return d**2
})
console.log(new_arr)
/*filter function*/
let new_arrr=num_arr.filter((d)=>{
    if(d%2!=0){
        return d
    }
})
//Trying Map in place of Filter function
console.log(new_arrr)
let new_arrrr=num_arr.map((d)=>{
    if(d%2!=0){
        return d
    }
})
console.log(new_arrrr)
//Reduce function
let r=num_arr.reduce((x,y)=>{
    console.log("X",x)
    console.log("Y",y)
    return x+y
})
//Object notation
console.log(r)
console.log("boom")
let obj={}

let person={
    name:"Rahul",
    age:22,
    profession:"none",
    show:function(){
        console.log(`Name : ${this.name} , age: ${this.age} , profession: ${this.profession}`)
    }
}
person.show()
//Inheritance
let student={
    rollNo:21,
    Name:"Rahul",
    Marks:[20,40,40,0],
    markAvg:function(){
        console.log(`Average of Marks =${this.Marks.reduce((x,y)=>{return x+y})/this.Marks.length} `)

    }
}
student.markAvg()
let employee={
    id:21,
    Name:"John",
    Salary:20000,
    incrementSalry:function(amount){
        this.Salary+=amount
        console.log("Current salary = ",this.Salary)
    }
    
}
employee.incrementSalry(3000)

//json
//javascript object notation

