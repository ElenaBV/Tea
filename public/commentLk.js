

const com = document.querySelector('.com');


com?.addEventListener('click', async (event) =>{
event.preventDefault();

if(event.target.className.includes('deleteBtn')) {
    const id = event.target.dataset.id;
  

    const response = await fetch(`/api/lk/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if(response.status === 200) {
       event.target.parentElement.remove();
    }
}
if(event.target.className.includes('editBtn')) {
    const id = event.target.dataset.id;
   
   

const div = document.createElement('div');
div.className = 'editComm';
div.innerHTML = `
<div>
<input
 type="text"
 name="text"
 placeholder="Что ты хочешь изменить?"
 class="editInput"
 defaultValue=""
/>
</div>`



const editBtn = document.createElement("button");
editBtn.className =
 'editButton' ;
 editBtn.id = id;
 editBtn.innerText = `
 Изменить!`;

 
 div.appendChild(editBtn);
 event.target.parentElement.appendChild(div);

 editBtn.addEventListener('click', async (event) => {
   

    const text = document.querySelector('.editInput');
    let commentBody = text.value
  
    const response = await fetch(`/api/lk/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({commentBody})
        
    })
    if(response.status === 200) {
        const comm = event.target.parentElement.parentElement.children[1];
        comm.innerText = commentBody;
        div.remove();
 
     }
    
 })
}
})