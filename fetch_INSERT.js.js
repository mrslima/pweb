function signup () {
    var form = document.getElementById("createAccount");
    var dados = new FormData(form);

    fetch("../includes/signup_sys.php", {
        method: "POST",
        body: dados
    });
}