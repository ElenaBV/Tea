const admin = document.querySelector(".teaAdmin");

admin?.addEventListener("click", async (event) => {
  if (event.target.className.includes("add-btn")) {
    const div = document.createElement("div");
    div.className = "tea-add";
    div.innerHTML = `
 <div>
 <form class="add-form">
<input
 type="text"
 name="teaName"
 placeholder="teaName"
 class="teaName"
 defaultValue=""
/>
<input
 type="text"
 name="place"
 placeholder="place"
 class=""
 defaultValue=""
/>
<input
 type="text"
 name="picture"
 placeholder="picture"
 class=""
 defaultValue=""
/>
<input
 type="text"
 name="description"
 placeholder="description"
 class=""
 defaultValue=""
/>
<button class="addButton" type="submit">Добавить</button>
</form>
</div> 
`

 event.target.parentElement.appendChild(div);
 const form = document.querySelector('.add-form');

form.addEventListener('submit', async(event) => {
event.preventDefault();
const formData = new FormData(form);
for(let [name, value] of formData) {
    formData[name] = value
    // console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
  }

  const response = await fetch(`/api/lkadmin`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
body: JSON.stringify(formData)
  })

  if(response.status === 200) {
    const teaAdmin = document.querySelector('.tea')
    const result = await response.json();
    const teaForm = document.createElement('div')
    // console.log(event.target.parentElement.parentElement.parentElement.parentElement.children[0])
    teaForm.innerHTML = `
   <div key=${result.id} class='one-tea'>
   <p>${result.teaName}</p>
   <p>${result.place}</p>
   <p>${result.picture}</p>
   <p>${result.description}</p>
   <button data-id=${result.id} class='deleteBtnn'>Удалить</button>
</div>
   `;
   teaAdmin.appendChild(teaForm);

   event.target.teaName.value = '';
   event.target.place.value = '';
   event.target.picture.value = '';
   event.target.description.value ='';
  }
})
  }

  if(event.target.className.includes('deleteBtn')) {
    const id = event.target.dataset.id;

    const response = await fetch(`/api/lkadmin/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if(response.status === 200) {
        event.target.parentElement.remove();
     }
  }
});