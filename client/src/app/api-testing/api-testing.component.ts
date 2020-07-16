import { Component, OnInit } from '@angular/core';

import { ApiTestingService } from './api-testing.service';

@Component({
  selector: 'app-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.scss']
})
export class ApiTestingComponent implements OnInit {

  constructor(private apiTestingService: ApiTestingService) { }

  ngOnInit(): void {
  }

  get() {
    // Replace this with the API endpoint URL.
    // Example: '/api/mywonderfulendpoint'
    const queryString = '';
    this.apiTestingService.get(queryString).subscribe((responsePayload: any) => console.log('success: ', responsePayload),
    (error: any) => console.log('error: ', error));
  }

  put() {
    // Replace this with the API endpoint URL.
    const queryString = '';
    // Replace this with the API request payload.
    // Example request payload: {funStuff: 'my fun string', funNum: 9}
    const requestPayload = {};
    this.apiTestingService.put(queryString, requestPayload).subscribe((responsePayload: any) => console.log('success: ', responsePayload),
    (error: any) => console.log('error: ', error));
  }

  post() {
    // Replace this with the API endpoint URL.
    const queryString = '';
    // Replace this with the API request payload.
    const requestPayload = {};
    this.apiTestingService.post(queryString, requestPayload).subscribe((responsePayload: any) => console.log( 'success: ', responsePayload),
    (error: any) => console.log('error: ', error));
  }

  delete() {
    // Replace this with the API endpoint URL.
    const queryString = '';
    this.apiTestingService.delete(queryString).subscribe(
      (responsePayload: any) => console.log('success: ', responsePayload),
      (error: any) => console.log('error: ', error));
  }

}