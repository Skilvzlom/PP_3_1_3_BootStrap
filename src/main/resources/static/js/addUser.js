const addForm = document.getElementById("add-user-form")
addForm.addEventListener("submit", e=> {
    e.preventDefault()

    const formData = new FormData(addForm)
    const object = {
        roles:[]
    }
    formData.forEach((value, key) => {
        console.log(value)
        console.log(key)
        if (key === "roles") {
         const roleId = value.split(" ")[0];
         const roleName = value.split(" ")[1];

         const role = {
             id : parseInt(roleId),
             name: roleName,
         };
         object.roles.push(role)
        } else {
            object[key] = value;
        }

    });

    fetch("api/users/", {
        method:"POST",
        header: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(object)
    })
        .then(() => getUsers())
        .then(addForm.reset())
})