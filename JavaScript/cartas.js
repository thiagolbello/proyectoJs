function Cartas(id, pokemon, hp, ataqueGX, imagen, gif, precio) {
    this.id = id;
    this.pokemon = pokemon;
    this.hp = hp;
    this.ataqueGX = ataqueGX;
    this.imagen = imagen;
    this.gif = gif;
    this.precio = precio;
}

const cartas = [];

cartas.push(new Cartas(197, "Umbreon", 200, "Dark Call-GX", "197.png", "197.gif", 100));
cartas.push(new Cartas(196, "Espeon", 200, "Divide-GX", "196.png", "196.gif", 100));
cartas.push(new Cartas(700, "Sylveon", 200, "Plea-GX", "700.png", "700.gif", 150));
cartas.push(new Cartas(131, "Lapras", 190, "Ice Beam-GX", "131.png", "131.gif", 120));
cartas.push(new Cartas(006, "Charizard", 250, "Raging Out-GX", "006.png", "006.gif", 200));
cartas.push(new Cartas(026, "Raichu", 210, "Voltail-GX", "026.png", "026.gif", 130));
cartas.push(new Cartas(800, "Necrozma", 180, "Black Ray-GX", "800.png", "800.gif", 175));
cartas.push(new Cartas(384, "Rayquaza", 180, "Tempest-GX", "384.png", "384.gif", 185));
cartas.push(new Cartas(149, "Dragonite", 250, "Dragonporter-GX", "149.png", "149.gif", 200));