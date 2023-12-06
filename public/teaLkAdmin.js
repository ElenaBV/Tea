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
 placeholder="Место"
 class=""
 defaultValue=""
/>
<input
 type="text"
 name="latitude"
 placeholder="широта"
 class=""
 defaultValue=""
/>
<input
 type="text"
 name="longitude"
 placeholder="долгота"
 class=""
 defaultValue=""
/>
<input
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
    teaForm.innerHTML = `
   <div key=${result.id} class='oneTea'>
   <p>${result.teaName}</p>
   <p>${result.place}</p>
   <img src=${result.picture}>
   <p>${result.description}</p>
   <button data-id=${result.id} class='deleteBtnn'>Удалить</button>
</div>
   `;
   teaAdmin.appendChild(teaForm);
   

   event.target.teaName.value = '';
   event.target.place.value = '';
   event.target.picture.value = '';
   event.target.latitude.value ='';
   event.target.longitude.value ='';
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
