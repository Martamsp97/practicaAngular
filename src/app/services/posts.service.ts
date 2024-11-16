import { Injectable } from '@angular/core';
import { IPosts } from '../interfaces/iposts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: IPosts[] = []



  getAll() {
    return this.posts
  }
  createPost(newPost: IPosts) {
    this.posts.push(newPost)
  }
  getByCategory(categoria: string): IPosts[] {
    return this.posts.filter(post => post.categoria === categoria);
  }

  isPosted(): boolean {
    return localStorage.getItem('post') ? true : false
  }
}
