import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { IPosts } from '../../interfaces/iposts.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  PostsServicio = inject(PostsService)

  router = inject(Router)

  newPost: FormGroup = new FormGroup({
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
    if (this.newPost.valid) {
      const nuevoPost: IPosts = {
        ...this.newPost.value,
        _id: '',
        fecha: new Date()
      };

      this.PostsServicio.createPost(this.newPost.value)
      console.log(nuevoPost)
      Swal.fire({ title: 'Nueva publicación', text: '¡Publicación creada con éxito!', icon: 'success' })
      this.router.navigateByUrl('')

    }
    
  }
}


