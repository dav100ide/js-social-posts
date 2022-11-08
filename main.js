const posts = [
   {
      id: 1,
      content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
      media: 'https://unsplash.it/600/300?image=171',
      author: {
         name: 'Phil Mangione',
         image: 'https://unsplash.it/300/300?image=15',
      },
      likes: 80,
      created: '2021-06-25',
   },
   {
      id: 2,
      content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
      media: 'https://unsplash.it/600/400?image=112',
      author: {
         name: 'Sofia Perlari',
         image: 'https://unsplash.it/300/300?image=10',
      },
      likes: 120,
      created: '2021-09-03',
   },
   {
      id: 3,
      content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
      media: 'https://unsplash.it/600/400?image=234',
      author: {
         name: 'Chiara Passaro',
         image: 'https://unsplash.it/300/300?image=20',
      },
      likes: 78,
      created: '2021-05-15',
   },
   {
      id: 4,
      content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
      media: 'https://unsplash.it/600/400?image=24',
      author: {
         name: 'Luca Formicola',
         image: null,
      },
      likes: 56,
      created: '2021-04-03',
   },
   {
      id: 5,
      content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
      media: 'https://unsplash.it/600/400?image=534',
      author: {
         name: 'Alessandro Sainato',
         image: 'https://unsplash.it/300/300?image=29',
      },
      likes: 95,
      created: '2021-03-05',
   },
];
/*=========================================
    functions
=============================================*/

/*=========================================
    inserimento dom con handlebar
===========================================*/
const container = document.getElementById('container');

for (let i = 0; i < posts.length; i++) {
   const post = posts[i];
   //handelbars contenuto card
   const source = document.getElementById('template-post').innerHTML;
   const template = Handlebars.compile(source);
   const context = post;
   const card = template(context);
   container.innerHTML += card;
   //seleziono il bottone like
}

/*=========================================
    main
=============================================*/

const likeBtns = document.querySelectorAll('.js-like-button');
for (let i = 0; i < likeBtns.length; i++) {
   const likeBtn = likeBtns[i];
   likeBtn.addEventListener('click', function () {
      alert('cciao');
   });
}
