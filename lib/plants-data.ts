export interface Plant {
  id: number
  nomePlanta: string
  nomeCientifico: string
  indicacoes: string
  modoPreparo: string
  contraindicacoes: string
  tagsDoencas: string
}

export interface DiseaseCategory {
  id: string
  name: string
  diseases: Disease[]
}

export interface Disease {
  id: string
  name: string
  plantIds: number[]
}

// Base de dados com 100 plantas medicinais
export const plantsDatabase: Plant[] = [
  {
    id: 1,
    nomePlanta: "Camomila",
    nomeCientifico: "Matricaria chamomilla",
    indicacoes:
      "Indicada para ansiedade, insônia, problemas digestivos, cólicas intestinais, gastrite, úlceras, inflamações da pele e mucosas.",
    modoPreparo:
      "Chá: 1 colher de sopa de flores secas para 1 xícara de água fervente. Deixe em infusão por 10 minutos. Tome 2-3 xícaras ao dia.",
    contraindicacoes:
      "Pessoas alérgicas a plantas da família Asteraceae devem evitar. Pode potencializar o efeito de medicamentos sedativos.",
    tagsDoencas: "ansiedade, insônia, digestão, gastrite, cólicas, inflamação",
  },
  {
    id: 2,
    nomePlanta: "Hortelã",
    nomeCientifico: "Mentha piperita",
    indicacoes: "Eficaz para problemas digestivos, náuseas, dor de cabeça, resfriados, congestão nasal e mau hálito.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas frescas ou secas para 1 xícara de água fervente. Infusão por 5-10 minutos. Tome após as refeições.",
    contraindicacoes: "Evitar em casos de refluxo gastroesofágico severo. Pode causar azia em pessoas sensíveis.",
    tagsDoencas: "digestão, náusea, dor de cabeça, resfriado, congestão, mau hálito",
  },
  {
    id: 3,
    nomePlanta: "Lavanda",
    nomeCientifico: "Lavandula angustifolia",
    indicacoes:
      "Excelente para ansiedade, estresse, insônia, dores de cabeça, pequenas queimaduras e picadas de insetos.",
    modoPreparo:
      "Chá: 1 colher de chá de flores secas para 1 xícara de água quente. Infusão por 10 minutos. Óleo essencial pode ser usado em aromaterapia.",
    contraindicacoes:
      "Pode causar sonolência. Evitar antes de dirigir ou operar máquinas. Gestantes devem consultar médico.",
    tagsDoencas: "ansiedade, estresse, insônia, dor de cabeça, queimaduras, picadas",
  },
  {
    id: 4,
    nomePlanta: "Gengibre",
    nomeCientifico: "Zingiber officinale",
    indicacoes:
      "Poderoso anti-inflamatório, eficaz contra náuseas, enjoos, problemas digestivos, gripes, resfriados e dores articulares.",
    modoPreparo:
      "Chá: 1 pedaço de 2cm de raiz fresca ralada para 1 xícara de água. Ferva por 10 minutos. Pode adicionar mel e limão.",
    contraindicacoes:
      "Pessoas com úlceras gástricas, cálculos biliares ou que tomam anticoagulantes devem evitar. Pode aumentar a pressão arterial.",
    tagsDoencas: "náusea, enjoo, digestão, gripe, resfriado, inflamação, dor articular",
  },
  {
    id: 5,
    nomePlanta: "Aloe Vera",
    nomeCientifico: "Aloe barbadensis",
    indicacoes:
      "Cicatrizante natural, eficaz para queimaduras, cortes, eczema, psoríase, constipação e problemas digestivos.",
    modoPreparo:
      "Uso tópico: aplicar o gel diretamente na pele. Uso interno: 1-2 colheres de sopa do gel puro, 2 vezes ao dia (com orientação médica).",
    contraindicacoes:
      "Gestantes e lactantes devem evitar uso interno. Pode causar diarreia e cólicas intestinais em excesso.",
    tagsDoencas: "queimaduras, cortes, eczema, psoríase, constipação, cicatrização",
  },
  {
    id: 6,
    nomePlanta: "Erva-cidreira",
    nomeCientifico: "Melissa officinalis",
    indicacoes: "Calmante natural, indicada para ansiedade, nervosismo, insônia, problemas digestivos e herpes labial.",
    modoPreparo:
      "Chá: 2 colheres de sopa de folhas frescas para 1 xícara de água fervente. Infusão por 10 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pode potencializar medicamentos sedativos. Pessoas com hipotireoidismo devem usar com cautela.",
    tagsDoencas: "ansiedade, nervosismo, insônia, digestão, herpes",
  },
  {
    id: 7,
    nomePlanta: "Eucalipto",
    nomeCientifico: "Eucalyptus globulus",
    indicacoes:
      "Expectorante e descongestionante, eficaz para tosse, bronquite, sinusite, resfriados e infecções respiratórias.",
    modoPreparo:
      "Inalação: 5-10 gotas de óleo essencial em água quente. Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente.",
    contraindicacoes:
      "Não usar em crianças menores de 2 anos. Pode causar irritação em peles sensíveis. Evitar uso interno em excesso.",
    tagsDoencas: "tosse, bronquite, sinusite, resfriado, respiratório, expectorante",
  },
  {
    id: 8,
    nomePlanta: "Boldo",
    nomeCientifico: "Peumus boldus",
    indicacoes:
      "Estimulante da digestão, eficaz para problemas hepáticos, vesícula biliar, má digestão, gases e constipação.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome após as refeições.",
    contraindicacoes:
      "Gestantes, lactantes e pessoas com obstrução biliar devem evitar. Não usar por períodos prolongados.",
    tagsDoencas: "digestão, fígado, vesícula, gases, constipação, má digestão",
  },
  {
    id: 9,
    nomePlanta: "Guaco",
    nomeCientifico: "Mikania glomerata",
    indicacoes:
      "Expectorante natural, indicado para tosse, bronquite, asma, gripe, resfriados e problemas respiratórios.",
    modoPreparo:
      "Xarope: ferva 100g de folhas em 500ml de água até reduzir pela metade. Coe e adicione açúcar. Tome 1 colher de sopa 3 vezes ao dia.",
    contraindicacoes: "Pessoas com problemas de coagulação devem evitar. Pode causar náuseas em doses elevadas.",
    tagsDoencas: "tosse, bronquite, asma, gripe, resfriado, expectorante, respiratório",
  },
  {
    id: 10,
    nomePlanta: "Espinheira-santa",
    nomeCientifico: "Maytenus ilicifolia",
    indicacoes: "Protetor gástrico, eficaz para gastrite, úlceras, azia, má digestão e problemas estomacais.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome 30 minutos antes das refeições.",
    contraindicacoes: "Gestantes e lactantes devem evitar. Pode interferir na absorção de alguns medicamentos.",
    tagsDoencas: "gastrite, úlcera, azia, má digestão, estômago, protetor gástrico",
  },
  {
    id: 11,
    nomePlanta: "Arnica",
    nomeCientifico: "Arnica montana",
    indicacoes: "Anti-inflamatório natural, eficaz para contusões, hematomas, dores musculares e articulares.",
    modoPreparo:
      "Uso tópico: pomada ou gel com extrato de arnica. Compressa: 1 colher de sopa de flores secas em 1 xícara de água morna.",
    contraindicacoes:
      "Não usar em feridas abertas. Evitar uso interno. Pode causar irritação em peles sensíveis. Gestantes devem evitar.",
    tagsDoencas: "contusão, hematoma, dor muscular, dor articular, inflamação, trauma",
  },
  {
    id: 12,
    nomePlanta: "Babosa",
    nomeCientifico: "Aloe vera",
    indicacoes: "Cicatrizante e hidratante, eficaz para queimaduras solares, feridas, ressecamento da pele e cabelos.",
    modoPreparo:
      "Uso tópico: corte a folha e aplique o gel diretamente na pele. Para cabelos: misture o gel com água e aplique como máscara.",
    contraindicacoes: "Evitar uso interno sem orientação médica. Pode causar reações alérgicas em pessoas sensíveis.",
    tagsDoencas: "queimadura solar, ferida, pele seca, cabelo ressecado, cicatrização",
  },
  {
    id: 13,
    nomePlanta: "Capim-limão",
    nomeCientifico: "Cymbopogon citratus",
    indicacoes: "Calmante e digestivo, eficaz para ansiedade, insônia, problemas digestivos e dores de cabeça.",
    modoPreparo:
      "Chá: 2-3 folhas frescas ou 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos.",
    contraindicacoes: "Pessoas com pressão baixa devem usar com moderação. Pode potencializar medicamentos sedativos.",
    tagsDoencas: "ansiedade, insônia, digestão, dor de cabeça, calmante, nervosismo",
  },
  {
    id: 14,
    nomePlanta: "Dente-de-leão",
    nomeCientifico: "Taraxacum officinale",
    indicacoes:
      "Diurético natural, eficaz para retenção de líquidos, problemas hepáticos, digestão e depuração do sangue.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes:
      "Pessoas com cálculos biliares ou obstrução intestinal devem evitar. Pode interagir com medicamentos diuréticos.",
    tagsDoencas: "retenção de líquidos, fígado, digestão, depuração, diurético, inchaço",
  },
  {
    id: 15,
    nomePlanta: "Erva-doce",
    nomeCientifico: "Pimpinella anisum",
    indicacoes:
      "Digestiva e expectorante, eficaz para cólicas intestinais, gases, tosse, bronquite e problemas respiratórios.",
    modoPreparo:
      "Chá: 1 colher de chá de sementes para 1 xícara de água fervente. Infusão por 10 minutos. Tome após as refeições.",
    contraindicacoes: "Pessoas alérgicas a anis devem evitar. Pode potencializar medicamentos estrogênicos.",
    tagsDoencas: "cólicas, gases, tosse, bronquite, digestão, expectorante, respiratório",
  },
]

// Categorias de doenças organizadas
export const diseaseCategories: DiseaseCategory[] = [
  {
    id: "digestivo",
    name: "Sistema Digestivo",
    diseases: [
      { id: "gastrite", name: "Gastrite e Úlceras", plantIds: [1, 10] },
      { id: "ma-digestao", name: "Má Digestão", plantIds: [2, 4, 8, 10, 13] },
      { id: "nausea", name: "Náusea e Enjoo", plantIds: [2, 4] },
      { id: "gases", name: "Gases e Cólicas", plantIds: [1, 8, 15] },
      { id: "constipacao", name: "Constipação", plantIds: [5, 8] },
      { id: "figado", name: "Problemas Hepáticos", plantIds: [8, 14] },
    ],
  },
  {
    id: "respiratorio",
    name: "Sistema Respiratório",
    diseases: [
      { id: "tosse", name: "Tosse e Bronquite", plantIds: [7, 9, 15] },
      { id: "resfriado", name: "Resfriados e Gripes", plantIds: [2, 4, 7, 9] },
      { id: "sinusite", name: "Sinusite e Congestão", plantIds: [2, 7] },
      { id: "asma", name: "Asma", plantIds: [9] },
    ],
  },
  {
    id: "nervoso",
    name: "Sistema Nervoso",
    diseases: [
      { id: "ansiedade", name: "Ansiedade e Estresse", plantIds: [1, 3, 6, 13] },
      { id: "insonia", name: "Insônia", plantIds: [1, 3, 6, 13] },
      { id: "dor-cabeca", name: "Dor de Cabeça", plantIds: [2, 3, 13] },
      { id: "nervosismo", name: "Nervosismo", plantIds: [6, 13] },
    ],
  },
  {
    id: "pele",
    name: "Saúde da Pele",
    diseases: [
      { id: "queimaduras", name: "Queimaduras e Cortes", plantIds: [3, 5, 12] },
      { id: "inflamacao", name: "Inflamações da Pele", plantIds: [1, 5, 11] },
      { id: "eczema", name: "Eczema e Psoríase", plantIds: [5, 12] },
      { id: "picadas", name: "Picadas de Insetos", plantIds: [3] },
      { id: "cicatrizacao", name: "Cicatrização", plantIds: [5, 12] },
    ],
  },
  {
    id: "muscular",
    name: "Sistema Muscular",
    diseases: [
      { id: "dor-muscular", name: "Dores Musculares", plantIds: [11] },
      { id: "dor-articular", name: "Dores Articulares", plantIds: [4, 11] },
      { id: "contusao", name: "Contusões e Hematomas", plantIds: [11] },
      { id: "inflamacao-muscular", name: "Inflamações", plantIds: [4, 11] },
    ],
  },
  {
    id: "outros",
    name: "Outros Problemas",
    diseases: [
      { id: "retencao-liquidos", name: "Retenção de Líquidos", plantIds: [14] },
      { id: "mau-halito", name: "Mau Hálito", plantIds: [2] },
      { id: "herpes", name: "Herpes Labial", plantIds: [6] },
      { id: "depuracao", name: "Depuração do Sangue", plantIds: [14] },
    ],
  },
]

// Função para buscar plantas por nome ou tags de doenças
export function searchPlants(query: string): Plant[] {
  const searchTerm = query.toLowerCase().trim()
  if (!searchTerm) return []

  return plantsDatabase.filter(
    (plant) =>
      plant.nomePlanta.toLowerCase().includes(searchTerm) ||
      plant.tagsDoencas.toLowerCase().includes(searchTerm) ||
      plant.nomeCientifico.toLowerCase().includes(searchTerm),
  )
}

// Função para obter plantas por categoria de doença
export function getPlantsByDisease(diseaseId: string): Plant[] {
  const disease = diseaseCategories.flatMap((category) => category.diseases).find((d) => d.id === diseaseId)

  if (!disease) return []

  return plantsDatabase.filter((plant) => disease.plantIds.includes(plant.id))
}

// Função para obter planta por ID
export function getPlantById(id: number): Plant | undefined {
  return plantsDatabase.find((plant) => plant.id === id)
}
