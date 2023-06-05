import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: ServicesService) { }

  ngOnInit(): void {
  }

}

