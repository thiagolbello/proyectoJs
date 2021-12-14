for (const carta of cartas) {
    $(".row").append(`<div class="col mt-2 mb-2 carta selectDisable" id="card${carta.id}">
                        <img src="archivos/imagenes/${carta.imagen}" class="center mt-2">
                        <div class="text-center">
                            <h3>${carta.pokemon}</h3>
                            <a>$${carta.precio}</a>
                        </div>
                        <hr class="solid center"></hr>
                        <div class="txtDetails text-center block mb-2" id="details${carta.id}">
                            <h5>ID: ${carta.id}</h5>
                            <a class="shiny">Ataque Destacado: ${carta.ataqueGX}</a>
                            <img src="archivos/gifs/${carta.gif}" class="center gif">
                        </div>
                      </div>`);
    
    $(`#card${carta.id}`).click(() => {
        $(`#details${carta.id}`).slideToggle("fast");
    });

    $(`#card${carta.id}`).dblclick(()=>{
        localStorage.setItem(`esFavorito${carta.id}`, "true");
        document.location.reload(true)
    });

    if(localStorage.getItem(`esFavorito${carta.id}`) == "true") {
        $(`#card${carta.id}`).addClass("favorita");
        $(".dropdownContenido").append(
        `<a>Nombre: ${carta.pokemon}</a>`)
    }
}

const url700 = "https://pokeapi.co/api/v2/pokemon/700";

$("body").append('<button id="btn1">Conseguir ID de Sylveon mediante una PokeAPI</button>');

$("#btn1").click(()=> {
    $.get(url700, function(respuesta, estado) {
        console.log(respuesta);
        console.log(estado);
        if(estado === "success") {
            let misDatos = respuesta;
            $("body").append (
                `<div>
                    <h1>${misDatos.id}</h1>
                </div>`)
        }
    })
});