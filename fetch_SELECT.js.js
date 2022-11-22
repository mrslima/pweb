
function displayUsers() {
    fetch("../includes/display_users.php", {
    method: "GET"
    }).then(async function(resposta) {

        var dados = await resposta.json();
        // console.log(dados);
        listUsers(dados);

    });
}

function listUsers(dados) {
    console.log("Usuários:")
    for(var i=0; i < dados.length; i++){
    console.log(dados[i].usersName, ': ', dados[i].usersEmail);
    };
}