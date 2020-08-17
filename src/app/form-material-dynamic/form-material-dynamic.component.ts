import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-material-dynamic',
  templateUrl: './form-material-dynamic.component.html',
  styleUrls: ['./form-material-dynamic.component.css']
})
export class FormMaterialDynamicComponent implements OnInit {

  materialForm = this.formBuilder.group({
    items: this.formBuilder.array([]),
    totalItems:{value: '', disabled: true}
  });
  items: FormArray;

  prodList: any = [
    { 
      No:'1',name:"Tủ quần áo", material:[
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
        }]        
    },
    {
      No:'2', name:"Tủ bếp trên", material:[
        {  id:"1",
            name:"MDF CHỐNG ẨM AN CƯỜNG", 
            type:[
              {id:"1",name:"Melamin",price:" 2800000"},
              {id:"2",name:"Laminate",price:"3500000"},
              {id:"3",name:"Acylic",price:"3700000"},
              {id:"4",name:"Paint",price:"3300000"},
            ]  
        },
      ]
    },
    {
      No:'3', name:"Tủ bếp dưới ", material:[
        {  id:"1",
            name:"MDF CHỐNG ẨM AN CƯỜNG", 
            type:[
              {id:"1",  name:"Melamin", price:" 3200000"},
              {id:"2",  name:"Laminate",price:"4000000"},
              {id:"3",  name:"Acylic",  price:"4200000"},
              {id:"4",  name:"Paint",   price:"3800000"},
            ]  
        },
      ]
    },
    {
      No:'4', name:"Tủ giày ", material:[
        {  id:"1",
            name:"MDF THƯỜNG", 
            type:[
              {id:"1",name:"Melamin",price:"2200000"},
              {id:"2",name:"Laminate",price:"2800000"},
              {id:"3",name:"Paint",price:"2500000"},
            ]  
        },
        {  id:"2",
            name:"MDF CHỐNG ẨM AN CƯỜNG", 
            type:[
              {id:"1",  name:"Melamin", price:" 2400000"},
              {id:"2",  name:"Laminate",price:" 3000000"},
              {id:"3",  name:"Acylic",  price:" 3500000"},
              {id:"4",  name:"Paint",   price:" 2700000"},
            ]  
        },
      ]
    }
  ];

  materialList:any[][] = new Array();
  typelList:any[][] = new Array();
  totalItems:number=0;

  constructor(private formBuilder: FormBuilder) {
    
  }

  get materialFormControls(){
    return this.materialForm.controls;
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    // this.items = this.orderForm.get('items') as FormArray;
    // this.items.push(this.createItem());
    
   
    let item = this.materialForm.get('items') as FormArray;
    // console.log(item.length)
    if(item.length >= 8){
      alert("Quá giới hạn sản phẩm.")
      return;
    }
    item.push(this.formBuilder.group({
              product:[''],
              material:[''],
              materType:[''],
              quantity:[''],
              price: {value: '', disabled: true},
              total:{value: '', disabled: true},
            }));
  }

  chageProd($event,index){
    // console.log($event.target.value);
    let val = $event.target.value
    // console.log(this.prodList.filter(e => e.No == val));
    let Filarr = this.prodList.filter(e => e.No == val)
    this.materialList[index] = Filarr[0]['material'];
  }

  changeMaterial($event,index){
    // console.log($event.target.value)    
    let val = $event.target.value;
    let filItems =this.materialList[index].filter(e => e.id == val)
    this.typelList[index] = filItems['0']['type']
    // console.log(this.typelList)
  }

  changeType($event,index){
    let val = $event.target.value;
    let item = this.materialForm.get('items') as FormArray
    let group = item.controls[index] as FormGroup
    group.controls['price'].setValue(Number(this.typelList[index][val-1].price).toLocaleString())
  }

  amountItem($event,index){
    // amount with number items
    // console.log(index)
    // console.log($event.target.value)

    let item = this.materialForm.get('items') as FormArray    
    let group = item.controls[index] as FormGroup
    let priceString = group.controls['price'].value
    priceString =  priceString.replace(/\D/g,'');
    // convert string to number
    let price = parseFloat(priceString);
    // console.log(price)
    let quan = group.controls['quantity'].value
    let amount = price * quan;    
    // console.log(amount)
    group.controls['total'].setValue(amount.toLocaleString())
    this.totalPay(amount)
  }  

  totalPay(num:number){
    //all items
    // set total bill
    this.totalItems += num
    this.materialForm.controls['totalItems'].setValue(this.totalItems.toLocaleString())
  }

  del(index){
    let item = this.materialForm.get('items') as FormArray
    item.removeAt(index)
  }

  ngOnInit(): void {
    this.addItem();
  }

}
