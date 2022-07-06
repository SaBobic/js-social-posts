/**
 * Funzione per cambiare il formato della data. Esempio: 01-20-1995 ----> 20/01/1995
 *
 * @param {Object[]} arr - Array da cui prendere la data di ciascun post.
 * @param {string} date - Chiave dell'oggetto nell'array che restituisce la data.
 * @return {string} La funzione restituisce la data formattata.
 */
const getNewFormatDate = (arr, date) => {
    const oldDate = arr[date];
    
    const day = oldDate.slice(3,5);
    const month = oldDate.slice(0,2);
    const year = oldDate.slice(6);
    
    const newDate = `${day}/${month}/${year}`;

    return newDate;
}

//! ---------------------------------------

/**
 * Funzione per creare la card di un post, utilizzando le proprietà dell'array contenente i post
 *
 * @param {Object[]} arr - Array da cui prendere i parametri dei post.
 * @param {number} id - Numero identificativo del post.
 * @param {string} pic - Immagine del profilo.
 * @param {string} name - Nome del profilo.
 * @param {string} date - Data di pubblicazione del post.
 * @param {string} text - Testo del post.
 * @param {string} img - Immagine del post.
 * @param {number} likes - Likes del post.
 * @return {string} La funzione restituisce la stranga HTML della card montata.
 */
const createCard = (arr, id, pic, name, text, img, likes) => {

    let card = "";
    
    for (const item of arr){
        const newDate = getNewFormatDate(item, 'datePost');

        card += `
        <div class="post">
            <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                <img class="profile-pic" src="${item[pic]}" alt="${item[name]}" />
                </div>
                <div class="post-meta__data">
                <div class="post-meta__author">${item[name]}</div>
                <div class="post-meta__time">${newDate}</div>
                </div>
            </div>
            </div>
            <div class="post__text">
            ${item[text]}
            </div>
            <div class="post__image">
            <img src="${item[img]}" alt="" />
            </div>
            <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                <a class="like-button js-like-button" data-postid="${item[id]}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
                </div>
                <div class="likes__counter">Piace a <b id="like-counter-${item[id]}" class="js-likes-counter">${item[likes]}</b> persone</div>
            </div>
            </div>
        </div>
        `;
    }

    return card;
}