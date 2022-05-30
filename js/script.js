const FetchSearchButtom = document.getElementById("btn-search");
const pinture = document.getElementById("pinture");

FetchSearchButtom.addEventListener('click', async () => {

    const pokeName = document.getElementById("param").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    const response = await fetch(url, { method: "GET" });

    if (response.ok) {
        console.log(`Status peticion asincrona: ${response.status}`);
        data = await response.json();
        SetPinture(data.sprites.front_default);
        FormatInfo(data);
    } else {
        console.log("Error en la peticion asincrona...");
    }
});

const SetPinture = url => {
    pinture.setAttribute("src", url);
}

const FormatInfo = data => {
    document.getElementById('id').innerHTML = data.id;
    document.getElementById('height').innerHTML = data.height;
    document.getElementById('weight').innerHTML = data.weight;
    if (data.types.lenght > 1) {
        document.getElementById('type1').innerHTML = data.types[0].type.name;
        document.getElementById('type2').innerHTML = data.types[0].type.name;
    } else {
        document.getElementById('type1').innerHTML = data.types[0].type.name;
        document.getElementById('type2').innerHTML = "None";
    }
    document.getElementById('order').innerHTML = data.order;

    document.getElementById('hp').innerHTML = data.stats[0].base_stat;
    document.getElementById('attack').innerHTML = data.stats[1].base_stat;
    document.getElementById('defense').innerHTML = data.stats[2].base_stat;
    document.getElementById('special-attack').innerHTML = data.stats[3].base_stat;
    document.getElementById('special-defense').innerHTML = data.stats[4].base_stat;
    document.getElementById('speed').innerHTML = data.stats[5].base_stat;


}