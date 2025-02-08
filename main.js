const form = document.getElementById('form-dados-usuario');
const inputNome = document.getElementById('input-nome');
const inputTelefone = document.getElementById('input-telefone');
const tabelaUsuarios = document.getElementById('tabela-usuarios')
const containerMensagemErro = document.querySelector('.error-message')
const botaoLimparCadastro = document.getElementById('btn-limpar-cadastro')
let mensagemErro = '';
let usuarios = [];
let telefones = []

form.addEventListener('submit',function(e){
    e.preventDefault();

    if (validaUsuario(inputNome,inputTelefone)){
        adicionaUsuario(inputNome,inputTelefone);
        containerMensagemErro.style.display = 'none';
        inputNome.value = '';
        inputTelefone.value = '';
        inputTelefone.classList.remove('error');
        inputNome.classList.remove('error')

    }
    document.getElementById('total-usuarios').innerText = `Usuarios Cadastrados: ${usuarios.length}`
})

botaoLimparCadastro.addEventListener('click',function(){
    usuarios = [];
    telefones = [0];
    tabelaUsuarios.innerHTML = '';
    console.log(usuarios)
    document.getElementById('total-usuarios').innerText = `Usuarios Cadastrados: ${usuarios.length}`
})

function adicionaUsuario(inputNome,inputTelefone){
    usuarios.push(inputNome.value);
    telefones.push(inputTelefone.value);
    const nome = inputNome.value;
    const telefone = inputTelefone.value;
    const codigo = usuarios.length;
    const linha = `<tr><td>${codigo}</td><td>${nome}</td><td>${telefone}</td></tr>`;
    tabelaUsuarios.innerHTML += linha;
}

function validaUsuario(inputNome,inputTelefone){
    if (usuarios.includes(inputNome.value)){
        mensagemErro = `Usuario ${inputNome.value} já cadastrado!`;
        containerMensagemErro.innerText = mensagemErro;
        containerMensagemErro.style.display = 'block';

        inputNome.classList.add('error')
        return false;

    }else if (telefones.includes(inputTelefone.value)){
        mensagemErro = `Telefone ${inputTelefone.value} já cadastrado!`
        containerMensagemErro.innerText = mensagemErro;
        containerMensagemErro.style.display = 'block';

        inputTelefone.classList.add('error');
        return false;
    }
    return true;
}
