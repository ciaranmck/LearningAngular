import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  country$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
      this.route.params.subscribe( params => this.country$ = params.id);
   }

  ngOnInit() {
    this.data.getCountry(this.country$).subscribe(
      data => this.country$ = data
    );

  }

}
