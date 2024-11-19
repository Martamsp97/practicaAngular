import { Injectable } from '@angular/core';
import { IPosts } from '../interfaces/iposts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsKey = 'posts';

  private posts: IPosts[] = [

    {
      id:'1',
      titulo: "Nuevo disco de Judeline",
      texto: "Judeline, una de las artistas emergentes más prometedoras, ha lanzado un álbum que desafía los límites de la música contemporánea. Con una mezcla de sonidos urbanos y toques experimentales, su nuevo trabajo nos invita a explorar temas de identidad, amor y rebeldía. Descubre por qué está marcando un antes y un después en la escena musical.",
      autor: "María López",
      imagen: "https://judeline.es/wp-content/uploads/Judeline-Bodhiria-portada-1080x1080.jpg",
      fecha: new Date('2024-11-15'),
      categoria: "Musica",
    },
    {
      id: '2',
      titulo: "¿Quién es Emily Armstrong, la nueva vocalista de Linkin Park?",
      texto: "Emily Armstrong, conocida por su poderosa presencia escénica, ha asumido el reto de liderar Linkin Park. Con su estilo vibrante y voz única, está redefiniendo el sonido de la banda sin perder su esencia. Conoce a la artista que está dando un giro inesperado a una de las bandas más icónicas del rock moderno.",
      autor: "Carlos García",
      imagen: "https://elcomercio.pe/resizer/v2/5MZ4HIAPBJDHBA2W7PTOW32EH4.jpg?auth=35b0bd4a380f19dbb9545c1ff8b6b5a130410db96edc950a7e6d5420eb1e9c8d&width=1200&height=1200&quality=75&smart=true",
      fecha: new Date("2024-10-30"),
      categoria: "Musica",
    },
    {
      id: '3',
      titulo: "¿Quién fue Ella Fitzgerald?",
      texto: "Considerada la 'Primera Dama del Jazz', Ella Fitzgerald no solo revolucionó la música con su voz impecable y su dominio del scat, sino que también rompió barreras raciales en la industria. Repasa la trayectoria de esta artista que dejó una huella imborrable en la música y se convirtió en un símbolo de elegancia y talento.",
      autor: "Ana Pérez",
      imagen: "https://www.azcentral.com/gcdn/-mm-/3dd3c93d0a316ca2d2d2738ab949b959b354fe4a/c=0-0-2027-2027/local/-/media/2018/02/16/Phoenix/Phoenix/636543905139613809-MJSBrd-06-15-2017-Journal-1-C001-2017-06-14-IMG-Ella-Fitzgerald-1-1-V8IM9K05-L1047105079-IMG-Ella-Fitzgerald-1-1-V8IM9K05.jpg",
      fecha: new Date("2024-10-15"),
      categoria: "Musica",
    },
    {
      id: '4',
      titulo: "¿Conoces a Chimamanda Ngozi Adichie? La escritora nigeriana que marca historia",
      texto: "Chimamanda Ngozi Adichie no solo ha conquistado el panorama literario global con obras como Americanah y Medio sol amarillo, sino que también ha inspirado conversaciones fundamentales sobre feminismo, raza e identidad. Desde sus charlas TED icónicas hasta sus novelas profundas y cautivadoras, Chimamanda se ha consolidado como una de las voces más influyentes del siglo XXI.",
      autor: "Lucía Sánchez",
      imagen: "https://imgcdn.stablediffusionweb.com/2024/8/27/fbe8250b-56aa-4431-901e-f2e58f4c057f.jpg",
      fecha: new Date("2024-11-05"),
      categoria: "Literatura",
    },
    {
      id: '5',
      titulo: "¿Quién fue la única poeta de la antigüedad grecorromana?",
      texto: "Safo de Lesbos, la legendaria poeta de la Grecia antigua, fue una pionera en plasmar emociones humanas universales a través de la palabra. Su poesía lírica, cargada de amor y deseo, sigue inspirando a generaciones y recuerda que el arte femenino ha existido desde tiempos inmemoriales, aunque a menudo silenciado.",
      autor: "Isabel Martín",
      imagen: "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2018%2F10%2F21134919%2Fsafo-y-erina-en-un-jardin-en-mitilene.-simeon-solomon1.jpg?auth=54708c5267573d8ad08706435d436351780bcb2af841963c35e250c0b416fb35&smart=true&width=1200&height=1200&quality=85",
      fecha: new Date("2024-10-20"),
      categoria: "Literatura",
    },
    {
      id: '6',
      titulo: "10 mujeres que revolucionaron el mundo de la fotografía",
      texto: "Desde Cristina García Rodero hasta Annie Leibovitz, estas fotógrafas desafiaron los límites de su tiempo y transformaron la forma en que percibimos el mundo a través de sus lentes. Descubre cómo sus obras marcaron un antes y un después en el arte de capturar la realidad con una perspectiva única.",
      autor: "Paula Fernández",
      imagen: "https://media.vogue.es/photos/6554b356ec3595fbe6dd621b/1:1/w_1740,h_1740,c_limit/VO1223_Hopper_02.jpg",
      fecha: new Date("2024-11-10"),
      categoria: "Fotografia",
    },
    {
      id: '7',
      titulo: "Lo que ellas vieron: Exposición del Reina Sofía",
      texto: "El Reina Sofía celebra la visión única de las mujeres fotógrafas con una exposición que rescata obras fundamentales de artistas como Gisèle Freund y Shirin Neshat. Una mirada al mundo a través de sus lentes, donde la sensibilidad y la fuerza narrativa se entrelazan para contar historias que rara vez se escuchan.",
      autor: "Elena Ruiz",
      imagen: "https://media.architecturaldigest.com/photos/55f9e07e00a69f791feb3a89/1:1/w_357,h_357,c_limit/dam-images-daily-2015-05-shirin-neshat-hirshhorn-museum-shirin-neshat-hirshhorn-museum-01.jpg",
      fecha: new Date("2024-09-25"),
      categoria: "Fotografia",
    },
    {
      id: '8',
      titulo: "Todo sobre Maruja Mallo",
      texto: "Maruja Mallo, una figura imprescindible de la Generación del 27, fue mucho más que una pintora: fue una visionaria que rompió moldes y desafió las normas artísticas y sociales de su época. Descubre la obra vibrante y transgresora de esta mujer que merece un lugar destacado en la historia del arte..",
      autor: "Clara Gómez",
      imagen: "https://media.traveler.es/photos/613767db06df43bef2d3069f/1:1/w_354%2Cc_limit/165235.jpg",
      fecha: new Date("2024-08-18"),
      categoria: "Pintura",
    },
    {
      id: '9',
      titulo: "Un Van Gogh en el salón: El libro de Claramore",
      texto: " La divulgadora de arte Claramore, conocida por acercar la historia del arte a nuevas generaciones, nos sorprende con un libro que explica el arte clásico con humor y profundidad. Un Van Gogh en el salón es una invitación a redescubrir los grandes nombres del arte desde una perspectiva fresca y cercana.",
      autor: "Sara Molina",
      imagen: "https://estaticos-cdn.prensaiberica.es/clip/dd3363eb-2e44-4350-8e4b-d2510a9c7514_source-aspect-ratio_default_0.jpg",
      fecha: new Date("2024-11-01"),
      categoria: "Pintura",
    },
    {
      id: '10',
      titulo: "Silenciadas: Mujeres pintoras que no han aparecido en tu libro de historia",
      texto: "Sofonisba Anguissola, Camille Claudel y Remedios Varo son solo algunas de las muchas mujeres cuyas obras han sido ignoradas por siglos. Este artículo rescata sus nombres y trabajos, demostrando que la historia del arte está incompleta sin su contribución.",
      autor: "Marta Rivas",
      imagen: "https://preview.redd.it/remedios-varo-paintings-depicting-the-soul-of-ai-v0-01qpt25dp75b1.png?width=1024&format=png&auto=webp&s=660e757f730f4b264a5315464f8f4e39bf4cb301",
      fecha: new Date("2024-07-14"),
      categoria: "Pintura",
    },
    {
      id: '11',
      titulo: "Mujeres españolas que han hecho historia en el diseño",
      texto: "Desde las formas audaces de Agatha Ruiz de la Prada hasta la elegancia de Teresa Helbig, estas diseñadoras españolas han transformado la moda y el diseño gráfico a nivel internacional. Cada una, con su estilo único, ha dejado una huella imborrable, redefiniendo qué significa ser innovadora en el mundo del diseño.",
      autor: "Laura Delgado",
      imagen: "https://media.vogue.es/photos/61a4b69d0ac5265b501da9da/1:1/w_3000,h_3000,c_limit/TERESA_HELBIG_OCT21_0211.jpg",
      fecha: new Date("2024-11-17"),
      categoria: "Diseño",
    },
    {
      id: '12',
      titulo: "¿Quién fue Barbara Kruger?",
      texto: "Con su estilo inconfundible de tipografía sobre imágenes impactantes, Barbara Kruger se convirtió en una voz imprescindible en el arte visual. Sus mensajes provocadores cuestionan el poder, el consumo y el género, convirtiendo cada obra en un manifiesto que trasciende el diseño y se convierte en activismo.",
      autor: "Rocío Ortega",
      imagen: "https://i0.wp.com/oscarenfotos.com/wp-content/uploads/2014/03/barbara-kruger-your-body-is-a-battleground-19891.jpg?fit=798%2C810&ssl=1",
      fecha: new Date("2024-10-05"),
      categoria: "Diseño",
    }
  ] 

  savePostsToLocalStorage(posts: IPosts[]) {
    localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }

  getAll(): IPosts[] {
    // Si no hay datos en localStorage, usa los posts predeterminados
    const storedPosts = JSON.parse(localStorage.getItem(this.postsKey) || '[]');
    if (storedPosts.length === 0) {
      this.savePostsToLocalStorage(this.posts); // Guarda los posts predeterminados si no hay nada en localStorage
      return this.posts; // Devuelve los posts predeterminados
    }
    return storedPosts;
  }

/*   getAll(): IPosts[] {
    return JSON.parse(localStorage.getItem(this.postsKey) || '[]');
  } */
  createPost(newPost: IPosts) {
    const posts = this.getAll();
    posts.push(newPost);
    localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }

  getCateg(): string[] {
    const categoriasRep = this.posts.map(post => post.categoria);
    const set = new Set(categoriasRep);

    return [...set].sort();
  }

  getbyCategory(category: string): IPosts[] {
    return this.posts.filter(post => post.categoria === category
    );
  }
  isPosted(): boolean {
    return localStorage.getItem('posts') ? true : false
  }

  clearPostsFromLocalStorage() {
    localStorage.removeItem('posts');
    this.posts = []; 
  }
  removePost(postToRemove: IPosts) {
    const posts = this.getAll();
    // Filtra los posts para eliminar el que coincida con el id
    const updatedPosts = posts.filter(post => post.titulo !== postToRemove.titulo);
    this.savePostsToLocalStorage(updatedPosts);  // Guarda los posts actualizados en localStorage
  }
}
