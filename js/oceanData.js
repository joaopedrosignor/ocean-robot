document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const btnAdicionar = document.querySelector("#btnAdicionar");
    const inputLocal = document.querySelector('#inputLocal');
    const inputLixo = document.querySelector('#inputLixo');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';

    const locais = [
        { local: "Grande Depósito de Lixo do Pacífico", lixo: 80000 },
        { local: "Oceano Atlântico", lixo: 34000 }
    ];

    function displayCurrentItem(index) {
        if (locais.length === 0) {
            carousel.innerHTML = '<p>Nenhum local disponível</p>';
            return;
        }

        const item = locais[index];
        const newItemHTML = `
            <div class="carousel-item">
                <h3>${item.local}</h3>
                <p>Lixo: ${item.lixo} toneladas</p>
                <div>
                    <button onclick="editarLocal(${index})">Editar</button>
                    <button onclick="apagarLocal(${index})">Apagar</button>
                </div>
            </div>
        `;

        // Apply animation
        carousel.innerHTML = newItemHTML;
        const newItem = carousel.querySelector('.carousel-item');
        setTimeout(() => {
            newItem.classList.add('active');
        }, 10);
    }

    btnAdicionar.addEventListener('click', function (event) {
        event.preventDefault();

        if (inputLocal.value.trim() === '' || inputLixo.value.trim() === '') {
            errorMessage.textContent = 'Por favor, preencha ambos os campos.';
            document.querySelector('.lista-adicionar').appendChild(errorMessage);
        } else if (isNaN(inputLixo.value) || parseInt(inputLixo.value) <= 0) {
            errorMessage.textContent = 'Por favor, insira uma quantidade válida de lixo (numérica e maior que zero).';
            document.querySelector('.lista-adicionar').appendChild(errorMessage);
        } else {
            adicionarLocal();
            if (document.querySelector('.error-message')) {
                document.querySelector('.error-message').remove();
            }
        }
    });

    function adicionarLocal() {
        const local = {
            local: inputLocal.value,
            lixo: parseInt(inputLixo.value)
        };

        locais.push(local);
        document.getElementById("myForm").reset();
        displayCurrentItem(locais.length - 1); // Mostrar o último item adicionado
    }

    let index = 0;

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = locais.length - 1; // Loop para o último item
        }
        displayCurrentItem(index);
    });

    nextBtn.addEventListener('click', () => {
        if (index < locais.length - 1) {
            index++;
        } else {
            index = 0; // Loop para o primeiro item
        }
        displayCurrentItem(index);
    });

    window.editarLocal = function(idLocal) {
        const novoLixo = prompt('Digite a nova quantidade de lixo (toneladas):', locais[idLocal].lixo);
        if (novoLixo !== null && !isNaN(novoLixo) && parseInt(novoLixo) > 0) {
            locais[idLocal].lixo = parseInt(novoLixo);
            displayCurrentItem(index);
        } else {
            alert('Por favor, insira uma quantidade válida de lixo (numérica e maior que zero).');
        }
    };

    window.apagarLocal = function(idLocal) {
        if (confirm('Tem certeza que deseja apagar este local?')) {
            locais.splice(idLocal, 1);
            if (index >= locais.length) {
                index = locais.length - 1;
            }
            displayCurrentItem(index);
        }
    };

    displayCurrentItem(index);
});


