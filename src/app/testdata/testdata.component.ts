import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testdata',
  templateUrl: './testdata.component.html',
  styleUrls: ['./testdata.component.scss']
})
export class TestdataComponent implements OnInit {

  countries$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => this.countries$ = data
    );
  }

}
