import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private service: UserService) {
    this.form = new FormGroup({});
    this.form = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      apellido: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      email: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      telefono: [``, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.invalid) {
      Swal.fire({
        title: "Mensaje",
        text: "Datos invalidos",
        icon: "error"
      });
      return;
    }
    this.service.addUser(this.form.value).subscribe((data) => {
      console.log(data);
      if (data.codigo == '1') {
        Swal.fire({
          title: "OK",
          text: "" + data.mensaje,
          icon: "success"
        });
        return;
      }
      Swal.fire({
        title: "Error",
        text: "" + data.mensaje,
        icon: "error"
      });
      return;
    });

  }
}
