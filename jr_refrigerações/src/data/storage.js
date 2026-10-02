// Dados locais fictícios para demonstrar a aplicação enquanto não existe backend.
export const services = [
  { id: 'instalacao-split', titulo: 'Instalação de ar-condicionado split', descricao: 'Montagem, tubulação em cobre, vácuo e carga conforme a necessidade do equipamento.', detalhe: 'Instalação', icon: 'wind' },
  { id: 'higienizacao', titulo: 'Higienização profissional e manutenção preventiva', descricao: 'Limpeza profunda e sanitização para melhorar o ar e preservar o desempenho do aparelho.', detalhe: 'Prevenção', icon: 'sparkles' },
  { id: 'manutencao-corretiva', titulo: 'Manutenção corretiva e carga de gás', descricao: 'Diagnóstico técnico, identificação de vazamentos e recarga quando indicada.', detalhe: 'Reparo', icon: 'wrench' },
  { id: 'refrigeracao-comercial', titulo: 'Refrigeração comercial e balcões', descricao: 'Assistência para geladeiras comerciais, expositores e câmaras frias.', detalhe: 'Comercial', icon: 'store' },
]

export const galleryItems = [
  { id: 1, title: 'Instalação residencial', location: 'Boa Viagem, Recife', image: 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=80' },
  { id: 2, title: 'Manutenção preventiva', location: 'Casa Forte, Recife', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80' },
  { id: 3, title: 'Climatização comercial', location: 'Olinda, PE', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80' },
]

// Valores didáticos estimados, não representam uma cotação comercial definitiva.
export const travelRegions = [
  { city: 'Recife', region: 'Base principal', level: 'Base', fee: 0 },
  { city: 'Olinda', region: 'Região Metropolitana', level: 'Nível 1', fee: 25 },
  { city: 'Jaboatão dos Guararapes', region: 'Região Metropolitana', level: 'Nível 1', fee: 30 },
  { city: 'Camaragibe', region: 'Região Metropolitana', level: 'Nível 2', fee: 40 },
  { city: 'São Lourenço da Mata', region: 'Região Metropolitana', level: 'Nível 2', fee: 50 },
  { city: 'Carpina', region: 'Zona da Mata / Entorno', level: 'Nível 3', fee: 100 },
]

// FUTURO: Aqui entrará a chamada POST da API Node.js/Express (Aula 2).
export function createMockQuoteRequest(formData) {
  return { id: `ORC-${Date.now()}`, ...formData, status: 'PENDENTE', createdAt: new Date().toISOString() }
}