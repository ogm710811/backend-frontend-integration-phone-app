import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {

  newPhone = {
    name: '',
    brand: '',
    specs: [],
    image: ''
  };

  feedback: string;

  constructor( 
    private phoneService : PhoneService,
    private route : ActivatedRoute  
  ) { }

  ngOnInit() {
  }

  addSpec(spec) {
    this.newPhone.specs.push(spec);
  }
  
  createNewPhone(formData){
    console.log(formData);
    this.newPhone.brand = formData.value.brand;
    this.newPhone.name = formData.value.name;
    this.newPhone.image = formData.value.image;
    this.sendNewPhoneToApi();
    console.log(this.newPhone);
  }

  sendNewPhoneToApi() {
    this.phoneService.createNew(this.newPhone)
        .then(() => {
          // this.newPhone = {
          //   name: '',
          //   brand: '',
          //   specs: [],
          //   image: ''
          // };
        })
  }
}
