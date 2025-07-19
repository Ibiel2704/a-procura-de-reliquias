// Estado do jogo
let gameState = {
    currentScreen: 'intro',
    currentLevel: 1,
    score: 0,
    answeredDiscoveries: new Set(),
    correctDiscoveries: new Set(),
    showGlossary: false,
    showMedal: false,
    showGiftBox: false,
    currentFossilIndex: 0,
    incorrectAnswers: 0,
    showMedalButton: false
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
                description: "Este fragmento de osso fossilizado pertenceu a um dinossauro ceratopsiano que viveu no período Cretáceo. É um somatofóssil porque é uma parte real do corpo do animal que foi preservada através do processo de fossilização. Os ossos nos fornecem informações sobre a anatomia, tamanho e estrutura desses gigantes pré-históricos.",
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
                image: "assets/mumia.jpg",
                type: "paleontologia",
                subtype: "somatofossil",
                description: "Este mamute lanoso foi incrivelmente preservado no permafrost (solo permanentemente congelado) da Sibéria. É um somatofóssil excepcional porque manteve não apenas os ossos, mas também pele, pelos e até órgãos internos. Essa preservação extraordinária nos oferece insights únicos sobre a vida na Era do Gelo e a anatomia completa desses gigantes extintos.",
                explanation: "O mamute é classificado como PALEONTOLOGIA porque estuda vida antiga (mamutes extintos) e como SOMATOFÓSSIL porque são restos reais do corpo do animal."
            },
            {
                id: 8,
                name: "Trilobita Completo",
                image: "assets/trilobita_novo.png",
                type: "paleontologia",
                subtype: "somatofossil",
                description: "Este fóssil de trilobita está excepcionalmente bem preservado, mostrando detalhes de sua estrutura corporal segmentada. Os trilobitas foram artrópodes marinhos que viveram por mais de 270 milhões de anos. É um somatofóssil porque preserva o corpo real do animal, revelando sua anatomia complexa, incluindo olhos compostos e apêndices.",
                explanation: "O trilobita é classificado como PALEONTOLOGIA porque estuda vida antiga (artrópodes extintos) e como SOMATOFÓSSIL porque é o corpo real fossilizado do organismo."
            },
            {
                id: 9,
                name: "Vestígios de Antiga Civilização",
                image: "assets/vestigios_antigos.png",
                type: "arqueologia",
                subtype: null,
                description: "Estas marcas e estruturas foram deixadas por uma civilização antiga, indicando sua presença e atividades na região. Podem incluir fundações de construções, canais de irrigação, ou marcas de ferramentas. São evidências arqueológicas porque documentam a vida e as tecnologias desenvolvidas por sociedades humanas do passado.",
                explanation: "Os vestígios são classificados como ARQUEOLOGIA porque são evidências de atividades humanas antigas, não de organismos pré-históricos."
            },
            {
                id: 10,
                name: "Coprólito de Dinossauro",
                image: "assets/coprolito.png",
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
    "assets/mapa_dinossauros_brasileiros.png",
    "assets/staurikosaurus_pricei.png",
    "assets/buriolestes_schultzi.png",
    "assets/ubirajara_jubatus.png",
    "assets/oxalala_quilombensis.png",
    "assets/ibiranja_parva.png",
    "assets/berthasaura_leopoldinae.png",
    "assets/uberabatitan_ribeiroi.png"
];

// Imagens das medalhas
const medalImages = {
    bronze: "assets/medalha_bronze.png",
    silver: "assets/medalha_prata.png",
    gold: "assets/medalha_ouro.png"
};

// Inicialização do jogo
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    setupEventListeners();
});

function initializeGame() {
    showScreen('intro');
    updateGameDisplay();
}

function setupEventListeners() {
    // Botão de começar o jogo
    document.getElementById('start-game-btn').addEventListener('click', function() {
        showScreen('game');
        updateGameDisplay();
    });

    // Botão de voltar ao início
    document.getElementById('home-btn').addEventListener('click', function() {
        showScreen('intro');
    });

    // Botão do glossário
    document.getElementById('glossary-btn').addEventListener('click', function() {
        gameState.showGlossary = !gameState.showGlossary;
        updateGameDisplay();
    });

    // Botões de navegação de níveis
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const level = parseInt(this.dataset.level);
            gameState.currentLevel = level;
            updateGameDisplay();
        });
    });

    // Botão receber medalha
    document.getElementById('receive-medal-btn').addEventListener('click', function() {
        showMedal();
    });

    // Botão receber recompensa
    document.getElementById('receive-reward-btn').addEventListener('click', function() {
        hideMedal();
        showGiftBox();
    });

    // Botão próximo fóssil
    document.getElementById('next-fossil-btn').addEventListener('click', function() {
        gameState.currentFossilIndex = (gameState.currentFossilIndex + 1) % brazilianFossils.length;
        updateFossilDisplay();
    });

    // Botão jogar novamente
    document.getElementById('play-again-btn').addEventListener('click', function() {
        resetGame();
    });

    // Modal do quiz
    setupQuizModal();
}

function setupQuizModal() {
    const modal = document.getElementById('quiz-modal');
    const confirmBtn = document.getElementById('confirm-answer-btn');
    const closeBtn = document.getElementById('close-quiz-btn');

    // Botões de opção de tipo
    document.querySelectorAll('.option-btn[data-type]').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove seleção anterior
            document.querySelectorAll('.option-btn[data-type]').forEach(b => b.classList.remove('selected'));
            // Adiciona seleção atual
            this.classList.add('selected');
            
            const selectedType = this.dataset.type;
            const subtypeQuestion = document.getElementById('subtype-question');
            
            if (selectedType === 'paleontologia') {
                subtypeQuestion.classList.remove('hidden');
            } else {
                subtypeQuestion.classList.add('hidden');
                // Remove seleção de subtipo
                document.querySelectorAll('.option-btn[data-subtype]').forEach(b => b.classList.remove('selected'));
            }
            
            updateConfirmButton();
        });
    });

    // Botões de opção de subtipo
    document.querySelectorAll('.option-btn[data-subtype]').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove seleção anterior
            document.querySelectorAll('.option-btn[data-subtype]').forEach(b => b.classList.remove('selected'));
            // Adiciona seleção atual
            this.classList.add('selected');
            
            updateConfirmButton();
        });
    });

    // Botão confirmar
    confirmBtn.addEventListener('click', function() {
        submitQuizAnswer();
    });

    // Botão fechar
    closeBtn.addEventListener('click', function() {
        hideQuizModal();
    });
}

function updateConfirmButton() {
    const selectedType = document.querySelector('.option-btn[data-type].selected');
    const selectedSubtype = document.querySelector('.option-btn[data-subtype].selected');
    const confirmBtn = document.getElementById('confirm-answer-btn');
    
    const canConfirm = selectedType && (selectedType.dataset.type === 'arqueologia' || selectedSubtype);
    confirmBtn.disabled = !canConfirm;
}

function showScreen(screenName) {
    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    
    // Mostra a tela solicitada
    document.getElementById(screenName + '-screen').classList.remove('hidden');
    
    gameState.currentScreen = screenName;
}

function updateGameDisplay() {
    if (gameState.currentScreen !== 'game') return;

    const currentLevelData = levels.find(l => l.id === gameState.currentLevel);
    
    // Atualiza informações do nível
    document.getElementById('current-level-name').textContent = currentLevelData.name;
    document.getElementById('level-description').textContent = currentLevelData.description;
    
    // Atualiza pontuação
    document.getElementById('score').textContent = gameState.score;
    
    // Atualiza barra de progresso
    const scorePercentage = (gameState.score / 100) * 100;
    document.getElementById('progress-fill').style.width = scorePercentage + '%';
    
    // Atualiza navegação de níveis
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.level) === gameState.currentLevel) {
            btn.classList.add('active');
        }
    });
    
    // Atualiza glossário
    const glossaryCard = document.getElementById('glossary-card');
    if (gameState.showGlossary) {
        glossaryCard.classList.remove('hidden');
    } else {
        glossaryCard.classList.add('hidden');
    }
    
    // Atualiza descobertas
    updateDiscoveriesGrid();
    updateDiscoveriesList();
    
    // Verifica se deve mostrar o botão de medalha
    const totalDiscoveries = levels.reduce((acc, level) => acc + level.discoveries.length, 0);
    if (gameState.answeredDiscoveries.size === totalDiscoveries && !gameState.showMedalButton) {
        gameState.showMedalButton = true;
        document.getElementById('medal-button-container').classList.remove('hidden');
    }
}

function updateDiscoveriesGrid() {
    const currentLevelData = levels.find(l => l.id === gameState.currentLevel);
    const grid = document.getElementById('discoveries-grid');
    
    grid.innerHTML = '';
    
    currentLevelData.discoveries.forEach(discovery => {
        const card = createDiscoveryCard(discovery);
        grid.appendChild(card);
    });
}

function createDiscoveryCard(discovery) {
    const card = document.createElement('div');
    card.className = 'discovery-card';
    
    const isAnswered = gameState.answeredDiscoveries.has(discovery.id);
    const isCorrect = gameState.correctDiscoveries.has(discovery.id);
    
    if (isAnswered) {
        card.classList.add('answered');
        card.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
    
    card.innerHTML = `
        <img src="${discovery.image}" alt="${discovery.name}" class="discovery-image">
        <div class="discovery-name">${discovery.name}</div>
        ${isAnswered ? 
            `<div class="discovery-badge ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? 'Descoberto!' : 'Respondido (Incorreto)'}
            </div>` : 
            '<div class="discovery-status">Clique para investigar</div>'
        }
        ${isAnswered ? 
            `<div class="discovery-explanation ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="feedback-header ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✅ Correto!' : '❌ Incorreto'}
                </div>
                <div>${discovery.description}</div>
            </div>` : 
            ''
        }
    `;
    
    if (!isAnswered) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            showQuizModal(discovery);
        });
    }
    
    return card;
}

function updateDiscoveriesList() {
    const list = document.getElementById('discoveries-list');
    const correctDiscoveries = [];
    
    levels.forEach(level => {
        level.discoveries.forEach(discovery => {
            if (gameState.correctDiscoveries.has(discovery.id)) {
                correctDiscoveries.push(discovery);
            }
        });
    });
    
    if (correctDiscoveries.length === 0) {
        list.innerHTML = '<p class="no-discoveries">Nenhuma descoberta correta ainda...</p>';
    } else {
        list.innerHTML = correctDiscoveries.map(discovery => `
            <div class="discovery-item">
                <img src="${discovery.image}" alt="${discovery.name}">
                <span>${discovery.name}</span>
            </div>
        `).join('');
    }
}

function showQuizModal(discovery) {
    const modal = document.getElementById('quiz-modal');
    const quizImage = document.getElementById('quiz-image');
    const quizTitle = document.getElementById('quiz-title');
    const questionsDiv = document.getElementById('quiz-questions');
    const feedbackDiv = document.getElementById('quiz-feedback');
    
    // Configura o modal
    quizImage.src = discovery.image;
    quizTitle.textContent = discovery.name;
    
    // Mostra perguntas, esconde feedback
    questionsDiv.classList.remove('hidden');
    feedbackDiv.classList.add('hidden');
    
    // Reset das seleções
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('subtype-question').classList.add('hidden');
    document.getElementById('confirm-answer-btn').disabled = true;
    
    // Armazena a descoberta atual
    modal.dataset.discoveryId = discovery.id;
    
    modal.classList.remove('hidden');
}

function hideQuizModal() {
    document.getElementById('quiz-modal').classList.add('hidden');
    updateGameDisplay();
}

function submitQuizAnswer() {
    const modal = document.getElementById('quiz-modal');
    const discoveryId = parseInt(modal.dataset.discoveryId);
    const discovery = findDiscoveryById(discoveryId);
    
    const selectedType = document.querySelector('.option-btn[data-type].selected').dataset.type;
    const selectedSubtypeBtn = document.querySelector('.option-btn[data-subtype].selected');
    const selectedSubtype = selectedSubtypeBtn ? selectedSubtypeBtn.dataset.subtype : null;
    
    const isCorrect = checkAnswer(discovery, selectedType, selectedSubtype);
    
    // Atualiza estado do jogo
    gameState.answeredDiscoveries.add(discoveryId);
    if (isCorrect) {
        gameState.correctDiscoveries.add(discoveryId);
        gameState.score += 10;
    } else {
        gameState.incorrectAnswers++;
    }
    
    // Mostra feedback
    showQuizFeedback(discovery, isCorrect);
}

function checkAnswer(discovery, selectedType, selectedSubtype) {
    return discovery.type === selectedType && 
           (discovery.type === 'arqueologia' || discovery.subtype === selectedSubtype);
}

function showQuizFeedback(discovery, isCorrect) {
    const questionsDiv = document.getElementById('quiz-questions');
    const feedbackDiv = document.getElementById('quiz-feedback');
    const feedbackMessage = document.getElementById('feedback-message');
    const feedbackDescription = document.getElementById('feedback-description');
    
    // Esconde perguntas, mostra feedback
    questionsDiv.classList.add('hidden');
    feedbackDiv.classList.remove('hidden');
    
    // Configura feedback
    feedbackMessage.className = `feedback-message ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackMessage.textContent = isCorrect ? 
        `✅ Correto! ${discovery.explanation}` : 
        `❌ Incorreto. ${discovery.explanation}`;
    
    feedbackDescription.textContent = discovery.description;
}

function findDiscoveryById(id) {
    for (const level of levels) {
        for (const discovery of level.discoveries) {
            if (discovery.id === id) {
                return discovery;
            }
        }
    }
    return null;
}

function showMedal() {
    const overlay = document.getElementById('medal-overlay');
    const medalImage = document.getElementById('medal-image');
    const medalText = document.getElementById('medal-text');
    const finalScore = document.getElementById('final-score');
    
    let medalSrc, medalTextContent;
    
    if (gameState.score >= 80) {
        medalSrc = medalImages.gold;
        medalTextContent = "Explorador Supremo do Passado!";
    } else if (gameState.score >= 40) {
        medalSrc = medalImages.silver;
        medalTextContent = "Você já é um bom explorador!";
    } else {
        medalSrc = medalImages.bronze;
        medalTextContent = "Você começou bem. Continue explorando!";
    }
    
    medalImage.src = medalSrc;
    medalText.textContent = medalTextContent;
    finalScore.textContent = `Sua pontuação final: ${gameState.score} pontos`;
    
    overlay.classList.remove('hidden');
}

function hideMedal() {
    document.getElementById('medal-overlay').classList.add('hidden');
}

function showGiftBox() {
    const overlay = document.getElementById('gift-overlay');
    gameState.currentFossilIndex = 0;
    updateFossilDisplay();
    overlay.classList.remove('hidden');
}

function updateFossilDisplay() {
    const fossilImage = document.getElementById('fossil-image');
    fossilImage.src = brazilianFossils[gameState.currentFossilIndex];
}

function resetGame() {
    gameState = {
        currentScreen: 'intro',
        currentLevel: 1,
        score: 0,
        answeredDiscoveries: new Set(),
        correctDiscoveries: new Set(),
        showGlossary: false,
        showMedal: false,
        showGiftBox: false,
        currentFossilIndex: 0,
        incorrectAnswers: 0,
        showMedalButton: false
    };
    
    // Esconde overlays
    document.getElementById('medal-overlay').classList.add('hidden');
    document.getElementById('gift-overlay').classList.add('hidden');
    document.getElementById('medal-button-container').classList.add('hidden');
    
    showScreen('intro');
    updateGameDisplay();
}

