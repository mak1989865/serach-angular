import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  filteredData = [];
  data = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco', country: 'USA' },
    { id: 13, name: 'Bombasto', country: 'UK' },
    { id: 14, name: 'Celeritas', country: 'Canada' },
    { id: 15, name: 'Magneta', country: 'Russia' },
    { id: 16, name: 'RubberMan', country: 'China' },
    { id: 17, name: 'Dynama', country: 'Germany' },
    { id: 18, name: 'Dr IQ', country: 'Hong Kong' },
    { id: 19, name: 'Magma', country: 'South Africa' },
    { id: 20, name: 'Tornado', country: 'Sri Lanka' },
    { id: 21, name: 'PeeXD', country: 'Yort' },
    { id: 21, name: 'MooXD', country: 'Ple' },
  ];

  onKeyUp(search) {
    console.log(search);
    this.filteredData = this.data.filter((res) => {
      return res.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  constructor() {}

  ngOnInit() {
    this.filteredData = this.data;
  }
}
