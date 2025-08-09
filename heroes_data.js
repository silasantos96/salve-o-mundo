const heroesData = [
  {
    name: 'Sabat',
    hp: 15,
    maxHp: 15,
    ability: 'telepathy',
    abilityDescription: 'Telepatia: Comunica-se e move objetos com a mente.',
    attacks: [
      { diceRoll: 1, name: 'Amplificação de Poder', description: 'Utiliza sua telepatia para dobrar as habilidades de um aliado, tornando-o mais forte e eficiente em combate na rodada.' },
      { diceRoll: 2, name: 'Golpe Telecinético', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 3, name: 'Onda de Choque Mental', description: 'Causa 1 ponto de dano a todos os vilões no mesmo local.' },
      { diceRoll: 4, name: 'Ataque Mental Preciso', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 5, name: 'Barreira Psíquica', description: 'Cria um escudo mental ao seu redor, protegendo-se e aos seus aliados de ataques na rodada.' },
      { diceRoll: 6, name: 'Manipulação Mental', description: 'Controla a mente de um vilão, fazendo com que ele ataque ele mesmo.' }
    ]
  },
  {
    name: 'Zephyra',
    hp: 15,
    maxHp: 15,
    ability: 'arcane_magic',
    abilityDescription: 'Magia Arcana: Lança um feitiço adicional com Dano 1 ao final de cada rodada.',
    attacks: [
      { diceRoll: 1, name: 'Escudo Mágico', description: 'Protege um herói aliado de um ataque inimigo.' },
      { diceRoll: 2, name: 'Tempestade de Gelo', description: 'Causa 2 pontos de dano em todos os vilões.' },
      { diceRoll: 3, name: 'Raio de Fogo', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 4, name: 'Cura Mágica', description: 'Recupera 3 pontos de vida de um herói aliado.' },
      { diceRoll: 5, name: 'Teleporte', description: 'Zephyra pode se mover instantaneamente para qualquer local do jogo.' },
      { diceRoll: 6, name: 'Encantamento', description: 'Zephyra pode controlar a mente de um vilão e forçá-lo a atacar seus aliados na rodada. Os heróis não recebem danos.' }
    ]
  },
  {
    name: 'Triger',
    hp: 13,
    maxHp: 13,
    ability: 'wild_fury',
    abilityDescription: 'Fúria Selvagem: Quando a vida de Triger chega a 6 pontos, ele entra em um estado de fúria, ganhando +2 em seus ataques.',
    attacks: [
      { diceRoll: 1, name: 'Investida Furiosa', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Garras Afiadas', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 3, name: 'Salto Ágil', description: 'Triger salta em direção ao vilão, evitando ataques e causando 1 ponto de dano.' },
      { diceRoll: 4, name: 'Rugido Atordoante', description: 'Causa 1 ponto de dano e o vilão perde o próximo ataque.' },
      { diceRoll: 5, name: 'Camuflagem Felina', description: 'Triger se camufla nas sombras, ficando invisível para o vilão na próxima rodada.' },
      { diceRoll: 6, name: 'Ataque Duplo', description: 'Causa 4 pontos de dano.' }
    ]
  },
  {
    name: 'Ártemis Dourada',
    hp: 14,
    maxHp: 14,
    ability: 'golden_warrior',
    abilityDescription: 'Guerreira grega habilidosa com arco e flecha, ágil e estrategista.',
    attacks: [
      { diceRoll: 1, name: 'Flecha Perfurante', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Escudo Divino', description: 'Recupera 2 pontos de vida.' },
      { diceRoll: 3, name: 'Investida Furiosa', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 4, name: 'Redemoinho de Flechas', description: 'Causa 2 pontos de dano em todos os inimigos em sua localização.' },
      { diceRoll: 5, name: 'Salto Aéreo', description: 'Ártemis salta alto no ar e cai com toda a força sobre o inimigo, causando 3 pontos de dano.' },
      { diceRoll: 6, name: 'Invocação de Lobos', description: 'Convoca uma matilha de lobos celestiais para atacar os inimigos, causando 2 pontos de dano em todos eles.' }
    ]
  },
  {
    name: 'Kriegen',
    hp: 14,
    maxHp: 14,
    ability: 'untamed_fury',
    abilityDescription: 'Fúria Indomável: Quando estiver com 7 pontos de vida ou menos, ele ganha um ponto de dano extra em todos os seus ataques.',
    attacks: [
      { diceRoll: 1, name: 'Golpe Poderoso', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Investida Feroz', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 3, name: 'Ataque Duplo', description: 'Kriegen ataca um inimigo duas vezes seguidas com seus punhos, causando 1 ponto de dano em cada ataque.' },
      { diceRoll: 4, name: 'Arremesso', description: 'Kriegen pega um objeto pesado e o arremessa com toda a sua força em um inimigo, causando 3 pontos de dano.' },
      { diceRoll: 5, name: 'Salto Explosivo', description: 'Causa 2 pontos de dano em todos inimigos.' },
      { diceRoll: 6, name: 'Grito de Guerra', description: 'Ganha um ponto de vida e um ponto de dano extra em seu próximo ataque.' }
    ]
  },
  {
    name: 'Leep',
    hp: 12,
    maxHp: 12,
    ability: 'teleportation',
    abilityDescription: 'Teletransporte: Move-se rapidamente pelo campo de batalha e desvia de ataques.',
    attacks: [
      { diceRoll: 1, name: 'Teleporte Tático', description: 'Se teleporta para a zona de recuo, evitando o ataque.' },
      { diceRoll: 2, name: 'Golpe Teleportado', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 3, name: 'Barreira Teleportada', description: 'Se teleporta para criar uma barreira temporária que bloqueia os ataques inimigos.' },
      { diceRoll: 4, name: 'Ataque Furtivo', description: 'Leep se teleporta para as sombras e surpreende seus inimigos com um ataque furtivo, causando 2 pontos de dano.' },
      { diceRoll: 5, name: 'Teleporte de Suporte', description: 'Recupera 2 pontos de vida de um aliado.' },
      { diceRoll: 6, name: 'Teleporte em Massa', description: 'Leep se teleporta junto com seus aliados para a zona de recuo, evitando o ataque.' }
    ]
  },
  {
    name: 'Major Duk',
    hp: 13,
    maxHp: 13,
    ability: 'super_strength',
    abilityDescription: 'Super Força: Guerreiro nato com habilidades de combate excepcionais e táticas militares.',
    attacks: [
      { diceRoll: 1, name: 'Punho Poderoso', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Investida Heroica', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 3, name: 'Disparo de Arma de Fogo', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 4, name: 'Arremesso de Granada', description: 'Dano de 3 pontos de vida em todos os vilões do local.' },
      { diceRoll: 5, name: 'Grito de Guerra', description: 'Dano de 1 ponto de vida em todos os vilões do local e aumenta a defesa de todos os heróis em 1 ponto.' },
      { diceRoll: 6, name: 'Ataque Relâmpago', description: 'Dano de 4 pontos de vida, mas Major Duk recebe 2 pontos de dano de volta.' }
    ]
  },
  {
    name: 'Eletron',
    hp: 13,
    maxHp: 13,
    ability: 'electricity_control',
    abilityDescription: 'Controle de Eletricidade: Controla eletricidade para o bem, protegido por um traje especial.',
    attacks: [
      { diceRoll: 1, name: 'Relâmpago', description: 'Causa 2 pontos de dano em um vilão.' },
      { diceRoll: 2, name: 'Choque Elétrico', description: 'Causa 1 ponto de dano em todos os vilões.' },
      { diceRoll: 3, name: 'Campo Elétrico', description: 'Adiciona 1 ponto de vida a todos os heróis na mesma localidade que ele.' },
      { diceRoll: 4, name: 'Descarga Elétrica', description: 'Causa 3 pontos de dano em um vilão, mas perde 1 ponto de vida no processo.' },
      { diceRoll: 5, name: 'Eletricidade Estática', description: 'Paralisa o ataque do vilão.' },
      { diceRoll: 6, name: 'Carga Total', description: 'Eletron canaliza toda sua energia elétrica em um único ataque, causando 5 pontos de dano em um vilão. Ele perde 2 pontos de vida no processo.' }
    ]
  },
  {
    name: 'Kioni',
    hp: 15,
    maxHp: 15,
    ability: 'fire_sword',
    abilityDescription: 'Espadachim hábil com força e agilidade incomparáveis, possui uma espada de fogo.',
    attacks: [
      { diceRoll: 1, name: 'Golpe Feroz', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 2, name: 'Salto Poderoso', description: 'Dá um salto poderoso, esquivando-se rapidamente de um ataque.' },
      { diceRoll: 3, name: 'Investida Enfurecida', description: 'Desfere um golpe com a espada de fogo que causa 3 pontos de dano.' },
      { diceRoll: 4, name: 'Barreira de Fogo', description: 'Protege de ataques e causa 1 ponto de dano aos inimigos que se aproximarem.' },
      { diceRoll: 5, name: 'Fúria Ardente', description: 'Acende sua espada em chamas e desfere um golpe poderoso que causa 4 pontos de dano.' },
      { diceRoll: 6, name: 'Tempestade de Fogo', description: 'Causa 3 pontos de dano a todos os inimigos.' }
    ]
  },
  {
    name: 'Astrid',
    hp: 15,
    maxHp: 15,
    ability: 'supernova',
    abilityDescription: 'Supernova: Concentra toda sua energia em uma explosão cósmica devastadora que causa 5 pontos de dano em todos os inimigos na localidade. Esta habilidade só pode ser usada uma vez por partida.',
    attacks: [
      { diceRoll: 1, name: 'Raio Cósmico', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Explosão Estelar', description: 'Causa 3 pontos de dano em todos os vilões na mesma localidade que ela.' },
      { diceRoll: 3, name: 'Escudo de Energia', description: 'Protege Astrid de 2 pontos de dano.' },
      { diceRoll: 4, name: 'Teletransporte Cósmico', description: 'Se teletransporta para qualquer localidade do jogo.' },
      { diceRoll: 5, name: 'Campo Gravitacional', description: 'Deixa os vilões atordoados e sem poder atacar na rodada.' },
      { diceRoll: 6, name: 'Implosão Estelar', description: 'Implosão que causa 4 pontos de dano em um vilão escolhido.' }
    ]
  },
  {
    name: 'Ultrasonic',
    hp: 12,
    maxHp: 12,
    ability: 'supersonic_scream',
    abilityDescription: 'Gritos Supersônicos: Emite gritos supersônicos que podem desorientar os vilões.',
    attacks: [
      { diceRoll: 1, name: 'Grito Sônico', description: 'Emite um grito supersônico que pode desorientar o vilão, causando 2 pontos de dano.' },
      { diceRoll: 2, name: 'Ataque Aéreo', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 3, name: 'Tornado Sônico', description: 'Causa 3 pontos de dano em todos os vilões em sua localidade.' },
      { diceRoll: 4, name: 'Soco Sônico', description: 'Causa 2 pontos de dano no vilão.' },
      { diceRoll: 5, name: 'Chute Voador', description: 'Voa em alta velocidade em direção ao vilão, dando um chute poderoso que causa 3 pontos de dano.' },
      { diceRoll: 6, name: 'Rajada Sônica', description: 'Emite uma rajada de som que causa 4 pontos de dano ao vilão.' }
    ]
  },
  {
    name: 'Wolffang',
    hp: 14,
    maxHp: 14,
    ability: 'transformation',
    abilityDescription: 'Transformação: Transforma-se em lobo gigante, ganhando +2 ataque e +2 defesa, mas perde uso de itens (1 vez por partida).',
    attacks: [
      { diceRoll: 1, name: 'Presas Afiadas', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Garras Mortais', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 3, name: 'Uivo Ensurdecedor', description: 'Causa 2 pontos de dano em todos os inimigos na mesma localidade que ele.' },
      { diceRoll: 4, name: 'Investida Poderosa', description: 'Causa 4 pontos de dano.' },
      { diceRoll: 5, name: 'Golpe de Cauda', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 6, name: 'Ataque de Fúria', description: 'Entra em um estado de fúria, atacando todos os inimigos na mesma localidade que ele e causando 3 pontos de dano.' }
    ]
  },
  {
    name: 'Chronos',
    hp: 15,
    maxHp: 15,
    ability: 'time_control',
    abilityDescription: 'Controle do Tempo: Acelera ou retarda o fluxo do tempo para vantagem tática.',
    attacks: [
      { diceRoll: 1, name: 'Ataque básico', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Golpe temporal', description: 'Causa 1 ponto de dano e o vilão perde o ataque na rodada.' },
      { diceRoll: 3, name: 'Rajada temporal', description: 'Causa 2 pontos de dano a todos os vilões do local.' },
      { diceRoll: 4, name: 'Ataque de Paralisia', description: 'Impede o vilão de se mover ou atacar.' },
      { diceRoll: 5, name: 'Paradoxo', description: 'Causa 5 pontos de dano em um vilão, mas Chronos perde 2 pontos de vida como consequência do uso excessivo do poder temporal.' },
      { diceRoll: 6, name: 'Tempestade temporal', description: 'Causa 3 pontos de dano a todos os vilões em um local e os impede de atacar na rodada.' }
    ]
  },
  {
    name: 'Mirage',
    hp: 13,
    maxHp: 13,
    ability: 'illusions',
    abilityDescription: 'Ilusões: Cria ilusões para confundir e desorientar inimigos, desviando atenção.',
    attacks: [
      { diceRoll: 1, name: 'Golpe de sombra', description: 'Crie uma imagem de si mesmo e dá ataque duplo, causando 2 pontos de dano.' },
      { diceRoll: 2, name: 'Rajada sônica', description: 'Emite uma rajada de som de alta frequência que atinge todos os vilões em seu local. Causa 2 pontos de dano.' },
      { diceRoll: 3, name: 'Ilusão de fumaça', description: 'Causa 1 ponto de dano em todos os vilões do local.' },
      { diceRoll: 4, name: 'Reflexos aprimorados', description: 'Mirage escapa do ataque do vilão.' },
      { diceRoll: 5, name: 'Ilusão sonora', description: 'Mirage cria uma ilusão sonora para confundir os vilões em seu local, impossibilitando de atacarem.' },
      { diceRoll: 6, name: 'Desorientação', description: 'Cria ilusões para desorientar os vilões em seu local, causando 4 pontos de dano.' }
    ]
  },
  {
    name: 'Luz',
    hp: 13,
    maxHp: 13,
    ability: 'laser_beams',
    abilityDescription: 'Lasers: Solta lasers pelas mãos, defensora incansável da justiça.',
    attacks: [
      { diceRoll: 1, name: 'Raio de Luz', description: 'Causa 1 ponto de dano.' },
      { diceRoll: 2, name: 'Lâmina de Luz', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 3, name: 'Explosão de Luz', description: 'Emite uma explosão de luz que atinge todos os vilões em seu local, causando 2 pontos de dano em todos os vilões.' },
      { diceRoll: 4, name: 'Escudo de Luz', description: 'Cria um escudo de luz que a protege contra os ataques dos vilões.' },
      { diceRoll: 5, name: 'Raio Cegante', description: 'Emite um raio cegante que afeta a visão dos vilões em seu local, impedindo os ataques.' },
      { diceRoll: 6, name: 'Dispersão de Luz', description: 'Causa 4 pontos de dano.' }
    ]
  },
  {
    name: 'Tecky',
    hp: 14,
    maxHp: 14,
    ability: 'technology_mastery',
    abilityDescription: 'Tecnologia: Cria armas e dispositivos avançados, especialista em combate e manipulação eletrônica.',
    attacks: [
      { diceRoll: 1, name: 'Raio laser', description: 'Causa 1 ponto de dano ao vilão.' },
      { diceRoll: 2, name: 'Campo de força', description: 'Tecky cria um campo de força protetor ao seu redor, que impede que os ataques dos vilões a atinjam na rodada.' },
      { diceRoll: 3, name: 'Granada de pulso', description: 'Causa 2 pontos de dano a todos os vilões do local.' },
      { diceRoll: 4, name: 'Míssil guiado', description: 'Causa 4 pontos de dano ao vilão.' },
      { diceRoll: 5, name: 'Choque elétrico', description: 'Causa 2 pontos de dano e paralisa o vilão na rodada.' },
      { diceRoll: 6, name: 'Escudo de energia', description: 'Tecky cria um escudo de energia que protege todos os heróis do local.' }
    ]
  },
  {
    name: 'Sang',
    hp: 14,
    maxHp: 14,
    ability: 'sand_control',
    abilityDescription: 'Controle de Areia: Molda areia em diversas formas para ataque e defesa.',
    attacks: [
      { diceRoll: 1, name: 'Golpe de areia', description: 'Sang cria um punho de areia e ataca um vilão em seu local. Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Tornado de areia', description: 'Causa 2 pontos de dano em cada vilão do local.' },
      { diceRoll: 3, name: 'Escudo de areia', description: 'Ele não pode atacar neste turno, mas não receberá dano dos vilões.' },
      { diceRoll: 4, name: 'Areia movediça', description: 'O vilão fica preso e não pode atacar.' },
      { diceRoll: 5, name: 'Chuva de areia', description: 'Causa 2 pontos de dano em cada um dos vilões.' },
      { diceRoll: 6, name: 'Vórtice de areia', description: 'Sang cria um vórtice de areia. Causa 3 pontos de dano em cada vilão atingido.' }
    ]
  },
  {
    name: 'Aeris',
    hp: 14,
    maxHp: 14,
    ability: 'weather_control',
    abilityDescription: 'Controle Climático: Cria tempestades, furacões e controla o vento para combater o crime.',
    attacks: [
      { diceRoll: 1, name: 'Furacão', description: 'Causa 1 ponto de dano em todos os vilões do local.' },
      { diceRoll: 2, name: 'Raio', description: 'Aeris convoca um raio para atingir um vilão em seu local, causando 2 pontos de dano.' },
      { diceRoll: 3, name: 'Nevasca', description: 'Aeris cria uma nevasca intensa que causa 1 ponto de dano e diminui a precisão dos ataques dos vilões em seu local. Todos os vilões em seu local perdem 2 pontos de ataque na rodada.' },
      { diceRoll: 4, name: 'Tempestade elétrica', description: 'Causa 2 pontos de dano em cada vilão do local.' },
      { diceRoll: 5, name: 'Tornado', description: 'Causa 3 pontos de dano.' },
      { diceRoll: 6, name: 'Chuva ácida', description: 'Causa 3 pontos de dano em todos os vilões.' }
    ]
  },
  {
    name: 'Bruto',
    hp: 16,
    maxHp: 16,
    ability: 'super_strength_passive',
    abilityDescription: 'Superforça: Bruto recebe menos 1 de ataque do vilão.',
    attacks: [
      { diceRoll: 1, name: 'Soco devastador', description: 'Causa 2 pontos de dano em um vilão em seu local.' },
      { diceRoll: 2, name: 'Pisão sísmico', description: 'Causa um tremor que atinge todos os vilões em seu local. Cada vilão perde 1 ponto de vida.' },
      { diceRoll: 3, name: 'Arremesso de objetos', description: 'Bruto pega um objeto do ambiente e arremessa em um vilão em seu local, causando 2 ponto de dano.' },
      { diceRoll: 4, name: 'Proteção impenetrável', description: 'Bruto pode se proteger de um ataque de um vilão em seu local, impedindo que perca um ponto de vida.' },
      { diceRoll: 5, name: 'Terremoto', description: 'Causa 2 pontos de dano em todos os vilões do local.' },
      { diceRoll: 6, name: 'Agarrão poderoso', description: 'Causa 3 pontos de dano no vilão.' }
    ]
  },
  {
    name: 'Guarani',
    hp: 13,
    maxHp: 13,
    ability: 'indigenous_combat',
    abilityDescription: 'Combate Indígena: Habilidades em combate corpo a corpo e forte conexão com a natureza.',
    attacks: [
      { diceRoll: 1, name: 'Flecha de fogo', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Machado de pedra', description: 'Utiliza seu machado de pedra para atingir um vilão em seu local. Causa 1 ponto de dano.' },
      { diceRoll: 3, name: 'Sopro da floresta', description: 'Sopra um vento forte que atinge todos os vilões em seu local. Causa 2 pontos de dano em cada vilão.' },
      { diceRoll: 4, name: 'Garras de raposa', description: 'Utiliza suas garras afiadas como a de uma raposa para atacar um vilão em seu local. Causa 3 ponto de dano.' },
      { diceRoll: 5, name: 'Lança de madeira', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 6, name: 'Escudo de cipó', description: 'Cria um escudo de cipó que protege todos dos ataques dos vilões na rodada.' }
    ]
  },
  {
    name: 'Flexia',
    hp: 12,
    maxHp: 12,
    ability: 'elasticity',
    abilityDescription: 'Elasticidade: Estica e molda o corpo como borracha, rápida e ágil.',
    attacks: [
      { diceRoll: 1, name: 'Esticar soco', description: 'Estica seus braços para dar um soco em um vilão em seu local. Causa 1 ponto de dano.' },
      { diceRoll: 2, name: 'Chicote elástico', description: 'Cada vilão do local perde 2 ponto de vida.' },
      { diceRoll: 3, name: 'Escudo elástico', description: 'Protege 2 pontos de dano de seus aliados.' },
      { diceRoll: 4, name: 'Corrida elástica', description: 'Estica suas pernas para correr mais rápido e escapar do ataque do vilão.' },
      { diceRoll: 5, name: 'Arremesso elástico', description: 'Estica seus braços para pegar um vilão e arremessá-lo contra a parede. Causa 2 pontos de dano.' },
      { diceRoll: 6, name: 'Punho Elástico', description: 'Estica seu punho em direção ao vilão, causando 2 pontos de dano.' }
    ]
  },
  {
    name: 'Rai',
    hp: 13,
    maxHp: 13,
    ability: 'samurai_skills',
    abilityDescription: 'Habilidades de Samurai: Ágil e excepcional com a espada, derrota grandes ameaças sozinho.',
    attacks: [
      { diceRoll: 1, name: 'Corte relâmpago', description: 'Causa 2 pontos de dano em um vilão em seu local.' },
      { diceRoll: 2, name: 'Golpe mortal', description: 'Causa 3 pontos de dano em um vilão em seu local.' },
      { diceRoll: 3, name: 'Defesa perfeita', description: 'Rai pode prever e bloquear ataques inimigos com perfeição. Ele pode bloqueá-lo sem sofrer nenhum dano.' },
      { diceRoll: 4, name: 'Golpe giratório', description: 'Rai realiza um golpe giratório com sua espada que atinge todos os vilões em seu local. Cada vilão perde 2 pontos de vida.' },
      { diceRoll: 5, name: 'Corte crescente', description: 'Rai realiza um corte em arco com sua espada que atinge um vilão em seu local, causando 3 pontos de dano.' },
      { diceRoll: 6, name: 'Contragolpe', description: 'Rai evita o ataque sem sofrer nenhum dano e contra golpeia o vilão causando 2 pontos de dano.' }
    ]
  },
  {
    name: 'Meta',
    hp: 14,
    maxHp: 14,
    ability: 'magnetic_manipulation',
    abilityDescription: 'Manipulação Magnética: Controla campos magnéticos, metais e cria campos de força.',
    attacks: [
      { diceRoll: 1, name: 'Golpe Magnético', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Onda Magnética', description: 'Cria uma onda magnética que empurra todos os vilões em seu local para trás, causando 1 ponto de dano em cada um.' },
      { diceRoll: 3, name: 'Escudo de Metal', description: 'Protege de 3 pontos de dano do vilão.' },
      { diceRoll: 4, name: 'Lançamento de estilhaços', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 5, name: 'Tempestade Magnética', description: 'Cria uma tempestade magnética que causa 2 pontos de dano em todos os vilões.' },
      { diceRoll: 6, name: 'Imã Poderoso', description: 'Causa 2 pontos de dano em cada vilão e os deixa presos em seu local, impedindo-os de atacar neste turno.' }
    ]
  },
  {
    name: 'Ceres',
    hp: 13,
    maxHp: 13,
    ability: 'plant_manipulation',
    abilityDescription: 'Manipulação de Plantas: Controla a natureza, sente emoções das plantas e conversa com elas.',
    attacks: [
      { diceRoll: 1, name: 'Golpe de Vinha', description: 'Causa 1 ponto de dano.' },
      { diceRoll: 2, name: 'Enredar', description: 'Ceres cria várias vinhas emaranhadas para prender um vilão, impedindo-o de atacar e causando 1 ponto de dano.' },
      { diceRoll: 3, name: 'Florescência', description: 'Causa 2 pontos de dano em todos os vilões em seu local.' },
      { diceRoll: 4, name: 'Raízes Sufocantes', description: 'Ceres faz com que raízes subam do solo e agarrem um vilão, causando 2 pontos de dano.' },
      { diceRoll: 5, name: 'Tempestade Vegetal', description: 'Cria uma tempestade de folhas e galhos causando 2 pontos de dano em todos os vilões do local.' },
      { diceRoll: 6, name: 'Crescimento Acelerado', description: 'Acelera o crescimento das plantas, fazendo com que elas se expandam e esmaguem todos os vilões em seu local, causando 3 pontos de dano.' }
    ]
  },
  {
    name: 'Pixie',
    hp: 13,
    maxHp: 13,
    ability: 'fairy_abilities',
    abilityDescription: 'Habilidades de Fada: Encolhe e voa como inseto, cria ilusões para confundir inimigos.',
    attacks: [
      { diceRoll: 1, name: 'Pó mágico', description: 'Pixie joga um pó brilhante em um vilão. Causa 1 ponto de dano e diminui em 1 ponto o ataque do vilão na rodada.' },
      { diceRoll: 2, name: 'Ataque de fada', description: 'Voa em alta velocidade e ataca um vilão, causando 2 pontos de dano.' },
      { diceRoll: 3, name: 'Frenesi de asas', description: 'Causa 2 pontos de dano em todos os vilões do local.' },
      { diceRoll: 4, name: 'Ilusão', description: 'Cria uma ilusão que confunde um vilão, impedindo-o de atacar.' },
      { diceRoll: 5, name: 'Voo da borboleta', description: 'Pixie voa em círculos em torno de um vilão, criando uma miragem que o distrai. Causa 2 pontos de dano.' },
      { diceRoll: 6, name: 'Raio de luz', description: 'Pixie emite um raio de luz de suas mãos, causando 3 pontos de dano em um vilão em sua área.' }
    ]
  },
  {
    name: 'Arcanix',
    hp: 14,
    maxHp: 14,
    ability: 'elemental_magic',
    abilityDescription: 'Magia Elemental: Domínio sobre magia elemental, cria e controla feitiços.',
    attacks: [
      { diceRoll: 1, name: 'Bola de Fogo', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Escudo Mágico', description: 'Protege de qualquer ataque inimigo.' },
      { diceRoll: 3, name: 'Teleporte', description: 'Teleporta-se para outro local instantaneamente, evitando ataques inimigos.' },
      { diceRoll: 4, name: 'Raio de Gelo', description: 'Dispara um raio de gelo de sua varinha mágica, congelando o vilão, impedindo-o de atacar na rodada.' },
      { diceRoll: 5, name: 'Barreira Elemental', description: 'Cria uma barreira mágica elemental ao redor de um aliado, protegendo-o de ataques inimigos.' },
      { diceRoll: 6, name: 'Transformação em Animal', description: 'Se transforma em um animal causando 3 pontos de dano.' }
    ]
  },
  {
    name: 'Lance',
    hp: 14,
    maxHp: 14,
    ability: 'laser_weapons',
    abilityDescription: 'Armas Laser: Equipado com armas laser avançadas, rápido, ágil e preciso.',
    attacks: [
      { diceRoll: 1, name: 'Disparo de laser simples', description: 'Causa 1 ponto de dano.' },
      { diceRoll: 2, name: 'Modo rajada', description: 'Ativa o modo rajada em suas armas laser, causa 2 pontos de dano.' },
      { diceRoll: 3, name: 'Pulso eletromagnético', description: 'Dispara um pulso eletromagnético, causando 2 pontos de dano a todos os vilões do local.' },
      { diceRoll: 4, name: 'Campo de força', description: 'Ativa seu campo de força avançado, que o protege de danos.' },
      { diceRoll: 5, name: 'Disparo triplo', description: 'Causa 3 pontos de dano ao vilão.' },
      { diceRoll: 6, name: 'Aniquilação', description: 'Carrega um enorme raio laser e dispara contra um único alvo, causando 4 pontos de dano.' }
    ]
  },
  {
    name: 'Luca',
    hp: 14,
    maxHp: 14,
    ability: 'iron_fists',
    abilityDescription: 'Punhos de Ferro: Jovem lutador com punhos de ferro, derrota inimigos mais fortes.',
    attacks: [
      { diceRoll: 1, name: 'Soco de ferro', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 2, name: 'Golpe de martelo', description: 'Levanta os dois punhos acima da cabeça e desce com força, causando 3 pontos de dano.' },
      { diceRoll: 3, name: 'Rasteira', description: 'Derruba o inimigo com uma rasteira rápida, causando 1 ponto de dano.' },
      { diceRoll: 4, name: 'Chute giratório', description: 'Luca dá um salto e gira no ar, desferindo um chute giratório que causa 2 pontos de danos.' },
      { diceRoll: 5, name: 'Socos rápidos', description: 'Luca desfere uma sequência rápida de socos com seus punhos de ferro, causando 2 pontos de dano.' },
      { diceRoll: 6, name: 'Uppercut', description: 'Luca desfere um poderoso uppercut com seus punhos de ferro, causando 3 pontos de dano.' }
    ]
  },
  {
    name: 'Gram',
    hp: 13,
    maxHp: 13,
    ability: 'intangibility',
    abilityDescription: 'Intangibilidade: Torna-se intangível e passa através de objetos sólidos, agilidade aprimorada.',
    attacks: [
      { diceRoll: 1, name: 'Ataque Veloz', description: 'Utiliza sua agilidade para desferir diversos golpes em alta velocidade, causando 2 pontos de dano.' },
      { diceRoll: 2, name: 'Investida Fantasma', description: 'Se torna intangível e atravessa o inimigo, causando dano de 3 pontos.' },
      { diceRoll: 3, name: 'Golpe Imparável', description: 'Causa 2 pontos de dano.' },
      { diceRoll: 4, name: 'Intangibilidade Total', description: 'Se torna completamente intangível e impossível de ser atingido por qualquer ataque inimigo na rodada.' },
      { diceRoll: 5, name: 'Ataque Furtivo', description: 'Se move silenciosamente e surpreende o inimigo com um ataque rápido, causando dano de 2 pontos de vida.' },
      { diceRoll: 6, name: 'Dança dos Ventos', description: 'Utiliza sua agilidade para se mover em alta velocidade ao redor do inimigo, causando dano de 3 pontos de vida.' }
    ]
  },
  {
    name: 'Cina',
    hp: 15,
    maxHp: 15,
    ability: 'telekinesis',
    abilityDescription: 'Telecinese: Move objetos com a força da mente, manipula objetos maiores e pessoas.',
    attacks: [
      { diceRoll: 1, name: 'Levitação', description: 'Cina levita para fugir do ataque do vilão.' },
      { diceRoll: 2, name: 'Projéteis telecinéticos', description: 'Cina lança objetos em direção aos seus inimigos com sua telecinese, causando 2 pontos de dano.' },
      { diceRoll: 3, name: 'Escudo telecinético', description: 'Cria um escudo com sua telecinese para proteger-se e aos seus aliados de ataques inimigos.' },
      { diceRoll: 4, name: 'Ataque telecinético', description: 'Usa sua telecinese para agarrar o vilão e jogá-lo no chão, causando 2 pontos de dano.' },
      { diceRoll: 5, name: 'Imobilização telecinética', description: 'Impede o vilão de atacar na rodada.' },
      { diceRoll: 6, name: 'Deslocamento de objetos', description: 'Causa 3 pontos de dano.' }
    ]
  },
  {
    name: 'Auralis',
    hp: 14,
    maxHp: 14,
    ability: 'emotional_manipulation',
    abilityDescription: 'Manipulação Emocional: Absorve e manipula emoções para enfraquecer inimigos ou fortalecer aliados.',
    attacks: [
      { diceRoll: 1, name: 'Absorção Emocional', description: 'Absorve as emoções negativas de um vilão, reduzindo 2 pontos de dano.' },
      { diceRoll: 2, name: 'Explosão de Empatia', description: 'Transforma energia emocional em força pura, causando 2 pontos de dano a um vilão.' },
      { diceRoll: 3, name: 'Aura Calmante', description: 'Anula 1 ponto de dano.' },
      { diceRoll: 4, name: 'Escudo Emocional', description: 'Cria um escudo que protege os heróis bloqueando até 3 pontos de dano.' },
      { diceRoll: 5, name: 'Infusão de Coragem', description: 'Aumenta o dano dos ataques de um aliado em 2 pontos na rodada atual.' },
      { diceRoll: 6, name: 'Desespero Manipulado', description: 'Anula o ataque do vilão na rodada.' }
    ]
  },
  {
    name: 'Valkyria',
    hp: 12,
    maxHp: 12,
    ability: 'flight_super_strength',
    abilityDescription: 'Voo e Super Força: Combina força sobre-humana com voo em alta velocidade.',
    attacks: [
      { diceRoll: 1, name: 'Golpe Aéreo Devastador', description: 'Voa a toda velocidade e atinge o vilão com um golpe poderoso, causando 3 pontos de dano.' },
      { diceRoll: 2, name: 'Impacto Sônico', description: 'Causa 2 pontos de dano a todos os vilões no local.' },
      { diceRoll: 3, name: 'Proteção Celestial', description: 'Anula os danos do vilão.' },
      { diceRoll: 4, name: 'Arremesso de escombros', description: 'Lança escombros ou objetos grandes no vilão, causando 4 pontos de dano.' },
      { diceRoll: 5, name: 'Voo Relâmpago', description: 'Se move para qualquer local do tabuleiro, podendo ajudar aliados ou enfrentar novos inimigos na mesma rodada.' },
      { diceRoll: 6, name: 'Furacão Aéreo', description: 'Cria um redemoinho com o poder de seu voo, incapacitando os vilões de atacarem na próxima rodada.' }
    ]
  },
  {
    name: 'Aurion',
    hp: 14,
    maxHp: 14,
    ability: 'golden_armor',
    abilityDescription: 'Armadura Dourada: Armadura tecnologicamente avançada, resiste a ataques e amplifica força.',
    attacks: [
      { diceRoll: 1, name: 'Soco Dourado', description: 'Golpe concentrado com a força amplificada da armadura, causando 3 pontos de dano ao vilão.' },
      { diceRoll: 2, name: 'Explosão de Energia', description: 'Causa 2 pontos de dano a todos os vilões no local.' },
      { diceRoll: 3, name: 'Campo de Força Reluzente', description: 'Bloqueia até 3 pontos de dano na rodada.' },
      { diceRoll: 4, name: 'Reparos Automáticos', description: 'Recupera 2 pontos de vida.' },
      { diceRoll: 5, name: 'Carga Blindada', description: 'Avança com força total em direção ao vilão, causando 4 pontos de dano, impedindo-o de atacar na próxima rodada.' },
      { diceRoll: 6, name: 'Raio Solar', description: 'Causa 5 pontos de dano a um vilão.' }
    ]
  }
];

const villainsData = [
  {
    name: 'Cendion',
    hp: 20,
    maxHp: 20,
    attack: 4,
    ability: 'fire_mutant',
    abilityDescription: 'Explosão de Fogo: Dispara bola de fogo que causa 4 pontos de dano em todos os heróis na mesma localidade. Imune a ataques de fogo.'
  },
  {
    name: 'Grapplingon',
    hp: 25,
    maxHp: 25,
    attack: 3,
    ability: 'fierce_resistance',
    abilityDescription: 'Resistência Feroz: Resiste a danos, ganhando 1 ponto de vida extra a cada rodada.'
  },
  {
    name: 'Hidra Elemental',
    hp: 22,
    maxHp: 22,
    attack: 4,
    ability: 'water_manipulation',
    abilityDescription: 'Tsunami Elemental: Controla a água e cria um tsunami que atinge todos os heróis na mesma localização, causando 4 pontos de dano.'
  },
  {
    name: 'Hipno',
    hp: 21,
    maxHp: 21,
    attack: 4,
    ability: 'persuasion',
    abilityDescription: 'Persuasão: Controla mentes e manipula pessoas, fazendo com que heróis se ataquem causando 4 pontos de dano a todos os heróis do local.'
  },
  {
    name: 'Sombrio',
    hp: 20,
    maxHp: 20,
    attack: 5,
    ability: 'shadow_transformation',
    abilityDescription: 'Ataque de Sombras: Emerge de sombras e atinge alvos com ataque de sombras, causando 5 pontos de dano.'
  },
  {
    name: 'Necrometal',
    hp: 23,
    maxHp: 23,
    attack: 3,
    ability: 'metal_implants',
    abilityDescription: 'Investida de Metal: Corre com estrutura de metal reforçada, causando 3 pontos de dano em todos os heróis. Recebe -1 de dano em todos os ataques.'
  },
  {
    name: 'Abadom',
    hp: 24,
    maxHp: 24,
    attack: 4,
    ability: 'mythical_invocation',
    abilityDescription: 'Invocação de Criaturas Míticas: Invoca criatura mítica para lutar ao seu lado, causando 4 pontos de dano aos heróis.'
  },
  {
    name: 'Atômico',
    hp: 22,
    maxHp: 22,
    attack: 3,
    ability: 'atomic_manipulation',
    abilityDescription: 'Bomba de Gás Venenoso: Causa danos moderados a todos os alvos em uma área selecionada e os intoxica com gás venenoso, causando 3 pontos de dano.'
  },
  {
    name: 'Vlad',
    hp: 23,
    maxHp: 23,
    attack: 3,
    ability: 'vampiric_powers',
    abilityDescription: 'Chuva de Sangue: Invoca tempestade de sangue que chove sobre todos os heróis na área, causando 3 pontos de dano. Regenera 1 ponto de vida a cada rodada.'
  },
  {
    name: 'Morfo',
    hp: 22,
    maxHp: 22,
    attack: 3,
    ability: 'metamorphosis',
    abilityDescription: 'Transformação Caleidoscópica: Transforma o corpo em várias formas, criando ilusão de cópias. Causa 3 pontos de dano a todos os heróis.'
  }
];

