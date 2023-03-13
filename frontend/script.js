
const cadastro = document.querySelector('#cadastro');
const corpo = document.querySelector('#corpo');
function listar(){
    fetch("http://localhost:3000/item/listar",{
        "method":"GET",
        "headers":{
            "Content-type":"application/json"
        }
    })
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
        data.forEach(livro => {
            listarLivros(livro);
        });
    })
}

function listarLivros(livro){
    let linha = document.createElement('tr')
    let col1 = document.createElement('td')
    let col2 = document.createElement('td')
    let col3 = document.createElement('td')
    let col4 = document.createElement('td')
    let col5 = document.createElement('td')
    let col6 = document.createElement('td')
    let col7 = document.createElement('td')
    let col8 = document.createElement('td')
    let botao = document.createElement('button')
    botao.innerHTML = "excluir"
    botao.addEventListener("click",excluir(livro.id))

    let data1 = new Date(livro.dataEmprest);
    let options1 = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    let formato1 = new Intl.DateTimeFormat('pt-BR',options1)
    let formatEmprest = formato1.format(data1);

    
    let data2 = new Date(livro.dataPrevDev);
    let options2 = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    let formato2 = new Intl.DateTimeFormat('pt-BR',options2)
    let formatPrevDev = formato2.format(data2);

    col1.innerHTML = livro.id
    col2.innerHTML = livro.titulo
    col3.innerHTML = livro.autor
    col4.innerHTML = livro.valor
    col5.innerHTML = formatEmprest
    col6.innerHTML = formatPrevDev
    col7.innerHTML = livro.dataDevolucao
    
    col8.appendChild(botao)

    linha.appendChild(col1)
    linha.appendChild(col2)
    linha.appendChild(col3)
    linha.appendChild(col4)
    linha.appendChild(col5)
    linha.appendChild(col6)
    linha.appendChild(col7)
    linha.appendChild(col8)
    corpo.appendChild(linha)
}

function excluir(id) {
    
}

cadastro.addEventListener('submit', e => {
    e.preventDefault();
    
    const body = {
        "titulo":cadastro.titulo.value,
        "valor":cadastro.valor.value,
        "autor":cadastro.autor.value,
        "dataEmprest":cadastro.dataEmprest.value,
        "dataPrevDev":cadastro.dataPrevDev.value,
        "dataDevolucao":cadastro.dataDevolucao.value
    }
    const options = {
        "method":"POST",
        "headers":{
            "Content-type":"application/json"
        }
    }
    options.body = JSON.stringify(body)
    fetch("http://localhost:3000/item/criar",options)
    .then(resp =>{
        return resp.status
    })
    .then((resp, err) => {
        if(err == null ){
            window.location.reload()
        }else{
            alert("erro ao enviar os dados")
            console.log(err)
        }
    })
});

const jurosLivro = dataDevolucao - dataPrevDev 

console.log(jurosLivro);