import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header
        navItems={[
          { label: 'Serviços', href: '/#servicos' },
          { label: 'Trabalhos', href: '/#trabalhos' },
          { label: 'Deslocamento', href: '/#deslocamento' },
        ]}
        quoteRoute="/orcamento"
      />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
