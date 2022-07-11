// # Variabili globali

const listElement = document.getElementById('container'); // Row che contiene le card

// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.

const posts = [
    {
        idPost: 1,
        nameProfile: 'Lucas Sinclair',
        imgProfile: 'https://unsplash.it/300/300?image=15',
        datePost: '01-23-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=16',
        likesPost: 5490,
    },
    {
        idPost: 2,
        nameProfile: 'Maxine Mayfield',
        imgProfile: '',
        datePost: '02-20-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=18',
        likesPost: 5936,
    },
    {
        idPost: 3,
        nameProfile: 'Michael Wheeler',
        imgProfile: 'https://unsplash.it/300/300?image=19',
        datePost: '03-25-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=28',
        likesPost: 9456,
    },
    {
        idPost: 4,
        nameProfile: 'Jane Ives',
        imgProfile: '',
        datePost: '07-14-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=23',
        likesPost: 4853,
    },
    {
        idPost: 5,
        nameProfile: 'Dustin Henderson',
        imgProfile: 'https://unsplash.it/300/300?image=24',
        datePost: '08-19-1986',
        textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgPost: 'https://unsplash.it/300/200?image=25',
        likesPost: 5473,
    },
];

// # Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed

let card = '';

posts.forEach(post => {
    const { datePost, imgProfile, nameProfile, imgPost, idPost, textPost, likesPost } = post;
    // # BONUS 1
    // Formattare le date in formato italiano (gg/mm/aaaa).
    const newDate = getRightFormatDate(datePost);

    let profilePic = `<img class="profile-pic" src="${imgProfile}" alt="${nameProfile}" />`;

    // # BONUS 2
    // Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente.
    if (imgProfile === '') {
        const nameInitials = getInitials(nameProfile);
        profilePic = `
                    <div class="profile-pic-default">
                        <span>${nameInitials}</span>
                    </div>`;
    }

    card += createCard(idPost, profilePic, nameProfile, newDate, textPost, imgPost, likesPost);
});

listElement.innerHTML = card;

// # Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

const likeButtons = document.querySelectorAll(`.like-button`);

likeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        this.classList.toggle('like-button--liked');

        const likeButtonId = this.getAttribute('data-postid');
        const likesCountElement = document.getElementById(`like-counter-${likeButtonId}`);
        let likes = parseInt(likesCountElement.innerText);

        // # BONUS 3
        // Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
        likesCountElement.innerText = this.classList.contains('like-button--liked') ? ++likes : --likes;
    });
});
