const formDelete = document.querySelector('#form-delete')
formDelete.addEventListener('submit', (event) => {
    const confirmation = confirm('Deseja Deletar ?')
    if (!confirmation) {
        event.preventDefault()

    }

})