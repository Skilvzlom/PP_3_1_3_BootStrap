var id
const modalDelete = document.getElementById("modal-delete")
modalDelete.addEventListener("show.bs.modal", evt => {
    const button = event.relatedTarget

    id = button.getAttribute("data-bs-userId")
    const name = button.getAttribute("data-bs-name")
    const username = button.getAttribute("data-bs-userName")
    const phone = button.getAttribute("data-bs-phone")
    const email = button.getAttribute("data-bs-email")

    modalDelete.querySelector('#id-delete').value = id
    modalDelete.querySelector('#name-delete').value = name
    modalDelete.querySelector('#username-delete').value = username
    modalDelete.querySelector('#phone-delete').value = phone
    modalDelete.querySelector('#email-delete').value = email
})

const formDelete = document.getElementById("form-delete")
formDelete.addEventListener("submit", ev => {
    ev.preventDefault()
    fetch(`api/users/${id}`, {
        method:'DELETE'
    }).then(() => getUsers())
    formDelete.reset()
    $("#modal-delete").modal("hide");
})