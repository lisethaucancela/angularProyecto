import { Component, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';
import { Auto } from '../auto-interface';
import { error } from 'console';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-auto-table',
  templateUrl: './auto-table.component.html',
  styleUrls: ['./auto-table.component.css']
})
export class AutoTableComponent implements OnInit {
  autos: Auto[] = [];
  faStar = faStar;
  constructor(private service: AutoService) { }

  ngOnInit(): void {
    this.getAutos();
  }

  getAutos() {
    this.service.getAutos().subscribe((data) => {
      this.autos = data.data;
    });
  }

  deleteAutos(id: string) {
    this.service.deleteAuto(id).subscribe(
      (data) => {
        this.getAutos();
        console.log(data);
      },
      (error) => {
        console.log(error);
      });

  }

  editUser(id: string) {
    this.service.deleteAuto(id).subscribe(
      (data) => {
        this.getAutos();
        console.log(data);
      },
      (error) => {
        console.log(error);
      });

  }
}
