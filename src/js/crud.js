// CRUD 


// C - create (створити) - метод POST
// R - read (прочитати або отримати) - метод GET
// U - update (оновити дані) - метод PUT(повністю), PATCH (частково)
// D - delete (видалити) - метод DELETE


const refs = {
  form: document.querySelector('#form'),
  phoneList: document.querySelector('#todos'),
  updateForm: document.querySelector('#updateForm'),
  modal: document.querySelector(".modal"),
  modalBackdrop: document.querySelector(".modal-backdrop"),
};

const num = "num";

const calc = num + 1; //якби був TypeScript, то вилізла би помилка, що до строки не можна додавати число.

console.log(object);
async function getPhonebook() {
  const data = await fetch('http://localhost:3000/contacts');
  const phones = await data.json();

  phones.forEach(todo => createHTML(todo));
}

window.addEventListener('DOMContentLoaded', getPhonebook());

function createHTML({ name, id, phone }) {
  const markup = `<div class="form-check"  id="${id}">
   ${name}: ${phone}
   <button type="button" delete id="${id}">Delete</button>
   <button
   type="button"
   class="btn btn-primary"
   data-toggle="modal"
   data-target="#exampleModalCenter"
    update
    id="${id}">
  Update
   </button>
</div>`;
  refs.phoneList.insertAdjacentHTML('beforeend', markup);
}

refs.form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  const {
    elements: { name, phone },
  } = e.currentTarget;

  const postObj = {
    name: name.value,
    phone: phone.value,
  };

  refs.form.reset();

  const data = await fetch('http://localhost:3000/contacts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postObj),
  });

  const contact = await data.json();

  createHTML(contact);
}

refs.phoneList.addEventListener('click', onDelete);

async function onDelete(e) {
  if (e.target.nodeName !== 'BUTTON' || e.target.hasAttribute('update')) {
    return;
  }
  const deletedId = e.target.getAttribute('id');
  const data = await fetch(`http://localhost:3000/contacts/${deletedId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });

  const res = await data.json();

  if (res) {
    document.getElementById(`${deletedId}`).remove();
  }
}

refs.phoneList.addEventListener("click", onUpdate)



async function onUpdate(e) {
  if (e.target.nodeName !== 'BUTTON' || e.target.hasAttribute('delete')) return;
  const updateID = e.target.getAttribute("id");
  
  refs.updateForm.addEventListener('submit', onUpdateForm);


  async function onUpdateForm(e) {
    e.preventDefault();

    const {
      elements: { updateName, updatePhone },
    } = e.currentTarget;
  
    const updateObj = {
      phone: updatePhone.value,
      name: updateName.value,
    };
  
    const data = await fetch(`http://localhost:3000/contacts/${updateID}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateObj),
    });
  
    const res = await data.json();

    if(res) {
      refs.phoneList.innerHTML = "";
      getPhonebook();
      refs.updateForm.reset();

      refs.updateForm.removeEventListener("sumbmit", onUpdateForm);
      // refs.modal.classList.remove("show");
      // refs.modalBackdrop.classList.remove("show");
    }
  };
  
};



