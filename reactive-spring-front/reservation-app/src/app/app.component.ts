import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservation-app';

  constructor(private reservationService:ReservationService){  }

  rooms: Room[] = [];
  roomSearchForm: FormGroup = new FormGroup({});
  currentCheckInVal?: string;
  currentCheckOut?: string;
  currentPrice?: number;
  currentRoomNumber?: number;

  

  ngOnInit() {

    this.roomSearchForm = new FormGroup ({
      checkIn: new FormControl(''),
      checkOut: new FormControl(''),
      roomNumber: new FormControl('')
    });
  
  
    this.roomSearchForm.valueChanges.subscribe( form => {
        this.currentCheckInVal = form.checkIn;
        this.currentCheckOut = form.checkOut;
        
        if(form.roomNumber){
          let roomValues: string[] = form.roomNumber.split('|');
          this.currentRoomNumber = Number(roomValues[0]);
          this.currentPrice = Number(roomValues[1]);
        }

    });
   
    this.rooms = [
    new Room("127","127", "150"),
    new Room("137","137", "180"),
    new Room("254","254", "200")
    ]
  }
}


export class Room{
  id: string;
  roomNumber: string;
  price: string;

  constructor(id: string, roomNumber:string, price:string){
    this.id = id;
    this.roomNumber = roomNumber;
    this.price = price;
  }
}
