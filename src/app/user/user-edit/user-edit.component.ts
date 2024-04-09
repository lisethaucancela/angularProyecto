import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: string = '';
  user: any = {};
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: UserService,
  ) {
    this.form = this.fb.group({
      nombre: ["",],
      apellido: ['',],
      telefono: ['',],
      email: ['',],
      password: ['',],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getUserById(this.id).subscribe((data) => {
        this.user = data;
        this.user = this.user.data;
        console.log(this.user);
        this.form = this.fb.group({
          nombre: [`${this.user.nombre}`, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]],
          apellido: [`${this.user.apellido}`, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]],
          telefono: [`${this.user.telefono}`, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]],
          email: [`${this.user.email}`, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]],
          password: [`${this.user.password}`, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]],
        });
      });
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      Swal.fire({
        title: "Error",
        text: "Formulario invalido",
        icon: "error"
      });
      return;
    }
    this.service.updateUser(this.user.id, this.form.value).subscribe((data) => {
      console.log(data);
      // this.router.link(['/user', this.user.id]);
      if (data.codigo == '1') {
        Swal.fire({
          title: "OK",
          text: "Modificado: " + data.mensaje,
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
