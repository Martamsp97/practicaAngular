import { Component, inject } from '@angular/core';
import { IPosts } from '../../interfaces/iposts.interface';
import { PostsService } from '../../services/posts.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './lista-post.component.html',
  styleUrl: './lista-post.component.css'
})
export class ListaPostComponent {
  title: string = ""

  arrArtistas: IPosts[] = [];
  arrCategorias: string[] = [];
  
  postServicio = inject(PostsService)

  ngOnInit() {
    this.arrArtistas = this.postServicio.getAll()
    this.arrCategorias = this.postServicio.getCateg();
    

  }
  onChange($event: Event) {
    const select = $event.target as HTMLSelectElement;
    if (select.value === 'Todas') {
      this.arrArtistas = this.postServicio.getAll();
    } else {
      this.arrArtistas = this.postServicio.getbyCategory(select.value);
    }

  }
 deletePost(post: IPosts) {
    this.postServicio.removePost(post);  
    this.arrArtistas = this.postServicio.getAll();  
  } 
}