// const list = document.querySelector(".list");

// async function getContact() {
//   const data = await fetch("http://localhost:3001/contacts");
//   const contact = data.json();
//   console.log('contacts :>> ', contacts);
//     contact.forEach(contact => {
//         createHTML(contact)
//     });
// };

// function createHTML({name, phone, id}) {
//   const markUp = `<ul>
//     <li>name: ${name}</li>
//     <li>phone: ${phone}</li>
//   </ul>`
//     list.insertAdjacentElementHTML("beforeend", markUp);
// };

// const refs = { 
//     constact: document.querySelector(".list")
//   };
  
//   async function getTodos() {
//     const data = await fetch('http://localhost:3000/contacts');
//     const contact = await data.json();
  
//     contact.forEach(contact => createHTML(contact));
//   }
  
  
//   function createHTML({ name, id, phone }) {
//     const markup =` 
//     <li>
//       <ul class="list">
//         <li class="info">
//           name: ${name}
//         </li>
//         <li class="info">
//           phone: ${phone}
//         </li>
//       </ul>
//     </li>
//     `;                                                               
//     refs.constact.insertAdjacentHTML('beforeend', markup);
//   };