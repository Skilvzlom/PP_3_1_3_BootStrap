
async function getUsers() {
    const response = await fetch('api/users')

    if (!response.ok) {
        alert("Error with getting users")
    } else {
        await response.json().then(data => intoTable(data))
    }

    function intoTable(rows) {
        const tableRows = document.getElementById("users-table");
        tableRows.innerHTML = "";
        rows.forEach(({id, name, username, email, phone, roles}) => {
            let userRoles = "";
            roles.forEach(role => {
                    userRoles += role.name.replace("ROLE_", "") + " ";
                }
            )
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${userRoles}</td>
            <td>
                <button type="button" class="btn btn-info text-white"
                data-bs-userId="${id}"
                data-bs-userName="${username}"
                data-bs-phone="${phone}"
                data-bs-email="${email}"
                data-bs-roles="${userRoles}"
                data-bs-toggle="modal"
                data-bs-target="#ModalEdit"
                >Edit</button> 
            </td>
            <td>
                <button type="button" class="btn btn-danger text-white"
                data-bs-userId="${id}"
                data-bs-userName="${username}"
                data-bs-phone="${phone}"
                data-bs-email="${email}"
                data-bs-roles="${userRoles}"
                data-bs-toggle="modal"
                data-bs-target="#ModalDelete"
                >Delete</button> 
            </td>`;

            tableRows.append(row);
        });
    }
}
