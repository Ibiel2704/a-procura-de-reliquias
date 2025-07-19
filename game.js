// Estado do jogo
let gameState = {
    currentLevel: 1,
    score: 0,
    answeredDiscoveries: new Set(),
    correctDiscoveries: new Set(),
    incorrectAnswers: 0,
    showGlossary: false,
    currentFossilIndex: 0
};

// Dados dos níveis
const levels = [
    {
        id: 1,
        name: "Fase 01",
        description: "Explore o famoso Vale dos Dinossauros em Sousa-PB",
        discoveries: [
            {
                id: 1,
                name: "Pegadas de Dinossauro",
                image: "assets/pegadas-dinossauro.jpg",
                type: "paleontologia",
                subtype: "icnofossil",
                description: "Estas pegadas fossilizadas de dinossauros terópodes foram encontradas no Vale dos Dinossauros em Sousa-PB. São icnofósseis porque representam vestígios da atividade do animal (suas pegadas), não partes do corpo. Elas nos contam sobre o comportamento, tamanho e velocidade dos dinossauros que viveram há milhões de anos.",
                explanation: "As pegadas são classificadas como PALEONTOLOGIA porque estudam vida antiga (dinossauros) e como ICNOFÓSSIL porque são vestígios de atividade, não restos corporais."
            },
            {
                id: 2,
                name: "Osso de Dinossauro",
                image: "assets/osso-dinossauro.jpg",
                type: "paleontologia",
                subtype: "somatofossil",
                description: "Este fragmento de osso fossilizado pertenceu a um dinossauro saurópode que viveu no período Cretáceo. É um somatofóssil porque é uma parte real do corpo do animal que foi preservada através do processo de fossilização. Os ossos nos fornecem informações sobre a anatomia, tamanho e estrutura desses gigantes pré-históricos.",
                explanation: "O osso é classificado como PALEONTOLOGIA porque estuda vida antiga (dinossauros) e como SOMATOFÓSSIL porque é uma parte real do corpo do organismo."
            },
            {
                id: 3,
                name: "Folha Fossilizada",
                image: "assets/folha-fossilizada.jpg",
                type: "paleontologia",
                subtype: "somatofossil",
                description: "Esta folha de planta foi fossilizada durante o período Cretáceo, preservando detalhes de sua estrutura original. É um somatofóssil porque representa uma parte real da planta. Folhas fossilizadas nos ajudam a entender o clima e o ambiente que existiam no passado, mostrando que tipos de plantas cresciam na região.",
                explanation: "A folha é classificada como PALEONTOLOGIA porque estuda vida antiga (plantas) e como SOMATOFÓSSIL porque é uma parte real do organismo vegetal."
            }
        ]
    },
    {
        id: 2,
        name: "Fase 02",
        description: "Descubra a coexistência única de registros paleontológicos e arqueológicos",
        discoveries: [
            {
                id: 4,
                name: "Arte Rupestre",
                image: "assets/arte-rupestre.jpg",
                type: "arqueologia",
                subtype: null,
                description: "Estas pinturas rupestres foram criadas por povos indígenas há milhares de anos. Representam animais, pessoas e símbolos importantes para essas culturas. São vestígios arqueológicos porque foram produzidos por seres humanos e nos contam sobre suas crenças, vida cotidiana e relação com o ambiente.",
                explanation: "A arte rupestre é classificada como ARQUEOLOGIA porque estuda vestígios deixados por sociedades humanas antigas, não por organismos pré-históricos."
            },
            {
                id: 5,
                name: "Rastro de Dinossauro",
                image: "assets/rastro-dinossauro.jpg",
                type: "paleontologia",
                subtype: "icnofossil",
                description: "Este rastro fossilizado foi deixado por um dinossauro ornitópode que caminhava pela região há milhões de anos. É um icnofóssil porque mostra evidências da atividade do animal, não partes de seu corpo. Os rastros nos revelam informações sobre o comportamento, velocidade e modo de vida desses dinossauros herbívoros.",
                explanation: "O rastro é classificado como PALEONTOLOGIA porque estuda vida antiga (dinossauros) e como ICNOFÓSSIL porque é um vestígio de atividade, não uma parte corporal."
            },
            {
                id: 6,
                name: "Ferramenta de Pedra",
                image: "assets/ferramenta-pedra.jpg",
                type: "arqueologia",
                subtype: null,
                description: "Este instrumento de pedra lascada foi confeccionado e usado por povos antigos para cortar, raspar e processar alimentos. É um artefato arqueológico porque foi criado pela inteligência e habilidade humana. Essas ferramentas nos mostram como nossos ancestrais se adaptavam ao ambiente e desenvolviam tecnologias para sobreviver.",
                explanation: "A ferramenta é classificada como ARQUEOLOGIA porque é um artefato criado por seres humanos, estudado para entender sociedades antigas."
            }
        ]
    },
    {
        id: 3,
        name: "Fase Final",
        description: "Descobertas raras e fascinantes que desafiam sua classificação!",
        discoveries: [
            {
                id: 7,
                name: "Mamute Preservado no Gelo",
                image: "assets/Gemini_Generated_Image_uubjmyuubjmyuubj.png",
                type: "paleontologia",
                subtype: "somatofossil",
                description: "Este mamute lanoso foi incrivelmente preservado no permafrost (solo permanentemente congelado) da Sibéria. É um somatofóssil excepcional porque manteve não apenas os ossos, mas também pele, pelos e até órgãos internos. Essa preservação extraordinária nos oferece insights únicos sobre a vida na Era do Gelo e a anatomia completa desses gigantes extintos.",
                explanation: "O mamute é classificado como PALEONTOLOGIA porque estuda vida antiga (mamutes extintos) e como SOMATOFÓSSIL porque são restos reais do corpo do animal."
            },
            {
                id: 8,
                name: "Trilobita Completo",
                image: "assets/Gemini_Generated_Image_uubjmyuubjmyuubj(1).png",
                type: "paleontologia",
                subtype: "somatofossil",
                description: "Este fóssil de trilobita está excepcionalmente bem preservado, mostrando detalhes de sua estrutura corporal segmentada. Os trilobitas foram artrópodes marinhos que viveram por mais de 270 milhões de anos. É um somatofóssil porque preserva o corpo real do animal, revelando sua anatomia complexa, incluindo olhos compostos e apêndices.",
                explanation: "O trilobita é classificado como PALEONTOLOGIA porque estuda vida antiga (artrópodes extintos) e como SOMATOFÓSSIL porque é o corpo real fossilizado do organismo."
            },
            {
                id: 9,
                name: "Vestígios de Antiga Civilização",
                image: "assets/Gemini_Generated_Image_uubjmyuubjmyuubj(2).png",
                type: "arqueologia",
                subtype: null,
                description: "Estas marcas e estruturas foram deixadas por uma civilização antiga, indicando sua presença e atividades na região. Podem incluir fundações de construções, canais de irrigação, ou marcas de ferramentas. São evidências arqueológicas porque documentam a vida e as tecnologias desenvolvidas por sociedades humanas do passado.",
                explanation: "Os vestígios são classificados como ARQUEOLOGIA porque são evidências de atividades humanas antigas, não de organismos pré-históricos."
            },
            {
                id: 10,
                name: "Coprólito de Dinossauro",
                image: "assets/image.png",
                type: "paleontologia",
                subtype: "icnofossil",
                description: "Este coprólito (fezes fossilizadas) de dinossauro é um tipo fascinante de icnofóssil. Embora possa parecer pouco glamoroso, os coprólitos são extremamente valiosos cientificamente porque preservam informações sobre a dieta, digestão e ecologia dos dinossauros. Podem conter restos de plantas, ossos pequenos ou parasitas, revelando o que esses animais comiam.",
                explanation: "O coprólito é classificado como PALEONTOLOGIA porque estuda vida antiga (dinossauros) e como ICNOFÓSSIL porque é um vestígio de atividade biológica (digestão), não uma parte corporal."
            }
        ]
    }
];

// Imagens dos fósseis brasileiros
const brazilianFossils = [
    "assets/Capturadetela2025-07-07222605.png",
    "assets/Capturadetela2025-07-07222619.png",
    "assets/Capturadetela2025-07-07222631.png",
    "assets/Capturadetela2025-07-07222643.png",
    "assets/Capturadetela2025-07-07223105.png",
    "assets/Capturadetela2025-07-07223112.png",
    "assets/Capturadetela2025-07-07223127.png",
    "assets/Capturadetela2025-07-07223144.png"
];

// Imagens das medalhas
const medalImages = {
    bronze: "assets/medalha_bronze.png",
    silver: "assets/medalha_prata.png",
    gold: "assets/medalha_ouro.png"
};

// Funções principais
function startGame() {
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    updateGameDisplay();
}

function goToIntro() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('intro-screen').classList.remove('hidden');
}

function toggleGlossary() {
    gameState.showGlossary = !gameState.showGlossary;
    const glossaryCard = document.getElementById('glossary-card');
    if (gameState.showGlossary) {
        glossaryCard.classList.remove('hidden');
    } else {
        glossaryCard.classList.add('hidden');
    }
}

function changeLevel(levelId) {
    gameState.currentLevel = levelId;
    updateGameDisplay();
    updateLevelNavigation();
}

function updateGameDisplay() {
    const currentLevelData = levels.find(l => l.id === gameState.currentLevel);
    
    // Atualizar informações do header
    document.getElementById('current-level-name').textContent = currentLevelData.name;
    document.getElementById('level-description').textContent = currentLevelData.description;
    document.getElementById('score').textContent = gameState.score;
    
    // Atualizar barra de progresso
    const scorePercentage = (gameState.score / 100) * 100;
    document.getElementById('progress-fill').style.width = scorePercentage + '%';
    
    // Verificar se deve mostrar o botão de medalha
    const totalDiscoveries = levels.reduce((acc, level) => acc + level.discoveries.length, 0);
    if (gameState.answeredDiscoveries.size === totalDiscoveries) {
        document.getElementById('medal-button-container').classList.remove('hidden');
    }
    
    // Atualizar descobertas
    updateDiscoveriesGrid(currentLevelData);
    updateDiscoveriesList();
}

function updateDiscoveriesGrid(levelData) {
    const grid = document.getElementById('discoveries-grid');
    grid.innerHTML = '';
    
    levelData.discoveries.forEach(discovery => {
        const card = createDiscoveryCard(discovery);
        grid.appendChild(card);
    });
}

function createDiscoveryCard(discovery) {
    const card = document.createElement('div');
    card.className = 'discovery-card';
    card.id = `discovery-${discovery.id}`;
    
    const isAnswered = gameState.answeredDiscoveries.has(discovery.id);
    const isCorrect = gameState.correctDiscoveries.has(discovery.id);
    
    if (isAnswered) {
        card.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
    
    card.innerHTML = `
        <img src="${discovery.image}" alt="${discovery.name}" class="discovery-image">
        <div class="discovery-name">${discovery.name}</div>
        <div class="discovery-status">
            ${isAnswered ? 
                (isCorrect ? 'Descoberto!' : 'Respondido (Incorreto)') : 
                'Clique para investigar'
            }
        </div>
        ${isAnswered ? createInfoText(discovery, isCorrect) : ''}
    `;
    
    if (!isAnswered) {
        card.addEventListener('click', () => openQuiz(discovery));
    }
    
    return card;
}

function createInfoText(discovery, isCorrect) {
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const feedbackText = isCorrect ? '✅ Correto!' : '❌ Incorreto';
    
    return `
        <div class="feedback ${feedbackClass}" style="margin-top: 15px;">
            <p style="font-weight: bold; margin-bottom: 10px;">${feedbackText}</p>
            <p style="font-size: 0.9rem;">${discovery.description}</p>
        </div>
    `;
}

function openQuiz(discovery) {
    const card = document.getElementById(`discovery-${discovery.id}`);
    card.classList.add('active');
    
    const quizHtml = `
        <img src="${discovery.image}" alt="${discovery.name}" class="discovery-image">
        <div class="discovery-name">${discovery.name}</div>
        <div class="quiz-container">
            <p style="font-weight: 600; margin-bottom: 10px;">Este vestígio pertence a:</p>
            <div class="quiz-options">
                <div class="quiz-btn" onclick="selectType('paleontologia', ${discovery.id})">Paleontologia</div>
                <div class="quiz-btn" onclick="selectType('arqueologia', ${discovery.id})">Arqueologia</div>
            </div>
            <div id="subtype-${discovery.id}" class="hidden">
                <p style="font-weight: 600; margin: 15px 0 10px 0;">Tipo de fóssil:</p>
                <div class="quiz-options">
                    <div class="quiz-btn" onclick="selectSubtype('somatofossil', ${discovery.id})">Somatofóssil</div>
                    <div class="quiz-btn" onclick="selectSubtype('icnofossil', ${discovery.id})">Icnofóssil</div>
                </div>
            </div>
            <button class="btn" onclick="submitAnswer(${discovery.id})" id="submit-${discovery.id}" disabled style="width: 100%; margin-top: 15px; opacity: 0.5;">
                Confirmar
            </button>
        </div>
    `;
    
    card.innerHTML = quizHtml;
    card.dataset.selectedType = '';
    card.dataset.selectedSubtype = '';
}

function selectType(type, discoveryId) {
    const card = document.getElementById(`discovery-${discoveryId}`);
    card.dataset.selectedType = type;
    
    // Atualizar visual dos botões
    const typeButtons = card.querySelectorAll('.quiz-options:first-of-type .quiz-btn');
    typeButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Encontrar o botão clicado e marcá-lo como selecionado
    typeButtons.forEach(btn => {
        if (btn.textContent.trim() === (type === 'paleontologia' ? 'Paleontologia' : 'Arqueologia')) {
            btn.classList.add('selected');
        }
    });
    
    // Mostrar/esconder opções de subtipo
    const subtypeDiv = document.getElementById(`subtype-${discoveryId}`);
    if (type === 'paleontologia') {
        subtypeDiv.classList.remove('hidden');
    } else {
        subtypeDiv.classList.add('hidden');
        card.dataset.selectedSubtype = '';
        updateSubmitButton(discoveryId);
    }
    
    updateSubmitButton(discoveryId);
}

function selectSubtype(subtype, discoveryId) {
    const card = document.getElementById(`discovery-${discoveryId}`);
    card.dataset.selectedSubtype = subtype;
    
    // Atualizar visual dos botões
    const subtypeButtons = card.querySelectorAll('.quiz-options:last-of-type .quiz-btn');
    subtypeButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Encontrar o botão clicado e marcá-lo como selecionado
    subtypeButtons.forEach(btn => {
        if (btn.textContent.trim() === (subtype === 'somatofossil' ? 'Somatofóssil' : 'Icnofóssil')) {
            btn.classList.add('selected');
        }
    });
    
    updateSubmitButton(discoveryId);
}

function updateSubmitButton(discoveryId) {
    const card = document.getElementById(`discovery-${discoveryId}`);
    const submitBtn = document.getElementById(`submit-${discoveryId}`);
    const selectedType = card.dataset.selectedType;
    const selectedSubtype = card.dataset.selectedSubtype;
    
    const canSubmit = selectedType && (selectedType === 'arqueologia' || selectedSubtype);
    
    submitBtn.disabled = !canSubmit;
    submitBtn.style.opacity = canSubmit ? '1' : '0.5';
}

function submitAnswer(discoveryId) {
    const discovery = levels.flatMap(l => l.discoveries).find(d => d.id === discoveryId);
    const card = document.getElementById(`discovery-${discoveryId}`);
    const selectedType = card.dataset.selectedType;
    const selectedSubtype = card.dataset.selectedSubtype;
    
    const isCorrect = checkAnswer(discovery, selectedType, selectedSubtype);
    
    // Atualizar estado do jogo
    gameState.answeredDiscoveries.add(discoveryId);
    
    if (isCorrect) {
        gameState.correctDiscoveries.add(discoveryId);
        gameState.score += 10;
        card.classList.remove('active');
        card.classList.add('correct');
    } else {
        gameState.incorrectAnswers++;
        card.classList.remove('active');
        card.classList.add('incorrect');
    }
    
    // Mostrar feedback
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const feedbackText = isCorrect ? '✅ Correto!' : '❌ Incorreto';
    
    card.innerHTML = `
        <img src="${discovery.image}" alt="${discovery.name}" class="discovery-image">
        <div class="discovery-name">${discovery.name}</div>
        <div class="discovery-status">
            ${isCorrect ? 'Descoberto!' : 'Respondido (Incorreto)'}
        </div>
        <div class="feedback ${feedbackClass}" style="margin-top: 15px;">
            <p style="font-weight: bold; margin-bottom: 10px;">${feedbackText}</p>
            <p style="font-size: 0.9rem; margin-bottom: 10px;">${discovery.explanation}</p>
            <p style="font-size: 0.9rem;">${discovery.description}</p>
        </div>
    `;
    
    // Atualizar display do jogo
    updateGameDisplay();
}

function checkAnswer(discovery, selectedType, selectedSubtype) {
    return discovery.type === selectedType && 
           (discovery.type === 'arqueologia' || discovery.subtype === selectedSubtype);
}

function updateDiscoveriesList() {
    const list = document.getElementById('discoveries-list');
    const correctDiscoveries = levels.flatMap(l => l.discoveries)
        .filter(d => gameState.correctDiscoveries.has(d.id));
    
    if (correctDiscoveries.length === 0) {
        list.innerHTML = '<p style="color: #6b7280; font-size: 0.9rem;">Nenhuma descoberta correta ainda...</p>';
    } else {
        list.innerHTML = correctDiscoveries.map(discovery => `
            <div class="discovery-item">
                <img src="${discovery.image}" alt="${discovery.name}" class="discovery-thumb">
                <span>${discovery.name}</span>
            </div>
        `).join('');
    }
}

function updateLevelNavigation() {
    const buttons = document.querySelectorAll('.level-btn');
    buttons.forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === gameState.currentLevel);
    });
}

function showMedal() {
    let medalImage, medalText;
    
    if (gameState.score >= 80) {
        medalImage = medalImages.gold;
        medalText = "Explorador Supremo do Passado!";
    } else if (gameState.score >= 40) {
        medalImage = medalImages.silver;
        medalText = "Você já é um bom explorador!";
    } else {
        medalImage = medalImages.bronze;
        medalText = "Você começou bem. Continue explorando!";
    }
    
    document.getElementById('medal-image').src = medalImage;
    document.getElementById('medal-text').textContent = medalText;
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('medal-overlay').classList.remove('hidden');
}

function showGiftBox() {
    document.getElementById('medal-overlay').classList.add('hidden');
    document.getElementById('fossil-image').src = brazilianFossils[gameState.currentFossilIndex];
    document.getElementById('gift-overlay').classList.remove('hidden');
}

function nextFossil() {
    gameState.currentFossilIndex = (gameState.currentFossilIndex + 1) % brazilianFossils.length;
    document.getElementById('fossil-image').src = brazilianFossils[gameState.currentFossilIndex];
}

function restartGame() {
    // Resetar estado do jogo
    gameState = {
        currentLevel: 1,
        score: 0,
        answeredDiscoveries: new Set(),
        correctDiscoveries: new Set(),
        incorrectAnswers: 0,
        showGlossary: false,
        currentFossilIndex: 0
    };
    
    // Esconder modais
    document.getElementById('gift-overlay').classList.add('hidden');
    document.getElementById('medal-overlay').classList.add('hidden');
    document.getElementById('medal-button-container').classList.add('hidden');
    
    // Voltar para a tela de introdução
    goToIntro();
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    updateLevelNavigation();
});

