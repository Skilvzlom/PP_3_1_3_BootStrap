const modalEdit = document.getElementById("modal-edit")
modalEdit.addEventListener("show.bs.modal", evt => {
    const button = event.relatedTarget

    const id = button.getAttribute("data-bs-userId")
    const name = button.getAttribute("data-bs-name")
    const username = button.getAttribute("data-bs-userName")
    const phone = button.getAttribute("data-bs-phone")
    const email = button.getAttribute("data-bs-email")

    modalEdit.querySelector('#id-edit').value = id
    modalEdit.querySelector('#name-edit').value = name
    modalEdit.querySelector('#username-edit').value = username
    modalEdit.querySelector('#phone-edit').value = phone
    modalEdit.querySelector('#email-edit').value = email
})

const editForm = document.getElementById("edit-form")
console.log(editForm)
editForm.addEventListener("submit", ev => {
    ev.preventDefault()
    const formData = new FormData(editForm)
    const object = {
        roles:[]
    }

    formData.forEach((value, key) =>{
        if (key === "roles") {
            const roleId = value.split(" ")[0]
            const roleName = "ROLE_"+value.split(" ")[1]
            const role = {
                id: roleId,
                name: roleName
            }

            object.roles.push(role)
        } else {
            object[key] = value
        }
    })

    fetch(`api/users/`, {
        method:"PUT",
        headers: {"Content-type":"application/json"} ,
        body: JSON.stringify(object)
    }).then(() => getUsers())
    $("#modal-edit").modal("hide");
    editForm.reset()

})