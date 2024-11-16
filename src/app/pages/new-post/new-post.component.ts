import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  
 
  newProduct: FormGroup = new FormGroup({
    titulo: new FormControl(null, [
      Validators.required
    ]),
    texto: new FormControl(null, [
      Validators.required
    ]),
    autor: new FormControl(),
    imagen: new FormControl(),
    fecha: new FormControl(),
    categoria: new FormControl('', [
      Validators.required
    ])
  })

  onSubmit() {
    if (this.newProduct.valid) {
      console.log(this.newProduct.value);
    }
  }
  }
  

