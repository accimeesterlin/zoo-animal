import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  image : string;
  quantity: number;
  description: string;
  average_weight: number;
  average_height: number;
  name: string;
  list_animals = [];


   convertIntoJson(data){
     const animalJson = JSON.stringify(data);
     return animalJson;
   }

   saveToLocalStorage(animals){
     const animalJson = this.convertIntoJson(animals);
    localStorage.setItem('animals', animalJson);
  }


  getDataFromLocal(){
    this.list_animals = JSON.parse(localStorage.getItem('animals'));

  }


  onGetValue( option, event){

    event.preventDefault();

    this.getDataFromLocal();

    let animal = {
      name: this.name,
      quantity:this.quantity,
      option:option.value,
      image:this.image,
      description:this.description,
      average_weight:this.average_weight,
      average_height:this.average_height
    };

    this.list_animals.push(animal);
    console.log(this.list_animals);
    this.saveToLocalStorage(this.list_animals);

  }



  ngOnInit() {
  }

}
