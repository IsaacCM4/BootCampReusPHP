const tipoIconos = {
    normal: 'https://veekun.com/dex/media/types/en/normal.png',
    fire: 'https://veekun.com/dex/media/types/en/fire.png',
    water: 'https://veekun.com/dex/media/types/en/water.png',
    grass: 'https://veekun.com/dex/media/types/en/grass.png',
    electric: 'https://veekun.com/dex/media/types/en/electric.png',
    ice: 'https://veekun.com/dex/media/types/en/ice.png',
    fighting: 'https://veekun.com/dex/media/types/en/fighting.png',
    poison: 'https://veekun.com/dex/media/types/en/poison.png',
    ground: 'https://veekun.com/dex/media/types/en/ground.png',
    flying: 'https://veekun.com/dex/media/types/en/flying.png',
    psychic: 'https://veekun.com/dex/media/types/en/psychic.png',
    bug: 'https://veekun.com/dex/media/types/en/bug.png',
    rock: 'https://veekun.com/dex/media/types/en/rock.png',
    ghost: 'https://veekun.com/dex/media/types/en/ghost.png',
    dragon: 'https://veekun.com/dex/media/types/en/dragon.png',
    dark: 'https://veekun.com/dex/media/types/en/dark.png',
    steel: 'https://veekun.com/dex/media/types/en/steel.png',
    fairy: 'https://veekun.com/dex/media/types/en/fairy.png'
};

document.addEventListener('DOMContentLoaded', () => {
    // ───────── Variables ─────────
    const contenedor = document.getElementById('contenedor-pokemon');
    const inputBusqueda = document.getElementById('busquedaPokemon');
    const sugerencias = document.getElementById('sugerencias');
    const buscadorContainer = document.querySelector('.buscador-container');
    const paginacion = document.querySelector('.paginacion');

    let todosLosPokemons = [];
    let pokemonEliminados = []; // Para Pokémon de la API eliminados localmente
    let offset = 0;
    const limit = 20;

    // Add/Delete/Update containers
    const deleteContainer = document.getElementById('delete-pokemon-container');
    const deleteInput = document.getElementById('deleteBusqueda');
    const deleteSugerencias = document.getElementById('deleteSugerencias');
    const deleteContenedor = document.getElementById('deleteContenedor');

    const updateContainer = document.getElementById('update-pokemon-container');
    const updateInput = document.getElementById('updateBusqueda');
    const updateSugerencias = document.getElementById('updateSugerencias');
    const updateFormContainer = document.getElementById('updateFormContainer');

    // ───────── Funciones ─────────
    async function cargarPokemonRango(offset = 0) {
        const lista = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            .then(r => r.json());
        const datosPokemon = await Promise.all(
            lista.results.map(async p => {
                if(pokemonEliminados.includes(p.name.toLowerCase())) return null; // Saltar si fue eliminado
                const res = await fetch(p.url);
                const data = await res.json();
                return {
                    nombre: data.name,
                    imagen: data.sprites.front_default,
                    tipos: data.types.map(t => t.type.name),
                    numPokedex: data.id
                };
            })
        );
        contenedor.innerHTML = '';
        datosPokemon.filter(p => p !== null).forEach(p => {
            const div = document.createElement('div');
            div.className = 'col s12 m6 pokemon-card';
            div.innerHTML = `<div class="card">
                <div class="card-image">
                    <img src="${p.imagen}" alt="${p.nombre}">
                </div>
                <div class="card-content center">
                    <span class="card-title">${p.nombre}</span>
                    <p>${p.tipos.map(t => `<img src="${tipoIconos[t]}" alt="${t}" style="width:50px; vertical-align:middle;">`).join(' ')}</p>
                </div>
                <p style="text-align: right; padding-right: 20px">#${p.numPokedex}</p>
            </div>`;
            contenedor.appendChild(div);
        });
    }

    async function cargarPokemons() {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const data = await respuesta.json();
        const promesas = data.results.map(async p => {
            const detalle = await fetch(p.url).then(r => r.json());
            return { name: p.name, url: p.url, sprite: detalle.sprites.front_default, tipos: detalle.types.map(t => t.type.name) };
        });
        todosLosPokemons = await Promise.all(promesas);
    }

    async function mostrarPokemon(url) {
        const data = await fetch(url).then(r => r.json());
        const pokemon = { nombre: data.name, imagen: data.sprites.front_default, tipos: data.types.map(t => t.type.name) };
        contenedor.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'pokemon-card-single';
        div.innerHTML = `<div class="card">
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
            <div class="card-content">
                <h3>${pokemon.nombre}</h3>
                <p style="text-align: center;">
                    ${pokemon.tipos.map(t => `<img src="${tipoIconos[t]}" alt="${t}" style="width:50px; vertical-align:middle;">`).join(' ')}
                </p>
            </div>
        </div>`;
        contenedor.appendChild(div);
    }

    function mostrarPokemonManual(nombre, imagen, container, showDeleteButton = false, isApi=false) {
        container.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'pokemon-card-single';
        div.innerHTML = `<div class="card">
            <img src="${imagen}" alt="${nombre}">
            <div class="card-content center">
                <h3>${nombre}</h3>
            </div>
        </div>`;
        if (showDeleteButton) {
            const btn = document.createElement('button');
            btn.textContent = 'Eliminar Pokémon';
            btn.className = 'btn red';
            btn.style.marginTop = '10px';
            btn.addEventListener('click', () => {
                if(isApi) {
                    pokemonEliminados.push(nombre.toLowerCase());
                } else {
                    todosLosPokemons = todosLosPokemons.filter(p => p.name.toLowerCase() !== nombre.toLowerCase());
                }
                container.innerHTML = '';
                alert(`${nombre} eliminado`);
            });
            div.appendChild(btn);
        }
        container.appendChild(div);
    }

    // ───────── Inicialización ─────────
    cargarPokemonRango(offset);
    cargarPokemons();
    M.Sidenav.init(document.querySelectorAll('.sidenav'));

    // ───────── Paginación ─────────
    document.getElementById('btn-siguiente').addEventListener('click', () => {
        offset += limit;
        cargarPokemonRango(offset);
    });
    document.getElementById('btn-anterior').addEventListener('click', () => {
        offset -= limit;
        if (offset < 0) offset = 0;
        cargarPokemonRango(offset);
    });

    // ───────── Búsqueda general ─────────
    inputBusqueda.addEventListener('input', e => {
        const texto = e.target.value.toLowerCase().trim();
        sugerencias.innerHTML = '';
        if (texto.length < 1) return;
        const coincidencias = todosLosPokemons.filter(p => p.name.includes(texto) && !pokemonEliminados.includes(p.name.toLowerCase())).slice(0, 5);
        coincidencias.forEach(p => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${p.sprite}" alt="${p.name}"><span>${p.name}</span>`;
            li.addEventListener('click', () => {
                inputBusqueda.value = p.name;
                sugerencias.innerHTML = '';
                if (p.url) mostrarPokemon(p.url);
                else mostrarPokemonManual(p.name, p.sprite, contenedor);
            });
            sugerencias.appendChild(li);
        });
    });

    // ───────── Add Pokémon ─────────
    document.getElementById('btnAddPokemon').addEventListener('click', e => {
        e.preventDefault();
        contenedor.style.display = 'none';
        deleteContainer.style.display = 'none';
        updateContainer.style.display = 'none';
        buscadorContainer.style.display = 'none';
        paginacion.style.display = 'none';
        document.getElementById('add-pokemon-container').style.display = 'block';
    });

    document.getElementById('formAddPokemon').addEventListener('submit', e => {
        e.preventDefault();
        const nombre = document.getElementById('nombrePokemon').value.trim();
        const archivo = document.getElementById('imagenPokemon').files[0];
        const tipos = document.getElementById('tiposPokemon').value.split(',').map(t => t.trim().toLowerCase());
        if (!archivo) return alert('Selecciona una imagen');

        const reader = new FileReader();
        reader.onload = function(e) {
            const imagenData = e.target.result;
            const div = document.createElement('div');
            div.className = 'col s12 m6 pokemon-card';
            div.innerHTML = `<div class="card">
                <div class="card-image">
                    <img src="${imagenData}" alt="${nombre}">
                </div>
                <div class="card-content center">
                    <span class="card-title">${nombre}</span>
                    <p>${tipos.map(t => tipoIconos[t] ? `<img src="${tipoIconos[t]}" alt="${t}" style="width:50px; vertical-align:middle;">` : t).join(' ')}</p>
                </div>
            </div>`;
            contenedor.appendChild(div);
            todosLosPokemons.push({ name: nombre.toLowerCase(), sprite: imagenData, tipos, url: '' });

            document.getElementById('formAddPokemon').reset();
            document.getElementById('add-pokemon-container').style.display = 'none';
            contenedor.style.display = 'flex';
            buscadorContainer.style.display = 'block';
            paginacion.style.display = 'block';
        };
        reader.readAsDataURL(archivo);
    });

    // ───────── Delete Pokémon ─────────
    document.getElementById('btnDeletePokemon').addEventListener('click', e => {
        e.preventDefault();
        contenedor.style.display = 'none';
        document.getElementById('add-pokemon-container').style.display = 'none';
        updateContainer.style.display = 'none';
        buscadorContainer.style.display = 'none';
        paginacion.style.display = 'none';
        deleteContainer.style.display = 'block';
        deleteInput.value = '';
        deleteSugerencias.innerHTML = '';
        deleteContenedor.innerHTML = '';
    });

    deleteInput.addEventListener('input', () => {
        const texto = deleteInput.value.toLowerCase().trim();
        deleteSugerencias.innerHTML = '';
        deleteContenedor.innerHTML = '';
        if (texto.length < 1) return;

        const coincidencias = todosLosPokemons
            .filter(p => p.name.includes(texto) && !pokemonEliminados.includes(p.name.toLowerCase()))
            .slice(0, 5);

        coincidencias.forEach(p => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${p.sprite}" alt="${p.name}"><span>${p.name}</span>`;
            li.addEventListener('click', () => {
                deleteSugerencias.innerHTML = '';
                mostrarPokemonManual(p.name, p.sprite, deleteContenedor, true, !!p.url);
            });
            deleteSugerencias.appendChild(li);
        });
    });

    // ───────── Update Pokémon ─────────
    document.getElementById('btnUpdatePokemon').addEventListener('click', e => {
        e.preventDefault();
        contenedor.style.display = 'none';
        document.getElementById('add-pokemon-container').style.display = 'none';
        deleteContainer.style.display = 'none';
        buscadorContainer.style.display = 'none';
        paginacion.style.display = 'none';
        updateContainer.style.display = 'block';
        updateInput.value = '';
        updateSugerencias.innerHTML = '';
        updateFormContainer.innerHTML = '';
    });

    updateInput.addEventListener('input', () => {
        const texto = updateInput.value.toLowerCase().trim();
        updateSugerencias.innerHTML = '';
        updateFormContainer.innerHTML = '';
        if (texto.length < 1) return;

        const coincidencias = todosLosPokemons
            .filter(p => p.name.includes(texto) && !pokemonEliminados.includes(p.name.toLowerCase()))
            .slice(0, 5);

        coincidencias.forEach(p => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${p.sprite}" alt="${p.name}"><span>${p.name}</span>`;
            li.addEventListener('click', () => {
                updateSugerencias.innerHTML = '';
                mostrarFormUpdate(p);
            });
            updateSugerencias.appendChild(li);
        });
    });

    function mostrarFormUpdate(pokemon) {
        updateFormContainer.innerHTML = '';

        const div = document.createElement('div');
        div.innerHTML = `
            <form id="formUpdatePokemon">
                <div class="input-field">
                    <input type="text" id="updateNombre" value="${pokemon.name}" required>
                    <label class="active" for="updateNombre">Nombre</label>
                </div>
                <div class="file-field input-field">
                    <div class="btn">
                        <span>Seleccionar Imagen</span>
                        <input type="file" id="updateImagen" accept="image/*">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="Dejar vacío para no cambiar imagen">
                    </div>
                </div>
                <div class="input-field">
                    <input type="text" id="updateTipos" value="${pokemon.tipos ? pokemon.tipos.join(', ') : ''}" required>
                    <label class="active" for="updateTipos">Tipos (separados por comas)</label>
                </div>
                <button class="btn" type="submit">Actualizar Pokémon</button>
            </form>
        `;
        updateFormContainer.appendChild(div);

        document.getElementById('formUpdatePokemon').addEventListener('submit', e => {
            e.preventDefault();
            const nuevoNombre = document.getElementById('updateNombre').value.trim();
            const tipos = document.getElementById('updateTipos').value.split(',').map(t => t.trim().toLowerCase());
            const archivo = document.getElementById('updateImagen').files[0];

            if(archivo){
                const reader = new FileReader();
                reader.onload = function(event){
                    actualizarPokemon(pokemon, nuevoNombre, tipos, event.target.result);
                }
                reader.readAsDataURL(archivo);
            } else {
                actualizarPokemon(pokemon, nuevoNombre, tipos, pokemon.sprite);
            }
        });
    }

    function actualizarPokemon(pokemon, nombre, tipos, imagen) {
        const index = todosLosPokemons.findIndex(p => p.name.toLowerCase() === pokemon.name.toLowerCase());
        if(index !== -1){
            // Guardamos como Pokémon local actualizado
            todosLosPokemons[index] = {
                name: nombre.toLowerCase(),
                sprite: imagen,
                tipos: tipos
            };
        }
        alert(`${pokemon.name} actualizado a ${nombre}`);

        // Limpiamos formulario Update
        updateFormContainer.innerHTML = '';
        updateInput.value = '';
        updateSugerencias.innerHTML = '';

        // Restaurar vista principal
        updateContainer.style.display = 'none';
        contenedor.style.display = 'flex';
        buscadorContainer.style.display = 'block';
        paginacion.style.display = 'block';

        // Recargar la vista principal
        cargarPokemonRango(offset);
    }
});
