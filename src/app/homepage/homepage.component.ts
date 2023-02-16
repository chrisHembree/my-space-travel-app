import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}



    class Destination {
      name: string | undefined;
      description: string | undefined;
      imagepath: string | undefined;
      id: number | undefined
    }
    class travelOption {

      name: string | undefined;
      description: string | undefined;
      imagepath: string | undefined;
      id: number | undefined;
      price: number | undefined;
      }

     class Accomodations {
     name: string | undefined
     description: string | undefined
     imagepath: string | undefined;
     id: number | undefined
     price: number | undefined

     }




