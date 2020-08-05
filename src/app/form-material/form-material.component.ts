import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-form-material',
  templateUrl: './form-material.component.html',
  styleUrls: ['./form-material.component.css']
})
export class FormMaterialComponent implements OnInit {

  prodList: any = [
    { No:'1',name:"Tủ quần áo", material:[
     {  id:"1",
        name:"MDF THƯỜNG", 
        type:[
          {id:"1",name:"Melamin",price:"2300000"},
          {id:"2",name:"Laminate",price:"3000000"},
          {id:"3",name:"Paint",price:"2700000"},
        ]  
    },
    {   id:"2",
        name:"MDF KHÔNG THẤM NƯỚC", 
        type:[
          {id:"1",name:"Melamin",price:"2700000"},
          {id:"2",name:"Laminate",price:"3000000"},
          {id:"3",name:"Paint",price:"2900000"},
          {id:"3",name:"Acylic",price:"3700000"},
        ]
    },
  ]}];

  materialList:any[] = new Array();
  typelList:any[] = new Array();  

  
  
  selectedId:string="0";
  formBuilder:FormBuilder= new FormBuilder();
  formMaterial: FormGroup = this.formBuilder.group({
    product:[''],
    material:[''],
    materType:[''],
    price: {value: '', disabled: true},
    quantity:[''],
    total:{value: '', disabled: true},
    width:[''],
    height:['']
  });

  

  constructor() {
    
  }

  get f_controls(){
    return this.formMaterial.controls;
  }

  materialForm(){
    return this.formBuilder.group({
      product:[''],
      material:[''],
      materType:[''],
      price: {value: '', disabled: true},
      quantity:[''],
      total:{value: '', disabled: true},
      width:[''],
      height:['']
    });
  }

  ngOnInit(): void {
  }

  chageProd($event){
    // console.log($event.target.value);
    let val = $event.target.value
    // console.log(this.prodList.filter(e => e.No == val));
    let Filarr = this.prodList.filter(e => e.No == val)
    this.materialList = Filarr[0]['material'];
  }

  changeMaterial($event){
    // console.log($event.target.value)    
    let val = $event.target.value;
    let filItems =this.materialList.filter(e => e.id == val)
    this.typelList = filItems['0']['type']
    // console.log(this.typelList)
  }

  changeType($event){
    let val = $event.target.value;
    this.formMaterial.controls['price'].setValue(Number(this.typelList[val-1].price).toLocaleString())
  }

  calulatePrice(){
    let priceString:string = this.formMaterial.controls['price'].value
    priceString =  priceString.replace(/\D/g,'');
    let price = parseFloat(priceString);
    // console.log(priceString)
    // console.log(price)
    let quan = this.formMaterial.controls['quantity'].value
    this.formMaterial.controls['total'].setValue((price*quan).toLocaleString());
  }

}
