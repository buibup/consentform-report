import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any;

  constructor(private apiService: ApiService) {
    this.apiService.get('customers').then((res) => {
      this.customers = res['content'];
      console.log(this.customers);
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
