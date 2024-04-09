import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoService } from '../auto.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.css']
})
export class AutoFormComponent implements OnInit {
  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private service: AutoService,
    ) {
    this.form = new FormGroup({});
    this.form = this.fb.group({
      codigo: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      marca: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      modelo: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      anio: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      kilometraje: [``, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ]],
      precio: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ]],
      calificacion: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3)
      ]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.invalid) {
      Swal.fire({
        title: "Mensaje",
        text: "Faltan llenar campos",
        icon: "error"
      });
      return;
    }
    this.service.addAuto(this.form.value).subscribe((data) => {
      if (data.codigo == '1') {
        Swal.fire({
          title: "Mensaje",
          text: "Auto registrado con exito",
          icon: "success"
        }); 
        return;
      }
      Swal.fire({
        title: "Mensaje",
        text: "No se pudo realizar el registro: " + data.mensaje,
        icon: "error"
      });
    });

  }
}
