import { Routes } from '@angular/router';
import { ListaPostComponent } from './pages/lista-post/lista-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';

export const routes: Routes = [
    { path: "", component: ListaPostComponent },
    { path: "new", component: NewPostComponent },
    {path:"**", redirectTo:""} //queda a la espera de crear componente error404
];
