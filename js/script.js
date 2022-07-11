// # Variabili globali

const listElement = document.getElementById('container'); // Row che contiene le card

// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.

const posts = [
    {
        idPost: 1,
        nameProfile: 'Lucas Sinclair',
        imgProfile: 'https://unsplash.it/300/300?image=15',
        datePost: '01-01-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=16',
        likesPost: 5490
    },
    {
        idPost: 2,
        nameProfile: 'Maxine Mayfield',
        imgProfile: 'https://unsplash.it/300/300?image=17',
        datePost: '02-03-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=18',
        likesPost: 5936
    },
    {
        idPost: 3,
        nameProfile: 'Michael Wheeler',
        imgProfile: 'https://unsplash.it/300/300?image=19',
        datePost: '03-05-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=28',
        likesPost: 9456
    },
    {
        idPost: 4,
        nameProfile: 'Jane Ives',
        imgProfile: 'https://unsplash.it/300/300?image=22',
        datePost: '07-09-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=23',
        likesPost: 4853
    },
    {
        idPost: 5,
        nameProfile: 'Dustin Henderson',
        imgProfile: 'https://unsplash.it/300/300?image=24',
        datePost: '08-01-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=25',
        likesPost: 5473
    }
];

// # Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed

listElement.innerHTML = createCard(posts, 'idPost', 'imgProfile', 'nameProfile', 'datePost', 'textPost', 'imgPost', 'likesPost');

// # Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

for (const item of posts) {
    const likeButtonElement = document.querySelector(`[data-postid="${item.idPost}"]`);
    const likeCountElement = document.getElementById(`like-counter-${item.idPost}`);

    likeButtonElement.addEventListener('click', function () {
        likeButtonElement.classList.add('like-button--liked');
        likeCountElement.innerText = ++item.likesPost;
    });
}
