export interface Plant {
  id: number
  nomePlanta: string
  nomeCientifico: string
  indicacoes: string
  modoPreparo: string
  contraindicacoes: string
  tagsDoencas: string
  propriedadesNutritivas: string
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
    propriedadesNutritivas:
      "Rica em flavonoides (apigenina, luteolina), óleos essenciais (bisabolol, camazuleno), cumarinas, mucilagens e taninos. Contém propriedades antioxidantes, anti-inflamatórias e calmantes naturais.",
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
    propriedadesNutritivas:
      "Rica em mentol, mentona, ácido rosmarínico, flavonoides e taninos. Fonte de vitamina A, C, ferro, manganês e folato. Possui propriedades antiespasmódicas, carminativas e refrescantes.",
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
    propriedadesNutritivas:
      "Rica em linalol, acetato de linalila, cânfora, flavonoides e taninos. Contém propriedades sedativas, antissépticas e cicatrizantes. Fonte natural de compostos aromáticos terapêuticos.",
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
    propriedadesNutritivas:
      "Rico em gingerol, shogaol, zingerona, vitamina C, magnésio, potássio e manganês. Contém compostos fenólicos com propriedades anti-inflamatórias, antioxidantes e termogênicas.",
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
    propriedadesNutritivas:
      "Rica em polissacarídeos (acemanano), aminoácidos essenciais, vitaminas A, C, E, B12, ácido fólico, minerais como cálcio, magnésio, zinco e selênio. Contém enzimas digestivas e propriedades hidratantes.",
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
    propriedadesNutritivas:
      "Rica em ácido rosmarínico, citral, geraniol, flavonoides e taninos. Fonte de vitamina C, cálcio e magnésio. Possui propriedades antivirais, antioxidantes e neuroprotectoras.",
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
    propriedadesNutritivas:
      "Rico em eucaliptol (1,8-cineol), alfa-pineno, taninos e flavonoides. Contém propriedades antimicrobianas, expectorantes e anti-inflamatórias. Fonte de compostos voláteis terapêuticos.",
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
    propriedadesNutritivas:
      "Rico em boldina, flavonoides, óleos essenciais e taninos. Contém propriedades hepatoprotetoras, coleréticas e antioxidantes. Estimula a produção de bile e melhora a digestão de gorduras.",
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
    propriedadesNutritivas:
      "Rico em cumarinas, flavonoides, saponinas e óleos essenciais. Contém propriedades broncodilatadoras, expectorantes e anti-inflamatórias. Fonte de compostos que auxiliam na função respiratória.",
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
    propriedadesNutritivas:
      "Rica em taninos, flavonoides, triterpenos e mucilagens. Contém propriedades gastroprotetoras, anti-inflamatórias e cicatrizantes. Forma uma película protetora na mucosa gástrica.",
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
    propriedadesNutritivas:
      "Rica em lactonas sesquiterpênicas (helenalina), flavonoides, carotenoides e ácidos fenólicos. Contém propriedades anti-inflamatórias, analgésicas e estimulantes da circulação local.",
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
    propriedadesNutritivas:
      "Rica em polissacarídeos (acemanano), aminoácidos, vitaminas A, C, E, minerais como zinco e selênio. Contém enzimas, ligninas e saponinas com propriedades hidratantes e regenerativas.",
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
    propriedadesNutritivas:
      "Rico em citral, geraniol, limoneno, flavonoides e vitamina C. Contém propriedades sedativas, digestivas e antioxidantes. Fonte de óleos essenciais com ação calmante.",
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
    propriedadesNutritivas:
      "Rico em vitaminas A, C, K, ferro, cálcio, potássio e inulina. Contém taraxacina, flavonoides e ácidos fenólicos. Excelente fonte de betacaroteno e propriedades depurativas.",
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
    propriedadesNutritivas:
      "Rica em anetol, estragol, flavonoides e óleos essenciais. Contém cálcio, ferro, magnésio e vitamina C. Possui propriedades carminativas, antiespasmódicas e galactagogas.",
  },
  {
    id: 16,
    nomePlanta: "Alcachofra",
    nomeCientifico: "Cynara scolymus",
    indicacoes: "Hepatoprotetora, eficaz para problemas hepáticos, colesterol alto, digestão e desintoxicação.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome antes das refeições.",
    contraindicacoes: "Pessoas com obstrução biliar devem evitar. Pode causar gases em excesso.",
    tagsDoencas: "fígado, colesterol, digestão, desintoxicação, vesícula",
    propriedadesNutritivas:
      "Rica em cinarina, ácido clorogênico, inulina, flavonoides e fibras. Fonte de vitamina C, folato, magnésio e potássio. Contém propriedades hepatoprotetoras e hipocolesterolemiantes.",
  },
  {
    id: 17,
    nomePlanta: "Alecrim",
    nomeCientifico: "Rosmarinus officinalis",
    indicacoes: "Estimulante da circulação, eficaz para memória, concentração, dores musculares e queda de cabelo.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Para cabelo: enxágue após lavagem.",
    contraindicacoes: "Gestantes e pessoas com pressão alta devem evitar. Pode causar irritação em peles sensíveis.",
    tagsDoencas: "memória, concentração, circulação, dor muscular, queda de cabelo",
    propriedadesNutritivas:
      "Rico em ácido rosmarínico, carnosol, cineol, cânfora e flavonoides. Fonte de ferro, cálcio e vitamina B6. Contém potentes propriedades antioxidantes e neuroprotectoras.",
  },
  {
    id: 18,
    nomePlanta: "Alfazema",
    nomeCientifico: "Lavandula officinalis",
    indicacoes: "Relaxante e antisséptica, eficaz para ansiedade, insônia, feridas, queimaduras e dores de cabeça.",
    modoPreparo:
      "Chá: 1 colher de chá de flores secas para 1 xícara de água quente. Óleo essencial: algumas gotas no travesseiro ou banho.",
    contraindicacoes: "Pode causar sonolência. Evitar em doses altas durante a gravidez.",
    tagsDoencas: "ansiedade, insônia, feridas, queimaduras, dor de cabeça, relaxante",
    propriedadesNutritivas:
      "Rica em linalol, acetato de linalila, cânfora e taninos. Contém flavonoides, cumarinas e propriedades sedativas. Fonte de compostos aromáticos com ação calmante e cicatrizante.",
  },
  {
    id: 19,
    nomePlanta: "Angélica",
    nomeCientifico: "Angelica archangelica",
    indicacoes: "Digestiva e expectorante, eficaz para problemas digestivos, tosse, bronquite e ansiedade.",
    modoPreparo:
      "Chá: 1 colher de chá de raiz seca para 1 xícara de água fervente. Ferva por 10 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Gestantes devem evitar. Pode aumentar a sensibilidade ao sol.",
    tagsDoencas: "digestão, tosse, bronquite, ansiedade, expectorante",
    propriedadesNutritivas:
      "Rica em cumarinas, óleos essenciais, angelicina e flavonoides. Contém propriedades digestivas, expectorantes e fotossensibilizantes. Fonte de compostos bioativos únicos.",
  },
  {
    id: 20,
    nomePlanta: "Anis-estrelado",
    nomeCientifico: "Illicium verum",
    indicacoes: "Expectorante e digestivo, eficaz para tosse, bronquite, gases, cólicas e problemas respiratórios.",
    modoPreparo:
      "Chá: 1 estrela inteira para 1 xícara de água fervente. Infusão por 10 minutos. Tome após as refeições.",
    contraindicacoes: "Não confundir com anis-estrelado japonês (tóxico). Evitar em excesso durante a gravidez.",
    tagsDoencas: "tosse, bronquite, gases, cólicas, expectorante, respiratório",
    propriedadesNutritivas:
      "Rico em anetol, ácido shiquímico, limoneno e flavonoides. Contém propriedades antivirais, expectorantes e carminativas. Fonte natural de ácido shiquímico (precursor do Tamiflu).",
  },
  {
    id: 21,
    nomePlanta: "Artemísia",
    nomeCientifico: "Artemisia vulgaris",
    indicacoes: "Reguladora menstrual, eficaz para cólicas menstruais, digestão, vermes e problemas hepáticos.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome 2 vezes ao dia.",
    contraindicacoes: "Gestantes e lactantes devem evitar completamente. Pode causar aborto.",
    tagsDoencas: "cólicas menstruais, digestão, vermes, fígado, menstruação",
    propriedadesNutritivas:
      "Rica em artemisinina, cineol, tujona e flavonoides. Contém vitamina A, C, ferro e cálcio. Possui propriedades emenagoga, vermífuga e digestiva.",
  },
  {
    id: 22,
    nomePlanta: "Bardana",
    nomeCientifico: "Arctium lappa",
    indicacoes: "Depurativa do sangue, eficaz para acne, eczema, furúnculos, artrite e problemas de pele.",
    modoPreparo:
      "Chá: 1 colher de sopa de raiz seca para 1 xícara de água. Ferva por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pessoas com diabetes devem monitorar glicemia. Pode interagir com medicamentos diuréticos.",
    tagsDoencas: "acne, eczema, furúnculos, artrite, pele, depuração do sangue",
    propriedadesNutritivas:
      "Rica em inulina, mucilagens, taninos e ácidos fenólicos. Fonte de potássio, ferro, magnésio e vitaminas do complexo B. Contém propriedades depurativas e anti-inflamatórias.",
  },
  {
    id: 23,
    nomePlanta: "Calêndula",
    nomeCientifico: "Calendula officinalis",
    indicacoes: "Cicatrizante e anti-inflamatória, eficaz para feridas, queimaduras, eczema, úlceras e inflamações.",
    modoPreparo:
      "Uso tópico: pomada ou óleo. Chá: 1 colher de sopa de flores secas para 1 xícara de água fervente. Infusão por 10 minutos.",
    contraindicacoes: "Pessoas alérgicas a plantas da família Asteraceae devem evitar.",
    tagsDoencas: "feridas, queimaduras, eczema, úlceras, inflamação, cicatrização",
    propriedadesNutritivas:
      "Rica em carotenoides, flavonoides, saponinas e óleos essenciais. Contém calendulina, ácido salicílico e propriedades cicatrizantes. Fonte de betacaroteno e luteína.",
  },
  {
    id: 24,
    nomePlanta: "Canela",
    nomeCientifico: "Cinnamomum verum",
    indicacoes: "Estimulante da circulação, eficaz para diabetes, digestão, resfriados e dores menstruais.",
    modoPreparo:
      "Chá: 1 pau de canela para 1 xícara de água. Ferva por 10 minutos. Pode adicionar a alimentos e bebidas.",
    contraindicacoes: "Gestantes devem evitar em grandes quantidades. Pode interagir com medicamentos para diabetes.",
    tagsDoencas: "diabetes, digestão, resfriado, dores menstruais, circulação",
    propriedadesNutritivas:
      "Rica em cinamaldeído, eugenol, cânfora e taninos. Fonte de cálcio, ferro, manganês e fibras. Contém propriedades hipoglicemiantes, termogênicas e antioxidantes.",
  },
  {
    id: 25,
    nomePlanta: "Capuchinha",
    nomeCientifico: "Tropaeolum majus",
    indicacoes: "Antibiótica natural, eficaz para infecções respiratórias, cistite, feridas e queda de cabelo.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas frescas para 1 xícara de água fervente. Infusão por 10 minutos. Uso tópico: suco das folhas.",
    contraindicacoes: "Pessoas com úlceras gástricas devem evitar. Pode causar irritação gástrica em excesso.",
    tagsDoencas: "infecções respiratórias, cistite, feridas, queda de cabelo, antibiótico",
    propriedadesNutritivas:
      "Rica em vitamina C, glucosinolatos, flavonoides e carotenoides. Contém benzil isotiocianato com propriedades antibióticas. Fonte de ferro, cálcio e antioxidantes.",
  },
  {
    id: 26,
    nomePlanta: "Carqueja",
    nomeCientifico: "Baccharis trimera",
    indicacoes: "Digestiva e hepatoprotetora, eficaz para problemas hepáticos, digestão, diabetes e obesidade.",
    modoPreparo:
      "Chá: 1 colher de sopa de ramos secos para 1 xícara de água fervente. Infusão por 15 minutos. Tome antes das refeições.",
    contraindicacoes:
      "Gestantes e pessoas com pressão baixa devem evitar. Pode potencializar medicamentos hipoglicemiantes.",
    tagsDoencas: "fígado, digestão, diabetes, obesidade, hepatoprotetor",
    propriedadesNutritivas:
      "Rica em flavonoides, saponinas, taninos e óleos essenciais. Contém propriedades hepatoprotetoras, hipoglicemiantes e digestivas. Fonte de compostos bioativos únicos.",
  },
  {
    id: 27,
    nomePlanta: "Cavalinha",
    nomeCientifico: "Equisetum arvense",
    indicacoes: "Diurética e remineralizante, eficaz para retenção de líquidos, cistite, unhas fracas e cabelos.",
    modoPreparo:
      "Chá: 1 colher de sopa de planta seca para 1 xícara de água fervente. Infusão por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pessoas com problemas cardíacos ou renais devem evitar. Não usar por períodos prolongados.",
    tagsDoencas: "retenção de líquidos, cistite, unhas fracas, cabelo, diurético",
    propriedadesNutritivas:
      "Rica em sílica, potássio, flavonoides e saponinas. Excelente fonte de minerais como ferro, manganês e magnésio. Contém propriedades remineralizantes e diuréticas.",
  },
  {
    id: 28,
    nomePlanta: "Centella asiática",
    nomeCientifico: "Centella asiatica",
    indicacoes: "Cicatrizante e estimulante da circulação, eficaz para varizes, celulite, feridas e memória.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Uso tópico: extrato em cremes.",
    contraindicacoes: "Gestantes devem evitar. Pode causar sonolência em doses altas.",
    tagsDoencas: "varizes, celulite, feridas, memória, circulação, cicatrização",
    propriedadesNutritivas:
      "Rica em saponinas triterpênicas (asiaticoside, madecassoside), flavonoides e aminoácidos. Contém propriedades cicatrizantes, neuroprotectoras e estimulantes da circulação.",
  },
  {
    id: 29,
    nomePlanta: "Chapéu-de-couro",
    nomeCientifico: "Echinodorus macrophyllus",
    indicacoes: "Depurativa e diurética, eficaz para problemas renais, artrite, reumatismo e depuração do sangue.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pessoas com pressão baixa devem usar com cautela. Pode potencializar medicamentos diuréticos.",
    tagsDoencas: "problemas renais, artrite, reumatismo, depuração do sangue, diurético",
    propriedadesNutritivas:
      "Rica em flavonoides, taninos, saponinas e óleos essenciais. Contém propriedades depurativas, diuréticas e anti-inflamatórias. Fonte de compostos bioativos específicos.",
  },
  {
    id: 30,
    nomePlanta: "Confrei",
    nomeCientifico: "Symphytum officinale",
    indicacoes: "Cicatrizante potente, eficaz para feridas, fraturas, contusões, úlceras de pele e dores articulares.",
    modoPreparo:
      "Uso tópico: cataplasma com folhas frescas ou pomada. Não usar internamente devido à toxicidade hepática.",
    contraindicacoes:
      "NUNCA usar internamente. Pode causar danos hepáticos graves. Apenas uso tópico em feridas fechadas.",
    tagsDoencas: "feridas, fraturas, contusões, úlceras de pele, dores articulares, cicatrização",
    propriedadesNutritivas:
      "Rica em alantoína, mucilagens, taninos e alcaloides pirrolizidínicos (tóxicos). Contém propriedades cicatrizantes potentes, mas uso restrito ao tópico devido à toxicidade.",
  },
  {
    id: 31,
    nomePlanta: "Cravo-da-índia",
    nomeCientifico: "Syzygium aromaticum",
    indicacoes: "Analgésico e antisséptico, eficaz para dor de dente, mau hálito, digestão e infecções.",
    modoPreparo:
      "Chá: 3-4 cravos para 1 xícara de água fervente. Infusão por 10 minutos. Para dor de dente: mascar 1 cravo.",
    contraindicacoes: "Pode causar irritação em mucosas sensíveis. Evitar em excesso durante a gravidez.",
    tagsDoencas: "dor de dente, mau hálito, digestão, infecções, analgésico",
    propriedadesNutritivas:
      "Rico em eugenol, acetato de eugenila, cariofileno e taninos. Fonte de manganês, vitamina K e fibras. Contém propriedades analgésicas, antissépticas e antioxidantes.",
  },
  {
    id: 32,
    nomePlanta: "Cúrcuma",
    nomeCientifico: "Curcuma longa",
    indicacoes: "Anti-inflamatório potente, eficaz para artrite, problemas digestivos, feridas e proteção hepática.",
    modoPreparo:
      "Chá: 1 colher de chá de pó para 1 xícara de água quente com pimenta-do-reino. Pode ser adicionada a alimentos.",
    contraindicacoes: "Pessoas com cálculos biliares devem evitar. Pode potencializar medicamentos anticoagulantes.",
    tagsDoencas: "artrite, inflamação, digestão, feridas, fígado, anti-inflamatório",
    propriedadesNutritivas:
      "Rica em curcumina, turmerona, cineol e vitamina C. Fonte de ferro, manganês, potássio e fibras. Contém potentes propriedades anti-inflamatórias e antioxidantes.",
  },
  {
    id: 33,
    nomePlanta: "Dill",
    nomeCientifico: "Anethum graveolens",
    indicacoes: "Digestivo e carminativo, eficaz para gases, cólicas intestinais, má digestão e soluços.",
    modoPreparo:
      "Chá: 1 colher de chá de sementes para 1 xícara de água fervente. Infusão por 10 minutos. Tome após as refeições.",
    contraindicacoes: "Gestantes devem evitar em grandes quantidades. Pode causar fotossensibilidade.",
    tagsDoencas: "gases, cólicas intestinais, má digestão, soluços, digestivo",
    propriedadesNutritivas:
      "Rico em carvona, limoneno, flavonoides e vitamina C. Fonte de cálcio, ferro, manganês e fibras. Contém propriedades carminativas, antiespasmódicas e digestivas.",
  },
  {
    id: 34,
    nomePlanta: "Equinácea",
    nomeCientifico: "Echinacea purpurea",
    indicacoes: "Imunoestimulante, eficaz para resfriados, gripes, infecções e fortalecimento do sistema imunológico.",
    modoPreparo:
      "Chá: 1 colher de chá de raiz seca para 1 xícara de água fervente. Ferva por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pessoas com doenças autoimunes devem evitar. Não usar por mais de 8 semanas consecutivas.",
    tagsDoencas: "resfriados, gripes, infecções, imunidade, sistema imunológico",
    propriedadesNutritivas:
      "Rica em polissacarídeos, glicoproteínas, alquilamidas e flavonoides. Contém propriedades imunoestimulantes, anti-inflamatórias e antivirais. Fonte de compostos que auxiliam na defesa do organismo.",
  },
  {
    id: 35,
    nomePlanta: "Erva-de-santa-maria",
    nomeCientifico: "Chenopodium ambrosioides",
    indicacoes: "Vermífuga e digestiva, eficaz para vermes intestinais, gases, cólicas e problemas digestivos.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome em jejum.",
    contraindicacoes: "Gestantes e crianças pequenas devem evitar. Pode ser tóxica em doses altas.",
    tagsDoencas: "vermes intestinais, gases, cólicas, digestão, vermífugo",
    propriedadesNutritivas:
      "Rica em ascaridol, cineol, tujona e flavonoides. Contém propriedades vermífugas, antiespasmódicas e digestivas. Usar com cautela devido à toxicidade potencial.",
  },
  {
    id: 36,
    nomePlanta: "Erva-de-são-joão",
    nomeCientifico: "Hypericum perforatum",
    indicacoes: "Antidepressivo natural, eficaz para depressão leve, ansiedade, feridas e queimaduras.",
    modoPreparo:
      "Chá: 1 colher de chá de flores secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pode interagir com muitos medicamentos. Causa fotossensibilidade. Consulte médico antes do uso.",
    tagsDoencas: "depressão, ansiedade, feridas, queimaduras, antidepressivo",
    propriedadesNutritivas:
      "Rica em hipericina, hiperforina, flavonoides e taninos. Contém propriedades antidepressivas, ansiolíticas e cicatrizantes. Potencializa a ação da serotonina no cérebro.",
  },
  {
    id: 37,
    nomePlanta: "Erva-mate",
    nomeCientifico: "Ilex paraguariensis",
    indicacoes: "Estimulante e diurética, eficaz para fadiga, obesidade, retenção de líquidos e concentração.",
    modoPreparo:
      "Chimarrão: água a 70-80°C sobre a erva. Chá: 1 colher de sopa para 1 xícara de água quente. Infusão por 5 minutos.",
    contraindicacoes: "Pessoas com insônia, ansiedade ou problemas cardíacos devem evitar. Contém cafeína.",
    tagsDoencas: "fadiga, obesidade, retenção de líquidos, concentração, estimulante",
    propriedadesNutritivas:
      "Rica em cafeína, teobromina, teofilina, saponinas e polifenóis. Fonte de vitaminas A, C, E, B1, B2, B3, B5, B6, C, E, K e minerais como potássio, magnésio e manganês. Contém propriedades estimulantes e antioxidantes.",
  },
  {
    id: 38,
    nomePlanta: "Funcho",
    nomeCientifico: "Foeniculum vulgare",
    indicacoes:
      "Digestivo e galactagogo, eficaz para gases, cólicas, má digestão e aumento da produção de leite materno.",
    modoPreparo:
      "Chá: 1 colher de chá de sementes para 1 xícara de água fervente. Infusão por 10 minutos. Tome após as refeições.",
    contraindicacoes: "Pessoas com epilepsia devem evitar. Pode ter efeito estrogênico.",
    tagsDoencas: "gases, cólicas, má digestão, produção de leite, digestivo",
    propriedadesNutritivas:
      "Rico em anetol, estragol, flavonoides e óleos essenciais. Fonte de cálcio, ferro, magnésio e vitamina C. Possui propriedades carminativas, antiespasmódicas e galactagogas.",
  },
  {
    id: 39,
    nomePlanta: "Ginkgo",
    nomeCientifico: "Ginkgo biloba",
    indicacoes: "Estimulante da circulação cerebral, eficaz para memória, concentração, vertigens e zumbido no ouvido.",
    modoPreparo:
      "Extrato padronizado: seguir orientação médica. Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente.",
    contraindicacoes: "Pode interagir com anticoagulantes. Pessoas com epilepsia devem evitar.",
    tagsDoencas: "memória, concentração, vertigens, zumbido no ouvido, circulação cerebral",
    propriedadesNutritivas:
      "Rica em ginkgolídeos, bilobalídeos, flavonoides e lactonas terpênicas. Contém propriedades antioxidantes e anti-inflamatórias. Melhora a circulação sanguínea, especialmente no cérebro.",
  },
  {
    id: 40,
    nomePlanta: "Ginseng",
    nomeCientifico: "Panax ginseng",
    indicacoes: "Adaptógeno e energético, eficaz para fadiga, estresse, baixa imunidade e performance física.",
    modoPreparo: "Chá: 1 colher de chá de raiz seca para 1 xícara de água. Ferva por 15 minutos. Tome pela manhã.",
    contraindicacoes: "Pessoas com pressão alta, insônia ou ansiedade devem evitar. Pode interagir com medicamentos.",
    tagsDoencas: "fadiga, estresse, baixa imunidade, performance física, energético",
    propriedadesNutritivas:
      "Rica em ginsenosídeos, polissacarídeos, peptídeos e vitaminas do complexo B. Contém propriedades adaptógenas, energéticas e imunoestimulantes. Melhora a resistência ao estresse e a performance física e mental.",
  },
  {
    id: 41,
    nomePlanta: "Guaraná",
    nomeCientifico: "Paullinia cupana",
    indicacoes: "Estimulante natural, eficaz para fadiga, falta de concentração, obesidade e performance física.",
    modoPreparo: "Pó: 1-2g em água, suco ou vitamina. Chá: 1 colher de chá de pó para 1 xícara de água quente.",
    contraindicacoes:
      "Pessoas com insônia, ansiedade, pressão alta ou problemas cardíacos devem evitar. Contém cafeína.",
    tagsDoencas: "fadiga, falta de concentração, obesidade, performance física, estimulante",
    propriedadesNutritivas:
      "Rica em cafeína, teobromina, taninos e saponinas. Contém propriedades estimulantes, termogênicas e antioxidantes. Melhora o estado de alerta e a performance física.",
  },
  {
    id: 42,
    nomePlanta: "Hamamelis",
    nomeCientifico: "Hamamelis virginiana",
    indicacoes: "Adstringente e anti-inflamatória, eficaz para hemorroidas, varizes, feridas e inflamações da pele.",
    modoPreparo:
      "Uso tópico: extrato em compressas ou pomadas. Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente.",
    contraindicacoes: "Evitar uso interno em excesso. Pode causar irritação gástrica.",
    tagsDoencas: "hemorroidas, varizes, feridas, inflamações da pele, adstringente",
    propriedadesNutritivas:
      "Rica em taninos, flavonoides, saponinas e óleos essenciais. Contém propriedades adstringentes, anti-inflamatórias e cicatrizantes. Útil no tratamento de problemas de pele e mucosas.",
  },
  {
    id: 43,
    nomePlanta: "Hibisco",
    nomeCientifico: "Hibiscus sabdariffa",
    indicacoes: "Diurético e antioxidante, eficaz para pressão alta, obesidade, retenção de líquidos e colesterol.",
    modoPreparo:
      "Chá: 1 colher de sopa de flores secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome gelado.",
    contraindicacoes: "Pessoas com pressão baixa devem evitar. Pode potencializar medicamentos anti-hipertensivos.",
    tagsDoencas: "pressão alta, obesidade, retenção de líquidos, colesterol, diurético",
    propriedadesNutritivas:
      "Rica em antocianinas, flavonoides, ácidos orgânicos e vitamina C. Contém propriedades diuréticas, antioxidantes e hipolipemiantes. Ajuda a controlar a pressão arterial e o colesterol.",
  },
  {
    id: 44,
    nomePlanta: "Ipê-roxo",
    nomeCientifico: "Handroanthus impetiginosus",
    indicacoes:
      "Imunoestimulante e antifúngica, eficaz para candidíase, infecções, baixa imunidade e problemas de pele.",
    modoPreparo:
      "Chá: 1 colher de sopa de casca seca para 1 xícara de água. Ferva por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Gestantes e lactantes devem evitar. Pode causar náuseas em doses altas.",
    tagsDoencas: "candidíase, infecções, baixa imunidade, problemas de pele, antifúngico",
    propriedadesNutritivas:
      "Rica em lapachol, xiloidina, flavonoides e quinonas. Contém propriedades imunoestimulantes, antifúngicas e antibacterianas. Auxilia no combate a infecções e fortalece o sistema imunológico.",
  },
  {
    id: 45,
    nomePlanta: "Jaborandi",
    nomeCientifico: "Pilocarpus microphyllus",
    indicacoes: "Estimulante capilar, eficaz para queda de cabelo, caspa, couro cabeludo oleoso e calvície.",
    modoPreparo:
      "Uso tópico: loção capilar com extrato. Chá para enxágue: 1 colher de sopa de folhas para 1 litro de água.",
    contraindicacoes: "Não usar internamente. Pode causar sudorese excessiva e problemas cardíacos.",
    tagsDoencas: "queda de cabelo, caspa, couro cabeludo oleoso, calvície, capilar",
    propriedadesNutritivas:
      "Rica em pilocarpina, pilocarpidina e outros alcaloides. Contém propriedades estimulantes da circulação capilar e do crescimento do cabelo. Usar apenas para uso externo.",
  },
  {
    id: 46,
    nomePlanta: "Jasmim",
    nomeCientifico: "Jasminum officinale",
    indicacoes: "Relaxante e afrodisíaco, eficaz para ansiedade, depressão, tensão e problemas de libido.",
    modoPreparo:
      "Chá: 1 colher de chá de flores secas para 1 xícara de água quente. Óleo essencial: aromaterapia ou massagem.",
    contraindicacoes: "Pode causar sonolência. Evitar em excesso durante a gravidez.",
    tagsDoencas: "ansiedade, depressão, tensão, problemas de libido, relaxante",
    propriedadesNutritivas:
      "Contém compostos aromáticos como linalol, benzil acetato e indóis. Possui propriedades relaxantes, ansiolíticas e afrodisíacas. O aroma é conhecido por melhorar o humor e reduzir o estresse.",
  },
  {
    id: 47,
    nomePlanta: "Jurubeba",
    nomeCientifico: "Solanum paniculatum",
    indicacoes: "Digestiva e hepatoprotetora, eficaz para problemas hepáticos, má digestão, anemia e falta de apetite.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome antes das refeições.",
    contraindicacoes: "Gestantes devem evitar. Pode ser tóxica em doses altas.",
    tagsDoencas: "problemas hepáticos, má digestão, anemia, falta de apetite, digestivo",
    propriedadesNutritivas:
      "Rica em saponinas, flavonoides, alcaloides e taninos. Contém propriedades digestivas, hepatoprotetoras e tônicas. Auxilia na melhora do apetite e na digestão.",
  },
  {
    id: 48,
    nomePlanta: "Kava-kava",
    nomeCientifico: "Piper methysticum",
    indicacoes: "Ansiolítico natural, eficaz para ansiedade, estresse, insônia e tensão muscular.",
    modoPreparo:
      "Extrato padronizado: seguir orientação médica. Chá: 1 colher de chá de raiz seca para 1 xícara de água fria (maceração).",
    contraindicacoes: "Pode causar danos hepáticos. Não usar com álcool ou medicamentos sedativos. Consulte médico.",
    tagsDoencas: "ansiedade, estresse, insônia, tensão muscular, ansiolítico",
    propriedadesNutritivas:
      "Rica em kavalactonas (cavas, metisticina, yangonina). Contém propriedades ansiolíticas, sedativas e relaxantes musculares. Deve ser usada com extrema cautela devido ao risco de hepatotoxicidade.",
  },
  {
    id: 49,
    nomePlanta: "Limão",
    nomeCientifico: "Citrus limon",
    indicacoes:
      "Rico em vitamina C, eficaz para resfriados, gripes, digestão, desintoxicação e fortalecimento da imunidade.",
    modoPreparo: "Suco: 1 limão em água morna em jejum. Chá: casca de 1 limão para 1 xícara de água fervente.",
    contraindicacoes: "Pode causar erosão do esmalte dentário. Pessoas com úlceras gástricas devem evitar em jejum.",
    tagsDoencas: "resfriados, gripes, digestão, desintoxicação, imunidade, vitamina C",
    propriedadesNutritivas:
      "Excelente fonte de vitamina C, flavonoides (hesperidina, naringenina) e ácido cítrico. Contém propriedades antioxidantes, imunoestimulantes e digestivas. Auxilia na absorção de ferro.",
  },
  {
    id: 50,
    nomePlanta: "Losna",
    nomeCientifico: "Artemisia absinthium",
    indicacoes:
      "Digestiva e vermífuga, eficaz para má digestão, vermes intestinais, falta de apetite e problemas hepáticos.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome com moderação.",
    contraindicacoes:
      "Gestantes devem evitar completamente. Pode ser tóxica em doses altas. Não usar por períodos prolongados.",
    tagsDoencas: "má digestão, vermes intestinais, falta de apetite, problemas hepáticos, digestivo",
    propriedadesNutritivas:
      "Rica em tujona, absintina, anetol e flavonoides. Contém propriedades digestivas, vermífugas e tônicas. Usar com extrema cautela devido à toxicidade potencial.",
  },
  {
    id: 51,
    nomePlanta: "Macela",
    nomeCientifico: "Achyrocline satureioides",
    indicacoes: "Digestiva e anti-inflamatória, eficaz para problemas digestivos, cólicas, gastrite e inflamações.",
    modoPreparo:
      "Chá: 1 colher de sopa de flores secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome após as refeições.",
    contraindicacoes: "Pessoas alérgicas a plantas da família Asteraceae devem evitar.",
    tagsDoencas: "problemas digestivos, cólicas, gastrite, inflamações, digestivo",
    propriedadesNutritivas:
      "Rica em flavonoides (apigenina, luteolina), óleos essenciais e taninos. Contém propriedades anti-inflamatórias, antiespasmódicas e digestivas. Auxilia no alívio de dores e inflamações gastrointestinais.",
  },
  {
    id: 52,
    nomePlanta: "Malva",
    nomeCientifico: "Malva sylvestris",
    indicacoes:
      "Emoliente e anti-inflamatória, eficaz para tosse, bronquite, inflamações da garganta e problemas de pele.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Gargarejo ou uso tópico.",
    contraindicacoes: "Pode interferir na absorção de medicamentos orais. Tomar com intervalo de 2 horas.",
    tagsDoencas: "tosse, bronquite, inflamações da garganta, problemas de pele, emoliente",
    propriedadesNutritivas:
      "Rica em mucilagens, flavonoides, antocianinas e taninos. Contém propriedades emolientes, anti-inflamatórias e expectorantes. Forma uma camada protetora nas mucosas.",
  },
  {
    id: 53,
    nomePlanta: "Maracujá",
    nomeCientifico: "Passiflora incarnata",
    indicacoes: "Calmante natural, eficaz para ansiedade, insônia, nervosismo, hiperatividade e dores de cabeça.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome à noite.",
    contraindicacoes: "Pode potencializar medicamentos sedativos. Evitar antes de dirigir.",
    tagsDoencas: "ansiedade, insônia, nervosismo, hiperatividade, dores de cabeça, calmante",
    propriedadesNutritivas:
      "Rica em flavonoides (apigenina, vitexina), alcaloides e cumarinas. Contém propriedades sedativas, ansiolíticas e hipnóticas. Auxilia no relaxamento e na melhora do sono.",
  },
  {
    id: 54,
    nomePlanta: "Melissa",
    nomeCientifico: "Melissa officinalis",
    indicacoes: "Calmante e digestiva, eficaz para ansiedade, insônia, problemas digestivos, herpes e palpitações.",
    modoPreparo:
      "Chá: 2 colheres de sopa de folhas frescas para 1 xícara de água fervente. Infusão por 10 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pode potencializar medicamentos sedativos. Pessoas com hipotireoidismo devem usar com cautela.",
    tagsDoencas: "ansiedade, insônia, problemas digestivos, herpes, palpitações, calmante",
    propriedadesNutritivas:
      "Rica em ácido rosmarínico, citral, geraniol, flavonoides e taninos. Fonte de vitamina C, cálcio e magnésio. Possui propriedades antivirais, antioxidantes e neuroprotectoras.",
  },
  {
    id: 55,
    nomePlanta: "Mil-folhas",
    nomeCientifico: "Achillea millefolium",
    indicacoes:
      "Cicatrizante e anti-inflamatória, eficaz para feridas, hemorragias, problemas menstruais e digestivos.",
    modoPreparo:
      "Chá: 1 colher de sopa de flores secas para 1 xícara de água fervente. Infusão por 10 minutos. Uso tópico em feridas.",
    contraindicacoes: "Gestantes devem evitar. Pode causar fotossensibilidade em pessoas sensíveis.",
    tagsDoencas: "feridas, hemorragias, problemas menstruais, digestivos, cicatrizante",
    propriedadesNutritivas:
      "Rica em lactonas sesquiterpênicas (partenolida), flavonoides, cumarinas e taninos. Contém propriedades anti-inflamatórias, antiespasmódicas e cicatrizantes. Auxilia na coagulação sanguínea.",
  },
  {
    id: 56,
    nomePlanta: "Mulungu",
    nomeCientifico: "Erythrina mulungu",
    indicacoes: "Calmante e sedativo, eficaz para ansiedade, insônia, agitação, epilepsia e hiperatividade.",
    modoPreparo: "Chá: 1 colher de sopa de casca seca para 1 xícara de água. Ferva por 15 minutos. Tome à noite.",
    contraindicacoes: "Pode causar sonolência excessiva. Não usar com álcool ou medicamentos sedativos.",
    tagsDoencas: "ansiedade, insônia, agitação, epilepsia, hiperatividade, sedativo",
    propriedadesNutritivas:
      "Rica em eritramina, eritramina, erisodina e outros alcaloides. Contém propriedades sedativas, ansiolíticas e relaxantes musculares. Auxilia no tratamento de insônia e agitação.",
  },
  {
    id: 57,
    nomePlanta: "Neem",
    nomeCientifico: "Azadirachta indica",
    indicacoes: "Antibacteriana e antifúngica, eficaz para problemas de pele, acne, caspa, diabetes e parasitas.",
    modoPreparo:
      "Uso tópico: óleo ou extrato em cremes. Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente (uso externo).",
    contraindicacoes: "Não usar internamente sem orientação médica. Gestantes e crianças devem evitar.",
    tagsDoencas: "problemas de pele, acne, caspa, diabetes, parasitas, antibacteriano",
    propriedadesNutritivas:
      "Rica em azadiractina, nimbina, nimbinina e flavonoides. Contém propriedades antibacterianas, antifúngicas, antivirais e inseticidas. Usar com cautela, principalmente internamente.",
  },
  {
    id: 58,
    nomePlanta: "Orégano",
    nomeCientifico: "Origanum vulgare",
    indicacoes:
      "Antibiótico natural, eficaz para infecções respiratórias, digestão, fungos e fortalecimento da imunidade.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Óleo essencial: inalação.",
    contraindicacoes: "Gestantes devem evitar em grandes quantidades. Pode causar irritação em peles sensíveis.",
    tagsDoencas: "infecções respiratórias, digestão, fungos, imunidade, antibiótico",
    propriedadesNutritivas:
      "Rico em carvacrol, timol, ácido rosmarínico e flavonoides. Fonte de vitamina K, ferro, cálcio, magnésio e fibras. Contém potentes propriedades antibacterianas, antifúngicas e antioxidantes.",
  },
  {
    id: 59,
    nomePlanta: "Pata-de-vaca",
    nomeCientifico: "Bauhinia forficata",
    indicacoes: "Hipoglicemiante natural, eficaz para diabetes, problemas renais, cistite e infecções urinárias.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pessoas que usam medicamentos para diabetes devem monitorar glicemia. Pode causar hipoglicemia.",
    tagsDoencas: "diabetes, problemas renais, cistite, infecções urinárias, hipoglicemiante",
    propriedadesNutritivas:
      "Rica em flavonoides, taninos, saponinas e alcaloides. Contém propriedades hipoglicemiantes, diuréticas e anti-inflamatórias. Auxilia no controle da glicemia.",
  },
  {
    id: 60,
    nomePlanta: "Pau-d'arco",
    nomeCientifico: "Tabebuia impetiginosa",
    indicacoes:
      "Antifúngico e imunoestimulante, eficaz para candidíase, infecções, baixa imunidade e problemas de pele.",
    modoPreparo:
      "Chá: 1 colher de sopa de casca seca para 1 xícara de água. Ferva por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Gestantes e lactantes devem evitar. Pode causar náuseas e tonturas em doses altas.",
    tagsDoencas: "candidíase, infecções, baixa imunidade, problemas de pele, antifúngico",
    propriedadesNutritivas:
      "Rica em lapachol, xiloidina, quinonas e flavonoides. Contém propriedades antifúngicas, antibacterianas, antivirais e imunoestimulantes. Auxilia no combate a infecções e fortalece o sistema imunológico.",
  },
  {
    id: 61,
    nomePlanta: "Picão-preto",
    nomeCientifico: "Bidens pilosa",
    indicacoes:
      "Hepatoprotetor e anti-inflamatório, eficaz para problemas hepáticos, icterícia, diabetes e hipertensão.",
    modoPreparo:
      "Chá: 1 colher de sopa de planta inteira seca para 1 xícara de água fervente. Infusão por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pessoas com pressão baixa devem usar com cautela. Pode potencializar medicamentos hipotensores.",
    tagsDoencas: "problemas hepáticos, icterícia, diabetes, hipertensão, hepatoprotetor",
    propriedadesNutritivas:
      "Rica em flavonoides, ácidos fenólicos, saponinas e óleos essenciais. Contém propriedades hepatoprotetoras, anti-inflamatórias e hipoglicemiantes. Auxilia na desintoxicação do fígado.",
  },
  {
    id: 62,
    nomePlanta: "Plantago",
    nomeCientifico: "Plantago major",
    indicacoes:
      "Cicatrizante e anti-inflamatória, eficaz para feridas, picadas de insetos, tosse, bronquite e inflamações.",
    modoPreparo:
      "Uso tópico: folhas frescas amassadas sobre feridas. Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente.",
    contraindicacoes: "Pode interferir na absorção de medicamentos orais. Usar com intervalo de 2 horas.",
    tagsDoencas: "feridas, picadas de insetos, tosse, bronquite, inflamações, cicatrizante",
    propriedadesNutritivas:
      "Rica em mucilagens, aucubina, iridoides e flavonoides. Contém propriedades emolientes, anti-inflamatórias, cicatrizantes e expectorantes. Auxilia na cicatrização de feridas e na redução da inflamação.",
  },
  {
    id: 63,
    nomePlanta: "Poejo",
    nomeCientifico: "Mentha pulegium",
    indicacoes: "Expectorante e digestivo, eficaz para tosse, bronquite, problemas digestivos e repelente de insetos.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome com moderação.",
    contraindicacoes:
      "Gestantes devem evitar completamente. Pode ser tóxico em doses altas. Não usar por períodos prolongados.",
    tagsDoencas: "tosse, bronquite, problemas digestivos, repelente de insetos, expectorante",
    propriedadesNutritivas:
      "Rica em pulegona, mentol, limoneno e flavonoides. Contém propriedades expectorantes, antiespasmódicas e carminativas. Usar com cautela devido à toxicidade potencial.",
  },
  {
    id: 64,
    nomePlanta: "Quebra-pedra",
    nomeCientifico: "Phyllanthus niruri",
    indicacoes: "Diurético e litolítico, eficaz para cálculos renais, problemas renais, cistite e infecções urinárias.",
    modoPreparo:
      "Chá: 1 colher de sopa de planta inteira seca para 1 xícara de água fervente. Infusão por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Pessoas com pressão baixa devem usar com cautela. Pode potencializar medicamentos diuréticos.",
    tagsDoencas: "cálculos renais, problemas renais, cistite, infecções urinárias, diurético",
    propriedadesNutritivas:
      "Rica em lignanas, flavonoides, taninos e alcaloides. Contém propriedades diuréticas, litolíticas, hepatoprotetoras e antivirais. Auxilia na eliminação de cálculos renais e na proteção do fígado.",
  },
  {
    id: 65,
    nomePlanta: "Romã",
    nomeCientifico: "Punica granatum",
    indicacoes:
      "Adstringente e antioxidante, eficaz para diarreia, inflamações da boca, problemas cardiovasculares e envelhecimento.",
    modoPreparo:
      "Chá: 1 colher de sopa de casca seca para 1 xícara de água. Ferva por 15 minutos. Suco da fruta: consumo direto.",
    contraindicacoes: "Pode interferir com medicamentos anticoagulantes. Evitar a casca da raiz (tóxica).",
    tagsDoencas: "diarreia, inflamações da boca, problemas cardiovasculares, envelhecimento, antioxidante",
    propriedadesNutritivas:
      "Rica em punicalaginas, antocianinas, flavonoides e vitamina C. Contém potentes propriedades antioxidantes, anti-inflamatórias e adstringentes. Beneficia a saúde cardiovascular e a pele.",
  },
  {
    id: 66,
    nomePlanta: "Sabugueiro",
    nomeCientifico: "Sambucus canadensis",
    indicacoes: "Expectorante e sudorífico, eficaz para resfriados, gripes, febre, tosse e infecções respiratórias.",
    modoPreparo:
      "Chá: 1 colher de sopa de flores secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome quente 2-3 vezes ao dia.",
    contraindicacoes:
      "Não usar folhas, casca ou frutos crus (podem ser tóxicos). Apenas flores e frutos maduros cozidos.",
    tagsDoencas: "resfriados, gripes, febre, tosse, infecções respiratórias, expectorante",
    propriedadesNutritivas:
      "Rica em flavonoides (antocianinas), antocianinas, ácidos fenólicos e vitaminas A e C. Contém propriedades antivirais, anti-inflamatórias e imunoestimulantes. Auxilia no combate a gripes e resfriados.",
  },
  {
    id: 67,
    nomePlanta: "Sálvia",
    nomeCientifico: "Salvia officinalis",
    indicacoes:
      "Adstringente e antisséptica, eficaz para inflamações da boca, sudorese excessiva, problemas digestivos e memória.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Gargarejo para boca.",
    contraindicacoes: "Gestantes e lactantes devem evitar. Pode reduzir a produção de leite materno.",
    tagsDoencas: "inflamações da boca, sudorese excessiva, problemas digestivos, memória, adstringente",
    propriedadesNutritivas:
      "Rica em cânfora, cineol, borneol, flavonoides e taninos. Contém propriedades antissépticas, adstringentes e antioxidantes. Auxilia na saúde bucal e na melhora da memória.",
  },
  {
    id: 68,
    nomePlanta: "Sene",
    nomeCientifico: "Senna alexandrina",
    indicacoes: "Laxativo potente, eficaz para constipação intestinal e preparação para exames médicos.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome à noite.",
    contraindicacoes:
      "Não usar por mais de 7 dias consecutivos. Gestantes, crianças e pessoas com problemas intestinais devem evitar.",
    tagsDoencas: "constipação intestinal, laxativo, preparação para exames",
    propriedadesNutritivas:
      "Rica em antraquinonas (senosídeos A e B). Contém propriedades laxativas potentes. Deve ser usada com moderação e por curtos períodos devido ao risco de dependência e cólicas.",
  },
  {
    id: 69,
    nomePlanta: "Tanchagem",
    nomeCientifico: "Plantago major",
    indicacoes:
      "Cicatrizante e expectorante, eficaz para feridas, tosse, bronquite, inflamações da garganta e picadas.",
    modoPreparo:
      "Uso tópico: folhas frescas amassadas. Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Gargarejo.",
    contraindicacoes: "Pode interferir na absorção de medicamentos orais. Usar com intervalo de 2 horas.",
    tagsDoencas: "feridas, tosse, bronquite, inflamações da garganta, picadas, cicatrizante",
    propriedadesNutritivas:
      "Rica em mucilagens, aucubina, iridoides e flavonoides. Contém propriedades emolientes, anti-inflamatórias, cicatrizantes e expectorantes. Auxilia na cicatrização de feridas e na redução da inflamação.",
  },
  {
    id: 70,
    nomePlanta: "Tomilho",
    nomeCientifico: "Thymus vulgaris",
    indicacoes:
      "Antisséptico e expectorante, eficaz para tosse, bronquite, infecções respiratórias e problemas digestivos.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Inalação com vapor.",
    contraindicacoes: "Gestantes devem evitar em grandes quantidades. Pode causar irritação em peles sensíveis.",
    tagsDoencas: "tosse, bronquite, infecções respiratórias, problemas digestivos, antisséptico",
    propriedadesNutritivas:
      "Rico em timol, carvacrol, borneol, flavonoides e taninos. Contém propriedades antissépticas, expectorantes, antioxidantes e antiespasmódicas. Eficaz contra infecções respiratórias e problemas digestivos.",
  },
  {
    id: 71,
    nomePlanta: "Unha-de-gato",
    nomeCientifico: "Uncaria tomentosa",
    indicacoes:
      "Imunoestimulante e anti-inflamatória, eficaz para artrite, baixa imunidade, infecções e problemas digestivos.",
    modoPreparo: "Chá: 1 colher de chá de casca seca para 1 xícara de água. Ferva por 15 minutos. Tome 2 vezes ao dia.",
    contraindicacoes:
      "Gestantes, lactantes e pessoas com doenças autoimunes devem evitar. Pode interagir com medicamentos.",
    tagsDoencas: "artrite, baixa imunidade, infecções, problemas digestivos, imunoestimulante",
    propriedadesNutritivas:
      "Rica em alcaloides oxindólicos (alcaloides da unha-de-gato), flavonoides e taninos. Contém propriedades imunoestimulantes, anti-inflamatórias e antioxidantes. Auxilia no tratamento de artrite e infecções.",
  },
  {
    id: 72,
    nomePlanta: "Urtiga",
    nomeCientifico: "Urtica dioica",
    indicacoes:
      "Depurativa e diurética, eficaz para artrite, alergias, anemia, queda de cabelo e problemas de próstata.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes:
      "Pode interagir com medicamentos diuréticos e anti-hipertensivos. Usar folhas secas (frescas causam irritação).",
    tagsDoencas: "artrite, alergias, anemia, queda de cabelo, problemas de próstata, depurativo",
    propriedadesNutritivas:
      "Rica em vitaminas (A, C, K), minerais (ferro, cálcio, magnésio, potássio), flavonoides e compostos fenólicos. Contém propriedades diuréticas, depurativas, anti-inflamatórias e remineralizantes. Auxilia no tratamento de anemia e problemas de pele.",
  },
  {
    id: 73,
    nomePlanta: "Valeriana",
    nomeCientifico: "Valeriana officinalis",
    indicacoes: "Sedativo natural, eficaz para insônia, ansiedade, nervosismo, estresse e tensão muscular.",
    modoPreparo:
      "Chá: 1 colher de chá de raiz seca para 1 xícara de água fria. Deixe de molho por 12 horas. Tome à noite.",
    contraindicacoes:
      "Pode causar sonolência excessiva. Não usar com álcool ou medicamentos sedativos. Evitar dirigir.",
    tagsDoencas: "insônia, ansiedade, nervosismo, estresse, tensão muscular, sedativo",
    propriedadesNutritivas:
      "Rica em ácidos valerênicos, valerianina, GABA e flavonoides. Contém propriedades sedativas, ansiolíticas e hipnóticas. Auxilia no relaxamento e na melhora da qualidade do sono.",
  },
  {
    id: 74,
    nomePlanta: "Verbena",
    nomeCientifico: "Verbena officinalis",
    indicacoes: "Calmante e digestiva, eficaz para ansiedade, depressão, problemas digestivos e dores de cabeça.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Gestantes devem evitar. Pode potencializar medicamentos sedativos.",
    tagsDoencas: "ansiedade, depressão, problemas digestivos, dores de cabeça, calmante",
    propriedadesNutritivas:
      "Rica em verbenalina, iridoides, flavonoides e taninos. Contém propriedades calmantes, digestivas e anti-inflamatórias. Auxilia no alívio de ansiedade e problemas digestivos.",
  },
  {
    id: 75,
    nomePlanta: "Violeta",
    nomeCientifico: "Viola odorata",
    indicacoes: "Expectorante e emoliente, eficaz para tosse, bronquite, problemas de pele, eczema e inflamações.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Uso tópico em compressas.",
    contraindicacoes: "Pode causar náuseas em doses altas. Evitar uso interno prolongado.",
    tagsDoencas: "tosse, bronquite, problemas de pele, eczema, inflamações, expectorante",
    propriedadesNutritivas:
      "Rica em saponinas, flavonoides, mucilagens e antocianinas. Contém propriedades emolientes, expectorantes e anti-inflamatórias. Auxilia no alívio de tosse e inflamações.",
  },
  {
    id: 76,
    nomePlanta: "Açafrão",
    nomeCientifico: "Crocus sativus",
    indicacoes: "Antidepressivo e digestivo, eficaz para depressão, ansiedade, problemas menstruais e digestão.",
    modoPreparo:
      "Chá: uma pitada (0,1g) de estigmas para 1 xícara de água quente. Infusão por 10 minutos. Use com moderação.",
    contraindicacoes:
      "Gestantes devem evitar (pode causar aborto). Doses altas são tóxicas. Muito caro, use com parcimônia.",
    tagsDoencas: "depressão, ansiedade, problemas menstruais, digestão, antidepressivo",
    propriedadesNutritivas:
      "Rico em crocina, safranal, picrocrocina e flavonoides. Contém propriedades antidepressivas, ansiolíticas e antioxidantes. É um dos temperos mais caros do mundo.",
  },
  {
    id: 77,
    nomePlanta: "Agrião",
    nomeCientifico: "Nasturtium officinale",
    indicacoes:
      "Rico em vitaminas, eficaz para anemia, escorbuto, problemas respiratórios e fortalecimento da imunidade.",
    modoPreparo: "Consumo in natura: em saladas. Suco: 1 xícara de folhas frescas batidas com água. Tome em jejum.",
    contraindicacoes: "Pessoas com problemas renais devem evitar. Pode causar irritação gástrica em excesso.",
    tagsDoencas: "anemia, escorbuto, problemas respiratórios, imunidade, vitaminas",
    propriedadesNutritivas:
      "Excelente fonte de vitaminas A, C, K, cálcio, ferro, magnésio e potássio. Contém glucosinolatos e antioxidantes. Auxilia na prevenção de anemia e fortalece o sistema imunológico.",
  },
  {
    id: 78,
    nomePlanta: "Aipo",
    nomeCientifico: "Apium graveolens",
    indicacoes: "Diurético e hipotensor, eficaz para pressão alta, retenção de líquidos, artrite e problemas renais.",
    modoPreparo:
      "Suco: 1 talo fresco batido com água. Chá: 1 colher de sopa de sementes para 1 xícara de água fervente.",
    contraindicacoes: "Gestantes devem evitar as sementes. Pode causar fotossensibilidade.",
    tagsDoencas: "pressão alta, retenção de líquidos, artrite, problemas renais, diurético",
    propriedadesNutritivas:
      "Rico em fitoquímicos (ftalídeos), vitaminas (K, C, A) e minerais (potássio, sódio). Contém propriedades diuréticas, anti-inflamatórias e hipotensoras. Auxilia no controle da pressão arterial.",
  },
  {
    id: 79,
    nomePlanta: "Alho",
    nomeCientifico: "Allium sativum",
    indicacoes:
      "Antibiótico natural, eficaz para infecções, pressão alta, colesterol, problemas circulatórios e imunidade.",
    modoPreparo: "Consumo in natura: 1-2 dentes crus por dia. Chá: 2 dentes amassados em 1 xícara de água quente.",
    contraindicacoes:
      "Pode potencializar medicamentos anticoagulantes. Evitar antes de cirurgias. Pode causar mau hálito.",
    tagsDoencas: "infecções, pressão alta, colesterol, problemas circulatórios, imunidade, antibiótico",
    propriedadesNutritivas:
      "Rico em alicina, compostos sulfurados, vitaminas (C, B6) e minerais (manganês, selênio). Contém potentes propriedades antibacterianas, antivirais, antifúngicas e antioxidantes. Auxilia na saúde cardiovascular.",
  },
  {
    id: 80,
    nomePlanta: "Amora",
    nomeCientifico: "Morus nigra",
    indicacoes: "Rica em antioxidantes, eficaz para diabetes, problemas cardiovasculares, menopausa e envelhecimento.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Frutos: consumo in natura ou suco.",
    contraindicacoes: "Pessoas que usam medicamentos para diabetes devem monitorar glicemia.",
    tagsDoencas: "diabetes, problemas cardiovasculares, menopausa, envelhecimento, antioxidante",
    propriedadesNutritivas:
      "Rica em antocianinas, flavonoides, resveratrol, vitaminas (C, K) e minerais (ferro, potássio). Contém propriedades antioxidantes, anti-inflamatórias e hipoglicemiantes. Beneficia a saúde cardiovascular e o controle do açúcar no sangue.",
  },
  {
    id: 81,
    nomePlanta: "Aroeira",
    nomeCientifico: "Schinus terebinthifolius",
    indicacoes:
      "Cicatrizante e anti-inflamatória, eficaz para feridas, úlceras, inflamações urogenitais e problemas de pele.",
    modoPreparo:
      "Uso tópico: decocção das folhas para lavagens. Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente.",
    contraindicacoes: "Pode causar reações alérgicas. Evitar uso interno prolongado.",
    tagsDoencas: "feridas, úlceras, inflamações urogenitais, problemas de pele, cicatrização",
    propriedadesNutritivas:
      "Rica em taninos, flavonoides, terpenos e óleos essenciais. Contém propriedades adstringentes, anti-inflamatórias e cicatrizantes. Usar principalmente para uso tópico.",
  },
  {
    id: 82,
    nomePlanta: "Bálsamo",
    nomeCientifico: "Sedum dendroideum",
    indicacoes:
      "Cicatrizante e anti-inflamatório, eficaz para feridas, queimaduras, cortes, calos e problemas de pele.",
    modoPreparo: "Uso tópico: folhas frescas amassadas diretamente sobre feridas. Pode ser usado como cataplasma.",
    contraindicacoes: "Apenas para uso externo. Não há contraindicações conhecidas para uso tópico.",
    tagsDoencas: "feridas, queimaduras, cortes, calos, problemas de pele, cicatrização",
    propriedadesNutritivas:
      "Rica em mucilagens, flavonoides e ácidos orgânicos. Contém propriedades cicatrizantes, anti-inflamatórias e hidratantes. Auxilia na regeneração da pele e na cicatrização de feridas.",
  },
  {
    id: 83,
    nomePlanta: "Beldroega",
    nomeCientifico: "Portulaca oleracea",
    indicacoes: "Rica em ômega-3, eficaz para inflamações, problemas de pele, feridas, queimaduras e nutrição.",
    modoPreparo:
      "Consumo in natura: em saladas. Uso tópico: folhas frescas amassadas sobre feridas. Suco: folhas batidas com água.",
    contraindicacoes: "Pessoas com cálculos renais devem evitar (rica em oxalatos).",
    tagsDoencas: "inflamações, problemas de pele, feridas, queimaduras, nutrição, ômega-3",
    propriedadesNutritivas:
      "Excelente fonte de ácidos graxos ômega-3, vitaminas (A, C, E) e minerais (potássio, magnésio). Contém propriedades anti-inflamatórias e antioxidantes. Rica em antioxidantes que combatem o envelhecimento celular.",
  },
  {
    id: 84,
    nomePlanta: "Berinjela",
    nomeCientifico: "Solanum melongena",
    indicacoes: "Hipocolesterolemiante, eficaz para colesterol alto, diabetes, obesidade e problemas cardiovasculares.",
    modoPreparo:
      "Água de berinjela: 1 berinjela cortada em 1 litro de água, deixe de molho por 12 horas. Tome em jejum.",
    contraindicacoes: "Pessoas com artrite podem ter sensibilidade (contém solanina). Consumir com moderação.",
    tagsDoencas: "colesterol alto, diabetes, obesidade, problemas cardiovasculares, hipocolesterolemiante",
    propriedadesNutritivas:
      "Rica em fibras, antocianinas (nas variedades roxas), vitaminas (B1, B6) e minerais (potássio, magnésio). Contém propriedades hipocolesterolemiantes e antioxidantes. Auxilia no controle do colesterol e da glicemia.",
  },
  {
    id: 85,
    nomePlanta: "Borragem",
    nomeCientifico: "Borago officinalis",
    indicacoes:
      "Rica em ômega-6, eficaz para problemas de pele, eczema, artrite, síndrome pré-menstrual e inflamações.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Óleo das sementes: uso tópico ou suplemento.",
    contraindicacoes: "Contém alcaloides pirrolizidínicos. Não usar internamente por períodos prolongados.",
    tagsDoencas: "problemas de pele, eczema, artrite, síndrome pré-menstrual, inflamações, ômega-6",
    propriedadesNutritivas:
      "O óleo das sementes é rico em ácido gama-linolênico (GLA), um ômega-6. Contém propriedades anti-inflamatórias e benéficas para a pele. Usar com cautela devido à presença de alcaloides pirrolizidínicos.",
  },
  {
    id: 86,
    nomePlanta: "Buchinha-do-norte",
    nomeCientifico: "Luffa operculata",
    indicacoes: "Descongestionante nasal, eficaz para sinusite, rinite, congestão nasal e problemas respiratórios.",
    modoPreparo: "Inalação: algumas gotas do extrato em água quente. NUNCA usar internamente ou em excesso.",
    contraindicacoes:
      "ALTAMENTE TÓXICA se usada internamente. Apenas inalação com orientação médica. Pode causar hemorragias.",
    tagsDoencas: "sinusite, rinite, congestão nasal, problemas respiratórios, descongestionante",
    propriedadesNutritivas:
      "Contém saponinas e outros compostos com propriedades irritantes e descongestionantes. Seu uso é restrito à inalação e deve ser feito com extrema cautela e orientação profissional.",
  },
  {
    id: 87,
    nomePlanta: "Caju",
    nomeCientifico: "Anacardium occidentale",
    indicacoes: "Adstringente e cicatrizante, eficaz para diarreia, feridas, inflamações da boca e problemas de pele.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Fruto: consumo in natura (rico em vitamina C).",
    contraindicacoes: "A castanha crua pode causar irritação. Pessoas alérgicas a nozes devem ter cuidado.",
    tagsDoencas: "diarreia, feridas, inflamações da boca, problemas de pele, adstringente",
    propriedadesNutritivas:
      "O fruto é rico em vitamina C. As folhas contêm taninos e flavonoides com propriedades adstringentes e anti-inflamatórias. A castanha é rica em gorduras e minerais.",
  },
  {
    id: 88,
    nomePlanta: "Cana-de-açúcar",
    nomeCientifico: "Saccharum officinarum",
    indicacoes: "Energética e diurética, eficaz para fadiga, problemas renais, icterícia e hidratação.",
    modoPreparo:
      "Caldo de cana: extraído da cana fresca. Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente.",
    contraindicacoes: "Diabéticos devem evitar o caldo (alto teor de açúcar). Consumir com moderação.",
    tagsDoencas: "fadiga, problemas renais, icterícia, hidratação, energético",
    propriedadesNutritivas:
      "O caldo é rico em sacarose, fornecendo energia rápida. As folhas contêm compostos com propriedades diuréticas. Contém minerais como cálcio e potássio.",
  },
  {
    id: 89,
    nomePlanta: "Capim-santo",
    nomeCientifico: "Cymbopogon citratus",
    indicacoes: "Calmante e digestivo, eficaz para ansiedade, insônia, problemas digestivos, febre e dores de cabeça.",
    modoPreparo:
      "Chá: 2-3 folhas frescas ou 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos.",
    contraindicacoes: "Pessoas com pressão baixa devem usar com moderação. Pode potencializar medicamentos sedativos.",
    tagsDoencas: "ansiedade, insônia, problemas digestivos, febre, dores de cabeça, calmante",
    propriedadesNutritivas:
      "Rico em citral, geraniol, limoneno, flavonoides e vitamina C. Contém propriedades sedativas, digestivas e antioxidantes. Fonte de óleos essenciais com ação calmante.",
  },
  {
    id: 90,
    nomePlanta: "Carambola",
    nomeCientifico: "Averrhoa carambola",
    indicacoes: "Rica em vitamina C, eficaz para escorbuto, problemas renais, febre, hipertensão e imunidade.",
    modoPreparo:
      "Consumo in natura: frutos maduros. Suco: frutos batidos com água. Chá: 1 colher de sopa de folhas secas para 1 xícara de água.",
    contraindicacoes:
      "Pessoas com problemas renais graves devem evitar (rica em oxalatos). Pode ser tóxica para alguns.",
    tagsDoencas: "escorbuto, problemas renais, febre, hipertensão, imunidade, vitamina C",
    propriedadesNutritivas:
      "Fruto rico em vitamina C, fibras e antioxidantes. As folhas contêm compostos com propriedades diuréticas e anti-inflamatórias. Deve ser consumida com moderação por pessoas com problemas renais.",
  },
  {
    id: 91,
    nomePlanta: "Cebolinha",
    nomeCientifico: "Allium schoenoprasum",
    indicacoes:
      "Rica em vitaminas, eficaz para problemas digestivos, anemia, resfriados e fortalecimento da imunidade.",
    modoPreparo:
      "Consumo in natura: em saladas e pratos. Chá: 1 colher de sopa de folhas frescas para 1 xícara de água quente.",
    contraindicacoes: "Pessoas que usam anticoagulantes devem consumir com moderação.",
    tagsDoencas: "problemas digestivos, anemia, resfriados, imunidade, vitaminas",
    propriedadesNutritivas:
      "Fonte de vitaminas A, C, K, folato e minerais como cálcio e ferro. Contém compostos sulfurados com propriedades antioxidantes. Auxilia na digestão e no fortalecimento do sistema imunológico.",
  },
  {
    id: 92,
    nomePlanta: "Chicória",
    nomeCientifico: "Cichorium intybus",
    indicacoes:
      "Hepatoprotetora e digestiva, eficaz para problemas hepáticos, digestão, diabetes e depuração do sangue.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Consumo in natura: folhas em saladas.",
    contraindicacoes: "Gestantes devem evitar. Pode causar reações alérgicas em pessoas sensíveis.",
    tagsDoencas: "problemas hepáticos, digestão, diabetes, depuração do sangue, hepatoprotetor",
    propriedadesNutritivas:
      "Rica em inulina, lactucina, lactucopricina, vitaminas (A, K) e minerais (potássio). Contém propriedades hepatoprotetoras, digestivas e depurativas. Auxilia na saúde do fígado e na regulação da glicemia.",
  },
  {
    id: 93,
    nomePlanta: "Coentro",
    nomeCientifico: "Coriandrum sativum",
    indicacoes:
      "Digestivo e carminativo, eficaz para problemas digestivos, gases, náuseas e desintoxicação de metais pesados.",
    modoPreparo:
      "Chá: 1 colher de chá de sementes para 1 xícara de água fervente. Consumo in natura: folhas em pratos e saladas.",
    contraindicacoes: "Pessoas com pressão baixa devem usar com moderação. Pode causar fotossensibilidade.",
    tagsDoencas: "problemas digestivos, gases, náuseas, desintoxicação, digestivo",
    propriedadesNutritivas:
      "Rico em vitaminas (A, C, K), minerais (ferro, cálcio, magnésio) e antioxidantes. Contém propriedades digestivas, carminativas e quelantes de metais pesados. Auxilia na eliminação de toxinas.",
  },
  {
    id: 94,
    nomePlanta: "Cominho",
    nomeCientifico: "Cuminum cyminum",
    indicacoes: "Digestivo e carminativo, eficaz para problemas digestivos, gases, cólicas, má digestão e flatulência.",
    modoPreparo:
      "Chá: 1 colher de chá de sementes para 1 xícara de água fervente. Tempero: adicionar a alimentos durante o cozimento.",
    contraindicacoes: "Pessoas com diabetes devem monitorar glicemia (pode reduzir açúcar no sangue).",
    tagsDoencas: "problemas digestivos, gases, cólicas, má digestão, flatulência, digestivo",
    propriedadesNutritivas:
      "Rico em fibras, vitaminas (B1, B2, B3) e minerais (ferro, magnésio, cálcio). Contém propriedades digestivas, carminativas e antiespasmódicas. Auxilia na redução de gases e flatulência.",
  },
  {
    id: 95,
    nomePlanta: "Endro",
    nomeCientifico: "Anethum graveolens",
    indicacoes:
      "Digestivo e galactagogo, eficaz para problemas digestivos, gases, cólicas em bebês e produção de leite materno.",
    modoPreparo:
      "Chá: 1 colher de chá de sementes para 1 xícara de água fervente. Infusão por 10 minutos. Tome após as refeições.",
    contraindicacoes: "Gestantes devem evitar em grandes quantidades. Pode causar fotossensibilidade.",
    tagsDoencas: "problemas digestivos, gases, cólicas em bebês, produção de leite materno, digestivo",
    propriedadesNutritivas:
      "Rico em carvona, limoneno, flavonoides e vitamina C. Fonte de cálcio, ferro, manganês e fibras. Contém propriedades carminativas, antiespasmódicas e galactagogas. Auxilia na digestão e na produção de leite.",
  },
  {
    id: 96,
    nomePlanta: "Erva-baleeira",
    nomeCientifico: "Cordia verbenacea",
    indicacoes:
      "Anti-inflamatória e analgésica, eficaz para dores musculares, artrite, contusões, reumatismo e inflamações.",
    modoPreparo:
      "Uso tópico: pomada ou gel com extrato. Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente.",
    contraindicacoes: "Gestantes devem evitar. Pode causar irritação em peles muito sensíveis.",
    tagsDoencas: "dores musculares, artrite, contusões, reumatismo, inflamações, anti-inflamatório",
    propriedadesNutritivas:
      "Rica em diterpenos (cordiabranina A), flavonoides e taninos. Contém propriedades anti-inflamatórias e analgésicas potentes. Utilizada topicamente para alívio de dores e inflamações.",
  },
  {
    id: 97,
    nomePlanta: "Fedegoso",
    nomeCientifico: "Senna occidentalis",
    indicacoes:
      "Laxativo e depurativo, eficaz para constipação, problemas de pele, feridas, eczema e depuração do sangue.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Uso tópico: folhas frescas amassadas sobre feridas.",
    contraindicacoes: "Não usar por períodos prolongados. Gestantes e crianças devem evitar. Pode causar diarreia.",
    tagsDoencas: "constipação, problemas de pele, feridas, eczema, depuração do sangue, laxativo",
    propriedadesNutritivas:
      "Contém antraquinonas e outros compostos com propriedades laxativas e depurativas. Usar com cautela e por curtos períodos. O uso tópico pode auxiliar na cicatrização.",
  },
  {
    id: 98,
    nomePlanta: "Gervão",
    nomeCientifico: "Stachytarpheta cayennensis",
    indicacoes: "Digestiva e hepatoprotetora, eficaz para problemas hepáticos, má digestão, gastrite e inflamações.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Tome antes das refeições.",
    contraindicacoes: "Gestantes devem evitar. Pode causar sonolência em doses altas.",
    tagsDoencas: "problemas hepáticos, má digestão, gastrite, inflamações, digestivo",
    propriedadesNutritivas:
      "Rica em flavonoides, taninos, saponinas e óleos essenciais. Contém propriedades hepatoprotetoras, digestivas e anti-inflamatórias. Fonte de compostos bioativos específicos.",
  },
  {
    id: 99,
    nomePlanta: "Manjerona",
    nomeCientifico: "Origanum majorana",
    indicacoes:
      "Digestiva e calmante, eficaz para problemas digestivos, ansiedade, insônia, dores de cabeça e resfriados.",
    modoPreparo:
      "Chá: 1 colher de chá de folhas secas para 1 xícara de água fervente. Infusão por 10 minutos. Tome 2-3 vezes ao dia.",
    contraindicacoes: "Gestantes devem evitar em grandes quantidades. Pode potencializar medicamentos sedativos.",
    tagsDoencas: "problemas digestivos, ansiedade, insônia, dores de cabeça, resfriados, calmante",
    propriedadesNutritivas:
      "Rica em terpineno, sabineno, linalol e flavonoides. Fonte de vitamina A, C, ferro e cálcio. Contém propriedades sedativas, digestivas e antioxidantes.",
  },
  {
    id: 100,
    nomePlanta: "Pitanga",
    nomeCientifico: "Eugenia uniflora",
    indicacoes:
      "Adstringente e anti-inflamatória, eficaz para diarreia, problemas digestivos, febre, hipertensão e diabetes.",
    modoPreparo:
      "Chá: 1 colher de sopa de folhas secas para 1 xícara de água fervente. Infusão por 15 minutos. Frutos: consumo in natura.",
    contraindicacoes: "Pessoas com pressão baixa devem usar com cautela. Pode potencializar medicamentos hipotensores.",
    tagsDoencas: "diarreia, problemas digestivos, febre, hipertensão, diabetes, adstringente",
    propriedadesNutritivas:
      "Rica em taninos, flavonoides, óleos essenciais e vitamina C. Os frutos contêm antocianinas, carotenoides e fibras. Propriedades adstringentes, antioxidantes e hipoglicemiantes.",
  },
]

export const diseaseCategories: DiseaseCategory[] = [
  {
    id: "digestivo",
    name: "Sistema Digestivo",
    diseases: [
      { id: "gastrite", name: "Gastrite e Úlceras", plantIds: [1, 10, 51, 98] },
      {
        id: "ma-digestao",
        name: "Má Digestão",
        plantIds: [2, 4, 8, 10, 13, 15, 16, 19, 26, 33, 47, 50, 51, 54, 58, 61, 92, 93, 94, 95, 98, 99, 100],
      },
      { id: "nausea", name: "Náusea e Enjoo", plantIds: [2, 4, 93] },
      { id: "gases", name: "Gases e Cólicas", plantIds: [1, 8, 15, 20, 33, 35, 38, 94, 95] },
      { id: "constipacao", name: "Constipação", plantIds: [5, 8, 68, 97] },
      { id: "figado", name: "Problemas Hepáticos", plantIds: [8, 14, 16, 21, 26, 32, 47, 50, 61, 92, 98] },
      { id: "diarreia", name: "Diarreia", plantIds: [65, 87, 100] },
    ],
  },
  {
    id: "respiratorio",
    name: "Sistema Respiratório",
    diseases: [
      { id: "tosse", name: "Tosse e Bronquite", plantIds: [7, 9, 15, 19, 20, 25, 34, 52, 62, 63, 66, 69, 70, 75] },
      { id: "resfriado", name: "Resfriados e Gripes", plantIds: [2, 4, 7, 9, 24, 34, 49, 58, 66, 77, 91, 99] },
      { id: "sinusite", name: "Sinusite e Congestão", plantIds: [2, 7, 86] },
      { id: "asma", name: "Asma", plantIds: [9] },
      { id: "infeccoes-respiratorias", name: "Infecções Respiratórias", plantIds: [25, 58, 66, 70, 77] },
    ],
  },
  {
    id: "nervoso",
    name: "Sistema Nervoso",
    diseases: [
      {
        id: "ansiedade",
        name: "Ansiedade e Estresse",
        plantIds: [1, 3, 6, 13, 18, 19, 36, 46, 48, 53, 54, 56, 73, 74, 76, 89, 99],
      },
      { id: "insonia", name: "Insônia", plantIds: [1, 3, 6, 13, 18, 48, 53, 54, 56, 73, 89, 99] },
      { id: "dor-cabeca", name: "Dor de Cabeça", plantIds: [2, 3, 13, 18, 53, 74, 89, 99] },
      { id: "nervosismo", name: "Nervosismo", plantIds: [6, 13, 53, 73] },
      { id: "depressao", name: "Depressão", plantIds: [36, 46, 74, 76] },
    ],
  },
  {
    id: "pele",
    name: "Saúde da Pele",
    diseases: [
      { id: "queimaduras", name: "Queimaduras e Cortes", plantIds: [3, 5, 12, 18, 23, 30, 36, 81, 82, 83] },
      {
        id: "inflamacao",
        name: "Inflamações da Pele",
        plantIds: [1, 5, 11, 23, 30, 32, 42, 52, 81, 82, 83, 85, 96, 98],
      },
      { id: "eczema", name: "Eczema e Psoríase", plantIds: [5, 22, 23, 75, 85, 97] },
      { id: "picadas", name: "Picadas de Insetos", plantIds: [3, 62, 69] },
      { id: "cicatrizacao", name: "Cicatrização", plantIds: [5, 12, 23, 28, 30, 55, 62, 69, 81, 82, 87] },
      { id: "acne", name: "Acne e Furúnculos", plantIds: [22, 57] },
      {
        id: "problemas-pele",
        name: "Problemas de Pele Gerais",
        plantIds: [22, 44, 52, 57, 60, 75, 81, 82, 83, 87, 97],
      },
    ],
  },
  {
    id: "muscular",
    name: "Sistema Muscular",
    diseases: [
      { id: "dor-muscular", name: "Dores Musculares", plantIds: [11, 17, 96] },
      { id: "dor-articular", name: "Dores Articulares", plantIds: [4, 11, 22, 29, 30, 71, 72, 78, 85, 96] },
      { id: "contusao", name: "Contusões e Hematomas", plantIds: [11, 30, 96] },
      { id: "artrite", name: "Artrite", plantIds: [22, 29, 32, 71, 72, 78, 85, 96] },
      { id: "reumatismo", name: "Reumatismo", plantIds: [29, 96] },
    ],
  },
  {
    id: "circulatorio",
    name: "Sistema Circulatório",
    diseases: [
      { id: "pressao-alta", name: "Pressão Alta", plantIds: [43, 61, 78, 79] },
      { id: "colesterol", name: "Colesterol Alto", plantIds: [16, 43, 79, 84] },
      { id: "circulacao", name: "Problemas Circulatórios", plantIds: [17, 24, 28, 39, 79] },
      { id: "varizes", name: "Varizes", plantIds: [28, 42] },
      { id: "hemorroidas", name: "Hemorroidas", plantIds: [42] },
      { id: "problemas-cardiovasculares", name: "Problemas Cardiovasculares", plantIds: [65, 80, 84] },
    ],
  },
  {
    id: "urinario",
    name: "Sistema Urinário",
    diseases: [
      { id: "retencao-liquidos", name: "Retenção de Líquidos", plantIds: [14, 27, 37, 43, 78] },
      { id: "problemas-renais", name: "Problemas Renais", plantIds: [27, 29, 59, 64, 78, 88, 90] },
      { id: "cistite", name: "Cistite e Infecções Urinárias", plantIds: [25, 27, 59, 64] },
      { id: "calculos-renais", name: "Cálculos Renais", plantIds: [64] },
    ],
  },
  {
    id: "metabolico",
    name: "Sistema Metabólico",
    diseases: [
      { id: "diabetes", name: "Diabetes", plantIds: [24, 26, 57, 59, 61, 80, 84, 92, 100] },
      { id: "obesidade", name: "Obesidade", plantIds: [26, 37, 41, 43] },
      { id: "anemia", name: "Anemia", plantIds: [47, 72, 77, 91] },
      { id: "fadiga", name: "Fadiga e Estresse", plantIds: [37, 40, 41, 88] },
    ],
  },
  {
    id: "imunologico",
    name: "Sistema Imunológico",
    diseases: [
      { id: "imunidade", name: "Baixa Imunidade", plantIds: [34, 40, 44, 49, 58, 60, 71, 77, 79, 91] },
      { id: "infeccoes", name: "Infecções", plantIds: [31, 34, 44, 58, 60, 71] },
      { id: "candidíase", name: "Candidíase", plantIds: [44, 60] },
      { id: "herpes", name: "Herpes Labial", plantIds: [6, 54] },
    ],
  },
  {
    id: "feminino",
    name: "Saúde da Mulher",
    diseases: [
      { id: "problemas-menstruais", name: "Problemas Menstruais", plantIds: [21, 24, 55, 76] },
      { id: "menopausa", name: "Menopausa", plantIds: [80] },
      { id: "sindrome-pre-menstrual", name: "Síndrome Pré-menstrual", plantIds: [85] },
      { id: "producao-leite", name: "Produção de Leite Materno", plantIds: [38, 95] },
    ],
  },
  {
    id: "outros",
    name: "Outros Problemas",
    diseases: [
      { id: "memoria", name: "Memória e Concentração", plantIds: [17, 28, 37, 39, 41, 67] },
      { id: "queda-cabelo", name: "Queda de Cabelo", plantIds: [17, 25, 27, 45, 72] },
      { id: "mau-halito", name: "Mau Hálito", plantIds: [2, 31] },
      { id: "dor-de-dente", name: "Dor de Dente", plantIds: [31] },
      { id: "vermes", name: "Vermes Intestinais", plantIds: [21, 35, 50] },
      { id: "febre", name: "Febre", plantIds: [66, 89, 90, 100] },
      { id: "desintoxicacao", name: "Desintoxicação", plantIds: [14, 16, 29, 49, 92, 93, 97] },
      { id: "envelhecimento", name: "Antienvelhecimento", plantIds: [65, 80] },
      { id: "alergias", name: "Alergias", plantIds: [72] },
      { id: "epilepsia", name: "Epilepsia", plantIds: [56] },
      { id: "hiperatividade", name: "Hiperatividade", plantIds: [53, 56] },
      { id: "inflamacoes-boca", name: "Inflamações da Boca", plantIds: [65, 67, 87] },
      { id: "sudorese", name: "Sudorese Excessiva", plantIds: [67] },
      { id: "zumbido-ouvido", name: "Zumbido no Ouvido", plantIds: [39] },
      { id: "vertigens", name: "Vertigens", plantIds: [39] },
      { id: "celulite", name: "Celulite", plantIds: [28] },
      { id: "caspa", name: "Caspa", plantIds: [45, 57] },
      { id: "calos", name: "Calos", plantIds: [82] },
      { id: "escorbuto", name: "Escorbuto", plantIds: [77, 90] },
      { id: "ictericia", name: "Icterícia", plantIds: [61, 88] },
      { id: "hipertensao", name: "Hipertensão", plantIds: [90, 100] },
      { id: "libido", name: "Problemas de Libido", plantIds: [46] },
      { id: "prostata", name: "Problemas de Próstata", plantIds: [72] },
      { id: "unhas-fracas", name: "Unhas Fracas", plantIds: [27] },
      { id: "palpitacoes", name: "Palpitações", plantIds: [54] },
      { id: "tensao-muscular", name: "Tensão Muscular", plantIds: [48, 73] },
      { id: "solucos", name: "Soluços", plantIds: [33] },
      { id: "flatulencia", name: "Flatulência", plantIds: [94] },
      { id: "colicas-bebes", name: "Cólicas em Bebês", plantIds: [95] },
      { id: "hidratacao", name: "Hidratação", plantIds: [88] },
      { id: "vitamina-c", name: "Rico em Vitamina C", plantIds: [49, 77, 87, 90] },
      { id: "omega-3", name: "Rico em Ômega-3", plantIds: [83] },
      { id: "omega-6", name: "Rico em Ômega-6", plantIds: [85] },
      { id: "antioxidante", name: "Antioxidante", plantIds: [43, 65, 80] },
      { id: "vitaminas", name: "Rico em Vitaminas", plantIds: [77, 91] },
    ],
  },
]

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

export function getPlantsByDisease(diseaseId: string): Plant[] {
  const disease = diseaseCategories.flatMap((category) => category.diseases).find((d) => d.id === diseaseId)

  if (!disease) return []

  return plantsDatabase.filter((plant) => disease.plantIds.includes(plant.id))
}

export function getPlantById(id: number): Plant | undefined {
  return plantsDatabase.find((plant) => plant.id === id)
}
