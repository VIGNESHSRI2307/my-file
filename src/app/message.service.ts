import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  getMessage():string{
    console.log("working")
    return('hii')
  }
}
