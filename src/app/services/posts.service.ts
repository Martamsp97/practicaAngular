import { Injectable } from '@angular/core';
import { IPosts } from '../interfaces/iposts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: IPosts[] = [
   
    {
      titulo: "Nuevo disco de Judeline",
      texto: "Judeline, una de las artistas emergentes más prometedoras, ha lanzado un álbum que desafía los límites de la música contemporánea. Con una mezcla de sonidos urbanos y toques experimentales, su nuevo trabajo nos invita a explorar temas de identidad, amor y rebeldía. Descubre por qué está marcando un antes y un después en la escena musical.",
      autor: "María López",
      imagen: "https://judeline.es/wp-content/uploads/Judeline-Bodhiria-portada-1080x1080.jpg",
      fecha: '2024/11-15',
      categoria: "musica",
    },
    {
      titulo: "¿Quién es Emily Armstrong, la nueva vocalista de Linkin Park?",
      texto: "Emily Armstrong, conocida por su poderosa presencia escénica, ha asumido el reto de liderar Linkin Park. Con su estilo vibrante y voz única, está redefiniendo el sonido de la banda sin perder su esencia. Conoce a la artista que está dando un giro inesperado a una de las bandas más icónicas del rock moderno.",
      autor: "Carlos García",
      imagen: "https://townsquare.media/site/366/files/2024/09/attachment-Emily-Armstrong-Close-Up-2023-Sam-Morris.jpg?w=780&q=75",
      fecha: "2024-10-30",
      categoria: "musica",
    },
    {
      titulo: "¿Quién fue Ella Fitzgerald?",
      texto: "Considerada la 'Primera Dama del Jazz', Ella Fitzgerald no solo revolucionó la música con su voz impecable y su dominio del scat, sino que también rompió barreras raciales en la industria. Repasa la trayectoria de esta artista que dejó una huella imborrable en la música y se convirtió en un símbolo de elegancia y talento.",
      autor: "Ana Pérez",
      imagen: "https://www.articulo14.es/main-files/uploads/2024/04/ella-fitzgerald.jpg",
      fecha: "2024-10-15",
      categoria: "musica",
    },
    {
      titulo: "¿Conoces a Chimamanda Ngozi Adichie? La escritora nigeriana que marca historia",
      texto: "Chimamanda Ngozi Adichie no solo ha conquistado el panorama literario global con obras como Americanah y Medio sol amarillo, sino que también ha inspirado conversaciones fundamentales sobre feminismo, raza e identidad. Desde sus charlas TED icónicas hasta sus novelas profundas y cautivadoras, Chimamanda se ha consolidado como una de las voces más influyentes del siglo XXI.",
      autor: "Lucía Sánchez",
      imagen: "https://i2.wp.com/www.wiriko.org/wp-content/uploads/2013/12/Adichie2.jpg?fit=600%2C400&ssl=1",
      fecha: "2024-11-05",
      categoria: "literatura",
    },
    {
      titulo: "¿Quién fue la única poeta de la antigüedad grecorromana?",
      texto: "Safo de Lesbos, la legendaria poeta de la Grecia antigua, fue una pionera en plasmar emociones humanas universales a través de la palabra. Su poesía lírica, cargada de amor y deseo, sigue inspirando a generaciones y recuerda que el arte femenino ha existido desde tiempos inmemoriales, aunque a menudo silenciado.",
      autor: "Isabel Martín",
      imagen: "https://www.worldhistory.org/img/c/p/1200x900/2882.jpg",
      fecha: "2024-10-20",
      categoria: "literatura",
    },
    {
      titulo: "Objetivo revolucionario: 10 mujeres que revolucionaron el mundo de la fotografía",
      texto: "Desde Cristina García Rodero hasta Annie Leibovitz, estas fotógrafas desafiaron los límites de su tiempo y transformaron la forma en que percibimos el mundo a través de sus lentes. Descubre cómo sus obras marcaron un antes y un después en el arte de capturar la realidad con una perspectiva única.",
      autor: "Paula Fernández",
      imagen: "https://media.traveler.es/photos/61c9bd71ffc04ac0ad220a28/master/w_1600%2Cc_limit/054_03XX_VO_AliceinWond_06-RGB_QC.jpg",
      fecha: "2024-11-10",
      categoria: "fotografia",
    },
    {
      titulo: "Lo que ellas vieron: Exposición del Reina Sofía",
      texto: "El Reina Sofía celebra la visión única de las mujeres fotógrafas con una exposición que rescata obras fundamentales de artistas como Gisèle Freund y Shirin Neshat. Una mirada al mundo a través de sus lentes, donde la sensibilidad y la fuerza narrativa se entrelazan para contar historias que rara vez se escuchan.",
      autor: "Elena Ruiz",
      imagen: "https://espacio.fundaciontelefonica.com/wp-content/uploads/2013/05/Shirin_2-1024x643.jpg",
      fecha: "2024-09-25",
      categoria: "fotografia",
    },
    {
      titulo: "Todo sobre Maruja Mallo",
      texto: "Maruja Mallo, una figura imprescindible de la Generación del 27, fue mucho más que una pintora: fue una visionaria que rompió moldes y desafió las normas artísticas y sociales de su época. Descubre la obra vibrante y transgresora de esta mujer que merece un lugar destacado en la historia del arte..",
      autor: "Clara Gómez",
      imagen: "https://elasombrario.publico.es/wp-content/uploads/sites/1/2024/01/la-verbena-maruja-mallo.jpg",
      fecha: "2024-08-18",
      categoria: "pintura",
    },
    {
      titulo: "Un Van Gogh en el salón: El libro de Claramore",
      texto: " La divulgadora de arte Claramore, conocida por acercar la historia del arte a nuevas generaciones, nos sorprende con un libro que explica el arte clásico con humor y profundidad. Un Van Gogh en el salón es una invitación a redescubrir los grandes nombres del arte desde una perspectiva fresca y cercana.",
      autor: "Sara Molina",
      imagen: "https://img2.rtve.es/a/16027532/?imgProgApi=imgBackground&w=800",
      fecha: "2024-11-01",
      categoria: "pintura",
    },
    {
      titulo: "Silenciadas: Mujeres pintoras que no han aparecido en tu libro de historia",
      texto: "Sofonisba Anguissola, Camille Claudel y Remedios Varo son solo algunas de las muchas mujeres cuyas obras han sido ignoradas por siglos. Este artículo rescata sus nombres y trabajos, demostrando que la historia del arte está incompleta sin su contribución.",
      autor: "Marta Rivas",
      imagen: "https://imagenes.elpais.com/resizer/v2/EAZ44WV55YIG2UZAN3UJIPSNOA.jpg?auth=dbec6c38f925f03ff45c349d409393b61ea70985723c87ebc157a96d85d27577&width=1960&height=1470&smart=true",
      fecha: "2024-07-14",
      categoria: "pintura",
    },
    {
      titulo: "Mujeres españolas que han hecho historia en el diseño",
      texto: "Desde las formas audaces de Agatha Ruiz de la Prada hasta la elegancia de Teresa Helbig, estas diseñadoras españolas han transformado la moda y el diseño gráfico a nivel internacional. Cada una, con su estilo único, ha dejado una huella imborrable, redefiniendo qué significa ser innovadora en el mundo del diseño.",
      autor: "Laura Delgado",
      imagen: "https://www.modaes.com/files/2020/empresas/teresahelbig/teresa-helbig-retrato-728.jpg",
      fecha: "2024-11-17",
      categoria: "diseño",
    },
    {
      titulo: "¿Quién fue Barbara Kruger?",
      texto: "Con su estilo inconfundible de tipografía sobre imágenes impactantes, Barbara Kruger se convirtió en una voz imprescindible en el arte visual. Sus mensajes provocadores cuestionan el poder, el consumo y el género, convirtiendo cada obra en un manifiesto que trasciende el diseño y se convierte en activismo.",
      autor: "Rocío Ortega",
      imagen: "https://elojodelarte.com/media/k2/items/cache/4ddc75f1698994d05cf43f2316d7d33a_XL.webp?t=20230502_152757",
      fecha: "2024-10-05",
      categoria: "diseño",
    }
  ];
  



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
