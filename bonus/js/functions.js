/**
 * Funzione per cambiare il formato della data in quello utilizzado nel paese dell'utente.
 *
 * @param {string} date - Variabile/proprietà che racchiude la data da formattare.
 * @return {string} La funzione restituisce la data formattata.
 */

const getRightFormatDate = date => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
};

//! ---------------------------------------

/**
 * Funzione per prendere le iniziali di nome e cognome.
 *
 * @param {string} name - Variabile/proprietà che racchiude nome e cognome dell'utente.
 * @return {string} La funzione restituisce le iniziali di nome e cognome.
 */
const getInitials = name => {
    const nameArray = name.split(' ');
    let initials = '';
    nameArray.forEach(item => {
        initials += item[0];
    });
    return initials;
};

//! ---------------------------------------

/**
 * Funzione per creare la card di un post
 *
 * @param {number} id - Numero identificativo del post.
 * @param {string} pic - Immagine del profilo.
 * @param {string} name - Nome del profilo.
 * @param {string} date - Data di pubblicazione del post.
 * @param {string} text - Testo del post.
 * @param {string} img - Immagine del post.
 * @param {number} likes - Likes del post.
 * @return {string} La funzione restituisce la stringa HTML della card
 */

const createCard = (id, pic, name, date, text, img, likes) => {
    return `
        <div class="post">
            <div class="post__header">
            <div class="post-meta">
                    <div class="post-meta__icon">
                        ${pic}
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">
                ${text}
            </div>
            <div class="post__image">
                <img src="${img}" alt="" />
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone</div>
                </div>
            </div>
        </div>
        `;
};
