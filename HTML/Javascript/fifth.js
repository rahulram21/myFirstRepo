/*Functional Programming*/
let myobject={
    name:"Raj",
    greetings:function(msg,date){
        console.log(`hey ${this.name} ${msg} ${date}`)
    }
}
let person={
    name:"Soom"}
myobject.greetings.call(person)//borrowing greetings() to second object using call function
myobject.greetings.call(person,"good morning ",new Date())
f=myobject.greetings.bind(person, "good morning",)
f(new Date())
//regex
// function check(){
//     let username=document.getElementById("username").value
//     let regex=/^\+91\s\d{10}$/g
//     //alert(username.match(regex))
//     alert(regex.test(username))//test function returns a boolean value if the input and regex matches

// }
let input="java is powerful, java is strong"
let regex=/java/g
let newdata=input.replace(regex,"javascript")
console.log(newdata)

function search(){
    let p=document.getElementById("username").value
    let v=document.getElementById("text").value
    let regex=new RegExp(username,"g")
    let newdata=p.replace(regex,`<span style='background-color:yellow>${p}</span>`)

}
function validate(){
    let fname=document.getElementById("firstname")
    let lname=document.getElementById("lastname")
    let email=document.getElementById("email")
    let password=document.getElementById("password")
    let mobile=document.getElementById("mobile")
    if(fname.value==""){
        alert("first name can't be empty")
        fname.focus()
        return false
    }
    if(lname.value==""){
        alert("first name can't be empty")
        lname.focus()
        return false
    }
    if(email.value==""){
        alert("first name can't be empty")
        email.focus()
        return false
    }
    if(password.value==""){
        alert("first name can't be empty")
        password.focus()
        return false
    }
    if(mobile.value==""){
        alert("first name can't be empty")
        mobile.focus()
        return false
    }
}
document.write("\u0D05")