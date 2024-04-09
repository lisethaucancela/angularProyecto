import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';
import { error } from 'console';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users: User[] = [];
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe((data) => {
      this.users = data.data;
    });
  }

  deleteUser(id: string) {
    this.service.deleteUser(id).subscribe(

      (data) => {
        if (data.codigo == '1') {
          Swal.fire({
            title: "OK",
            text: "" + data.mensaje,
            icon: "success"
          });
        }
        this.getUsers();
        console.log(data);
      },
      (error) => {
        console.log(error);
        Swal.fire({
          title: "Error",
          text: "" + error,
          icon: "error"
        });
        return;
      });

  }

  editUser(id: string) {
    this.service.deleteUser(id).subscribe(
      (data) => {
        this.getUsers();
        console.log(data);
      },
      (error) => {
        console.log(error);
      });

  }
}
