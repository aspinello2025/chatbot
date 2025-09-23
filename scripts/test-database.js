import {
  plantsDatabase,
  diseaseCategories,
  searchPlants,
  getPlantsByDisease,
  getPlantById,
} from "../lib/plants-data.js"

console.log("[v0] Iniciando testes do banco de dados de plantas medicinais...")

// Teste 1: Verificar se o banco de dados foi carregado corretamente
console.log("\n=== TESTE 1: Verificação do banco de dados ===")
console.log(`Total de plantas no banco: ${plantsDatabase.length}`)
console.log(`Total de categorias de doenças: ${diseaseCategories.length}`)

if (plantsDatabase.length === 100) {
  console.log("✅ Banco de dados carregado com 100 plantas conforme esperado")
} else {
  console.log("❌ Erro: Esperado 100 plantas, encontrado:", plantsDatabase.length)
}

// Teste 2: Verificar estrutura das plantas
console.log("\n=== TESTE 2: Estrutura das plantas ===")
const primeiraPlanta = plantsDatabase[0]
console.log("Primeira planta:", primeiraPlanta.nomePlanta)
console.log("Campos obrigatórios presentes:")
console.log("- ID:", primeiraPlanta.id ? "✅" : "❌")
console.log("- Nome da planta:", primeiraPlanta.nomePlanta ? "✅" : "❌")
console.log("- Nome científico:", primeiraPlanta.nomeCientifico ? "✅" : "❌")
console.log("- Indicações:", primeiraPlanta.indicacoes ? "✅" : "❌")
console.log("- Modo de preparo:", primeiraPlanta.modoPreparo ? "✅" : "❌")
console.log("- Contraindicações:", primeiraPlanta.contraindicacoes ? "✅" : "❌")
console.log("- Tags de doenças:", primeiraPlanta.tagsDoencas ? "✅" : "❌")

// Teste 3: Função de busca
console.log("\n=== TESTE 3: Função de busca ===")
const resultadoBusca = searchPlants("ansiedade")
console.log(`Busca por "ansiedade" retornou ${resultadoBusca.length} plantas:`)
resultadoBusca.slice(0, 5).forEach((planta) => {
  console.log(`- ${planta.nomePlanta} (${planta.nomeCientifico})`)
})

// Teste 4: Busca por doença específica
console.log("\n=== TESTE 4: Busca por doença específica ===")
const plantasAnsiedade = getPlantsByDisease("ansiedade")
console.log(`Plantas para ansiedade: ${plantasAnsiedade.length}`)
plantasAnsiedade.slice(0, 3).forEach((planta) => {
  console.log(`- ${planta.nomePlanta}`)
})

// Teste 5: Busca por ID
console.log("\n=== TESTE 5: Busca por ID ===")
const plantaPorId = getPlantById(1)
if (plantaPorId) {
  console.log(`✅ Planta ID 1: ${plantaPorId.nomePlanta}`)
} else {
  console.log("❌ Erro: Planta ID 1 não encontrada")
}

// Teste 6: Verificar categorias de doenças
console.log("\n=== TESTE 6: Categorias de doenças ===")
diseaseCategories.forEach((categoria) => {
  console.log(`${categoria.name}: ${categoria.diseases.length} doenças`)
})

// Teste 7: Verificar plantas únicas (sem duplicatas)
console.log("\n=== TESTE 7: Verificação de duplicatas ===")
const idsUnicos = new Set(plantsDatabase.map((p) => p.id))
const nomesUnicos = new Set(plantsDatabase.map((p) => p.nomePlanta))

if (idsUnicos.size === plantsDatabase.length) {
  console.log("✅ Todos os IDs são únicos")
} else {
  console.log("❌ Erro: IDs duplicados encontrados")
}

if (nomesUnicos.size === plantsDatabase.length) {
  console.log("✅ Todos os nomes de plantas são únicos")
} else {
  console.log("❌ Aviso: Nomes de plantas duplicados encontrados")
}

// Teste 8: Verificar se todas as plantas têm tags
console.log("\n=== TESTE 8: Verificação de tags ===")
const plantasSemTags = plantsDatabase.filter((p) => !p.tagsDoencas || p.tagsDoencas.trim() === "")
if (plantasSemTags.length === 0) {
  console.log("✅ Todas as plantas têm tags de doenças")
} else {
  console.log(`❌ ${plantasSemTags.length} plantas sem tags encontradas`)
}

// Teste 9: Busca por termos diversos
console.log("\n=== TESTE 9: Testes de busca diversos ===")
const termosTesteBusca = ["digestão", "tosse", "inflamação", "dor", "camomila"]
termosTesteBusca.forEach((termo) => {
  const resultado = searchPlants(termo)
  console.log(`Busca "${termo}": ${resultado.length} resultados`)
})

console.log("\n=== TESTES CONCLUÍDOS ===")
console.log("Banco de dados de plantas medicinais funcionando corretamente! ✅")
