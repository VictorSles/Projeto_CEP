function enviar() {
    let cep = document.getElementById("texto1").value;
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "https://viacep.com.br/ws/" + cep + "/json/");
    ajax.send();
    ajax.onload = function () {
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let uf = obj.uf;
        let cidade = obj.localidade;
        let bairro = obj.bairro;
        let rua = obj.logradouro;
        let ddd = obj.ddd;
        document.getElementById("idiv").innerHTML=`UF: `+uf+`</br>`+"Cidade: "+cidade+`</br>`+"Bairro: "+bairro+`</br>`+"Rua: "+rua+`</br>`+"DDD: "+ddd;
    }
}


