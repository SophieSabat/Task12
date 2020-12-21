// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// const textarea = document.createElement('textarea');
// textarea.cols = '30'
// textarea.rows = '10'
// document.body.appendChild(textarea);
//
// textarea.value = localStorage.getItem('text');
//
// textarea.oninput = (ev) => {
//     localStorage.setItem('text', ev.target.value);
// }


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//
//
//
// function saveInputData(element) {
//     element.oninput = (ev) => {
//         if (element.type === 'checkbox' || element.type === 'radio') {
//             element.checked
//                 ? element.value = true
//                 : element.value = false;
//         }
//         localStorage.setItem(element.name, ev.target.value);
//     }
//     element.value = localStorage.getItem(element.name);
//     element.checked = localStorage.getItem(element.name);
// }
//
//
// saveInputData(document.forms.myForm.firstName);
// saveInputData(document.forms.myForm.lastName);
// saveInputData(document.forms.myForm.comments);
//
// saveInputData(document.forms.myForm.status);
//
// saveInputData(document.forms.myForm.checkOne);
// saveInputData(document.forms.myForm.checkTwo);
// saveInputData(document.forms.myForm.checkThree);
//
// saveInputData(document.forms.myForm.radioOne);
// saveInputData(document.forms.myForm.radioTwo);


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их,
// затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// const btnLeft = document.createElement('button');
// btnLeft.innerText = '<'
// document.body.appendChild(btnLeft);
// const btnRight = document.createElement('button');
// btnRight.innerText = '>'
// document.body.appendChild(btnRight);
//
// const br = document.createElement('br');
// document.body.appendChild(br);
//
// const textarea = document.createElement('textarea');
// textarea.cols = '30'
// textarea.rows = '10'
// document.body.appendChild(textarea);
//
// const button = document.createElement('button');
// button.innerText = 'Save';
// document.body.appendChild(button);
//
//
// let key = 0;
// const init_value = localStorage.getItem(key);
//
// if (init_value) textarea.value = init_value;
//
//
// button.onclick = () => {
//     localStorage.setItem(localStorage.length++, textarea.value);
//     key = localStorage.length - 1;
// }
//
//
// btnLeft.onclick = () => navigate(-1);
//
// btnRight.onclick = () => navigate(1);
//
//
//
// function navigate(step) {
//     key += step;
//
//     const lastKey = localStorage.length - 1;
//
//     if (key > lastKey) key = 0;
//     if (key < 0) key = lastKey;
//
//     textarea.value = localStorage.getItem(key);
// }








// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
//
// const addContactForm = document.getElementById('addContactForm');
// const addContactButton = document.getElementById('addContactButton');
// const myContactsDiv = document.getElementById('myContacts');
// let tempContact = {}
// const ARRAY_CONTACT = 'ARRAY_CONTACT'
//
//
// addContactButton.onclick = (ev) => {
//
//     let contact = {...tempContact}
//     tempContact = {}
//     for (let i = 0; i < addContactForm.children.length; i++) {
//         const child = addContactForm.children[i];
//         contact[child.name] = child.value;
//     }
//     if (!contact.id) {
//         contact.id = new Date().getTime();
//     }
//
//     setContact(contact);
// }
//
//
//
//
// function setContact(contact) {
//     if (localStorage.hasOwnProperty(ARRAY_CONTACT)) {
//         const arrayContacts = JSON.parse(localStorage.getItem(ARRAY_CONTACT));
//         const find = arrayContacts.find(value => value.id === contact.id);
//
//         if (find) {
//             const filterArray = arrayContacts.filter(value => value.id !== contact.id);
//             filterArray.push(contact);
//             localStorage.setItem(ARRAY_CONTACT, JSON.stringify(filterArray));
//
//         } else {
//             arrayContacts.push(contact);
//             localStorage.setItem(ARRAY_CONTACT, JSON.stringify(arrayContacts));
//         }
//
//     } else {
//         localStorage.setItem(ARRAY_CONTACT, JSON.stringify([contact]));
//     }
// }
//
//
//
//
//
//
// getContact();
//
//
//
//
// function getContact() {
//     if (localStorage.hasOwnProperty(ARRAY_CONTACT)) {
//         const arrContacts = JSON.parse(localStorage.getItem(ARRAY_CONTACT));
//
//         for (const contact of arrContacts) {
//             myContactsDiv.appendChild(divContact(contact));
//         }
//
//     }
// }
// function divContact(contact) {
//     const newContact = document.createElement('div');
//     newContact.style.border = '1px solid black'
//     newContact.style.width = '200px'
//     newContact.style.padding = '10px'
//     newContact.style.float = 'left'
//
//     for (const element in contact) {
//         const contactValue = document.createElement('p');
//         contactValue.innerHTML = `${element} ${contact[element]}`;
//         newContact.appendChild(contactValue);
//     }
//
//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete'
//     newContact.appendChild(deleteButton);
//     const editButton = document.createElement('button');
//     editButton.innerText = 'Edit'
//     newContact.appendChild(editButton);
//
//
//     deleteButton.onclick = () => {
//         deleteContact(contact.id);
//     }
//     editButton.onclick = () => {
//         editContact(contact.id);
//     }
//
//
//     return newContact;
// }
//
//
//
//
//
//
//
// function deleteContact(id) {
//     const parseArray = JSON.parse(localStorage.getItem(ARRAY_CONTACT));
//     const filterArray = parseArray.filter(contact => contact.id !== id);
//     localStorage.setItem(ARRAY_CONTACT, JSON.stringify(filterArray));
//     location.reload();
// }
//
// function editContact(id) {
//     const parseArray = JSON.parse(localStorage.getItem(ARRAY_CONTACT));
//     const findContact = parseArray.find(contact => contact.id === id);
//
//     for (let i = 0; i < addContactForm.children.length; i++) {
//         const child = addContactForm.children[i];
//
//         if (child.name && child.type !== 'submit') {
//             for (const key in findContact) {
//                 if (child.name === key) {
//                     child.value = findContact[key];
//                 }
//             }
//         }
//     }
//     tempContact = findContact;
// }



