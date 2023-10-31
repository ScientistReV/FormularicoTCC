document.getElementById('addAuthorBtn').addEventListener('click', () => {
    let newAuthorDiv = document.createElement('div');
    newAuthorDiv.innerHTML = `
        <div class="autor">
            <div class="form-group">
                <label>Primeiro Nome:</label>
                <input type="text" class="form-control" required>
            </div>

            <div class="form-group">
                <label>Último Nome:</label>
                <input type="text" class="form-control" required>
            </div>

            <div class="form-group">
                <label>URL do Currículo Lattes:</label>
                <input type="url" class="form-control" required>
            </div>
        </div>
    `;
    document.getElementById('autores').appendChild(newAuthorDiv);
});

document.getElementById('addCoorientadorBtn').addEventListener('click', () => {
    let newCoorientadorDiv = document.createElement('div');
    newCoorientadorDiv.innerHTML = `
        <div class="coorientador">
            <div class="form-group">
                <label>Primeiro Nome:</label>
                <input type="text" class="form-control">
            </div>

            <div class="form-group">
                <label>Último Nome:</label>
                <input type="text" class="form-control">
            </div>

            <div class="form-group">
                <label>URL do Currículo Lattes:</label>
                <input type="url" class="form-control">
            </div>
        </div>
    `;
    document.getElementById('coorientadores').appendChild(newCoorientadorDiv);
});

document.getElementById('addMembroBtn').addEventListener('click', () => {
    let newMembroDiv = document.createElement('div');
    newMembroDiv.innerHTML = `
        <div class="membro">
            <div class="form-group">
                <label>Nome do Membro:</label>
                <input type="text" class="form-control" required>
            </div>

            <div class="form-group">
                <label>URL do Currículo Lattes:</label>
                <input type="url" class="form-control" required>
            </div>
        </div>
    `;
    document.getElementById('bancaMembros').appendChild(newMembroDiv);
});

/*document.getElementById('tccForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const urls = [...document.querySelectorAll('.campoURLLattes')].map(campo => campo.value);
    const urlsValidas = await verificaURLsLattes(urls);

    if (urlsValidas) {
        enviarEmail();
    } else {
        alert('Uma ou mais URLs do Lattes são inválidas.');
    }
});

async function verificaURLsLattes(urls) {
    const respostas = await Promise.all(urls.map(url => fetch('/verificaLattes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })));

    const resultados = await Promise.all(respostas.map(resposta => resposta.json()));

    return resultados.every(resultado => resultado.valid);
} */


//Envia email via smtp

function enviarEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<sender’s email address>",
	Password : "<email password>",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("email enviado com sucesso")
	);
}