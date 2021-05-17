let arr=new Array()
function add(){
    var p=document.getElementById("text").value
    arr.push(p)
    for(let dat of arr){
        let myp=document.createElement("li")
        myp.innerText=dat
        let btton=document.createElement("button")
        btton.innerText="REMOVE"
        btton.id="button"
        btton.onclick="remove()"
        document.getElementById("list").appendChild(myp).appendChild(btton)

    }
}
function remove(){
    let parent=document.getElementById("list")
    parent.removeChild(parent.childNodes[0])

}
