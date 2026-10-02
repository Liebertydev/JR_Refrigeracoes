import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import SolicitarOrcamento from '../pages/SolicitarOrcamento.jsx'
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada.jsx'

function AppRoutes() {
  return <Routes>
    {/* Rotas públicas: acessíveis sem conta ou autenticação. */}
    <Route path="/" element={<Home />} />
    <Route path="/orcamento" element={<SolicitarOrcamento />} />
    {/* Rotas protegidas de usuário: nenhuma ativa na Aula 1; não há login nesta entrega. */}
    {/* Rota administrativa reservada. A implementação completa será feita na Aula 3. */}
    <Route path="/admin" element={<PaginaNaoEncontrada titulo="Área administrativa" mensagem="O painel administrativo está previsto para a Aula 3. Não há autenticação ou acesso administrativo ativo nesta etapa." />} />
    <Route path="*" element={<PaginaNaoEncontrada />} />
  </Routes>
}

export default AppRoutes