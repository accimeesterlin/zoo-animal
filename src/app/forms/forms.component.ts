import { Component } from '@angular/core';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  constructor() { }

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


  onGetValue(f){

    let animal = f.value;
    this.getDataFromLocal();
    console.log(animal);
    this.list_animals.push(animal);
    this.saveToLocalStorage(this.list_animals);

  }

}
