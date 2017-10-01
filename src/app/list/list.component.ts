import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  list_animals:any;

   getDataFromLocal(){
      this.list_animals = JSON.parse(localStorage.getItem('animals'));
      console.log(this.list_animals);
    }

  ngOnInit() {
     this.getDataFromLocal();
  }

}
