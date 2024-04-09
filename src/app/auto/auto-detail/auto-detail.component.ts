import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoService } from '../auto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto-detail',
  templateUrl: './auto-detail.component.html',
  styleUrls: ['./auto-detail.component.css']
})
export class AutoDetailComponent implements OnInit {
  auto: any = {
  }
  form: FormGroup = new FormGroup({});
  constructor(private route: ActivatedRoute,
    private service: AutoService,
    private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
    this.form = this.formBuilder.group({
      codigo: ['', [
        Validators.required, Validators.minLength(3), Validators.maxLength(20)
      ]],
      marca: ['', [
        Validators.required, Validators.minLength(3), Validators.maxLength(20)
      ]],
      modelo: ['', [
        Validators.required, Validators.minLength(3), Validators.maxLength(20)
      ]],
      anio: ['', [
        Validators.required, Validators.minLength(3), Validators.maxLength(20)
      ]],
      kilometraje: [``, [
        Validators.required, Validators.minLength(1), Validators.maxLength(20)
      ]],
      precio: ['', [
        Validators.required, Validators.minLength(1), Validators.maxLength(20)
      ]],
      calificacion: ['', [
        Validators.required, Validators.minLength(1), Validators.maxLength(20)
      ]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.getAutoById(params['codigo']).subscribe((data) => {
        if (data.codigo == '1') {
          this.auto = data.data;
          this.form.controls['codigo'].setValue(this.auto?.codigo);
          this.form.controls['marca'].setValue(this.auto?.marca);
          this.form.controls['modelo'].setValue(this.auto?.modelo);
          this.form.controls['anio'].setValue(this.auto?.anio);
          this.form.controls['kilometraje'].setValue(this.auto?.kilometraje);
          this.form.controls['precio'].setValue(this.auto?.precio);
          this.form.controls['calificacion'].setValue(this.auto?.calificacion);
          return;
        }
        Swal.fire({
          title: "Mensaje",
          text: "No se pudo realizar el registro: " + data.mensaje,
          icon: "error"
        });
      });

    });
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
    this.service.updateAuto(this.auto.id, this.form.value).subscribe((data) => {
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
        text: "No se pudo modificar: " + data.mensaje,
        icon: "error"
      });
    });

  }


}
