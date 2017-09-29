import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals:any;
  isValid = false;

  isEdited = false;

  isAnimalName: any;

  newQuantity : any;

  convertIntoJson(data){
     const animalJson = JSON.stringify(data);
     return animalJson;
   }

   saveToLocalStorage(name, animals){
     const animalJson = this.convertIntoJson(animals);
    localStorage.setItem('animals', animalJson);
  }

  updateQuantity(name, quantity){

    let animals = this.animals;

    if(!this.isEdited){
        for(let i = 0; i < animals.length; i++){
           if(this.animals[i]['name'] == name){
             this.animals[i]['quantity'] = quantity;
             console.log('Quantity updated!')
             this.saveToLocalStorage('animals', this.animals);

           }
           else{
              console.log("Something happened!!");
           }
        }
    }

  }

  onEdit(name, quantity){

     this.isEdited = !this.isEdited;

     this.updateQuantity(name, this.newQuantity);

     if(this.isEdited == false){
       this.isAnimalName = '';
       this.newQuantity = quantity;
     } else{
       this.isAnimalName = name;
       this.newQuantity = quantity;
     }
  }


  constructor(http: Http) {
    const animals_data = JSON.parse(localStorage.getItem('animals'));

    if(!animals_data){
      http.get('https://zooapisimpleproject.herokuapp.com/api')
      .subscribe(response => {
        this.animals = response.json();
        this.saveToLocalStorage('animals', this.animals);
        console.log("There is NO data in the storage");

      })
    } else{
      this.animals = animals_data;
      console.log(this.animals);
      console.log("There is data in the storage");
    }
  }

  ngOnInit() {

  }

}
