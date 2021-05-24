let person={
    name:"Anna",
    age:20,
    address:"Ekm"
}
let student=Object.create(person)//inheritance as person is parent object
student.rollNo=1
student.mark=400
console.log(student)
//Object.freeze(student)//Stops student object from further modification
// console.log(Object.isFrozen(student))//to check is the object is frozen or not
// Object.seal(student)//seal function is used to update properties but can't add new property
// student.mark=1500
// student.batch="cse"
// console.log(student)
student.name="Anu"
console.log(student)
student.__proto__.name="anu"
//Object creation with constructor
function Department(Id,name,hod){
    this.did=Id
    this.dname=name
    this.hod=hod
    this.display=function(){
        console.log(`Name ${this.dname} HOD ${this.hod} ID ${this.did}`)
    }
}
let obj=new Department("D101","John","X")
obj.display()
function Person1(name,age,address){
    this.dname=name
    this.dage=age
    this.address=address
    this.updateAddress=function(newAddress){
        this.Address=newAddress
        console.log("Current Address: ",this.Address)
    }
}
let p1=new Person1("Ann",12,"anxjnsjnscn")
console.log(p1)