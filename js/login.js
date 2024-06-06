function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "1234" && senha == "1234"){
        alert("Sucesso");
        location.href="../pages/oceanData.html";
    }else{
        alert("Usuário ou senha incorretos");
    }
}