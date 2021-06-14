import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  //Calculator
  operator:string=""
  bingo:boolean=false
  value1:string=""
  value2:string=""
  result:number=0
  constructor() { }
  ngOnInit(): void {
  }
  move(value:any){
    if(this.operator==""){
      this.value1+=value
      console.log("value1=",this.value1)
    }else{
      this.value2+=value
      console.log("value2=",this.value2)
    }
  }
  clear1(){
      this.value1=''
      this.value2=''
      this.operator=''
  }
setOperator(opr:string){
  if(opr=='='){
    this.bingo=true
    if(this.operator=="+"){
      this.result=parseInt(this.value1)+parseInt(this.value2)
    }
    else if(this.operator=='-'){
      this.result=parseInt(this.value1)-parseInt(this.value2)
    }
    else if(this.operator=='*'){
      this.result=parseInt(this.value1)*parseInt(this.value2)
    }
    else if(this.operator=='/'){
      this.result=parseInt(this.value1)/parseInt(this.value2)
    }
  }
  
  else{
    this.operator=opr
  }
  console.log(this.operator)
  console.log("result=",this.result)

}
}
