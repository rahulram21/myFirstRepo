function newCon(id,name,price){
    this.did=id
    this.name=name
    this.price=price
    
}
let plist=[]
function newObj(){
    let p=new newCon(document.getElementById("first").value,document.getElementById("second").value,document.getElementById("third").value)
    console.log(p)
    plist.push(p)
    console.log(plist)
    plist.forEach((data)=>{//To print each of the properties of objects seperately 
        console.log(`PID: ${data.did}`)
        console.log(`Name: ${data.name}`)
        console.log(`Price: ${data.price}`)
    })
}
let obj1={x:10,y:20}
let obj2={x:10,y:20}
obj1=obj2
console.log(obj1==obj2)

//Functional programming
let add=function(x,y){
    return x+y
}

function first(){
    console.log("inside function first")
    return function second(){
        console.log("inside function second")
        return function third(){
            console.log("inside function third")
        }

    }
}
let f=first()
let f1=f()
f1()
function calculate(f,a,b){
    f(a,b)

}
function add(x,y){
    console.log(x+y)
}
function sub(x,y){
    console.log(x-y)
}
calculate(sub,10,20)