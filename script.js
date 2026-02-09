// Banco de Dados de Tratamentos Sugeridos
const bancoSaude = {
    diabetes: {
        remedio: "Metformina / Insulina",
        horarios: ["08:00", "12:00", "20:00"],
        dica: "Verificar glicemia antes das refeições."
    },
    hipertensao: {
        remedio: "Losartana / Enalapril",
        horarios: ["07:00", "19:00"],
        dica: "Evitar sal e medir pressão em repouso."
    },
    ansiedade: {
        remedio: "Sertralina / Exercícios de Respiração",
        horarios: ["09:00"],
        dica: "Pratique a técnica 4-7-8 de respiração."
    },
    alzheimer: {
        remedio: "Donepezila",
        horarios: ["21:00"],
        dica: "Manter objetos sempre no mesmo lugar."
    }
};

function gerarPlanoSaude() {
    const userType = document.getElementById('user-type').value;
    const doenca = document.getElementById('doenca').value;
    const neuro = document.getElementById('neuro').value;
    const gravidade = document.querySelector('input[name="nivel"]:checked').value;

    document.getElementById('setup-container').classList.add('hidden');
    const dash = document.getElementById('dashboard');
    dash.classList.remove('hidden');

    // Ajuste Visual por Gravidade
    if (gravidade === 'grave') {
        dash.classList.add('grave');
    }

    const lista = document.getElementById('lista-remedios');
    lista.innerHTML = "";

    // Lógica para Doenças Crônicas
    if (bancoSaude[doenca]) {
        const dados = bancoSaude[doenca];
        dados.horarios.forEach(hora => {
            lista.innerHTML += `
                <div class="remedios-card">
                    <div>
                        <strong>${dados.remedio}</strong><br>
                        <small>${dados.dica}</small>
                    </div>
                    <div class="hora">${hora}</div>
                </div>
            `;
        });
    } else {
        lista.innerHTML = "<p>Nenhum remédio específico para esta seleção.</p>";
    }

    // Ajuste de Texto para TEA/Idoso
    const msg = document.getElementById('user-greeting');
    if (neuro === 'autismo') {
        msg.innerText = "Olá! Aqui está sua rotina visual e organizada.";
    } else if (userType === 'idoso') {
        msg.innerText = "Bom dia! Veja seus cuidados para hoje:";
        document.body.style.fontSize = "1.3rem"; // Letras Maiores
    }
}
