import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer.jsx'

function PaginaNaoEncontrada({ titulo = 'Esta página ainda não existe.', mensagem = 'O endereço pode estar incorreto ou esta área ainda está em desenvolvimento.' }) {
  return <><main className="grid min-h-[65vh] place-items-center px-6 py-20 text-center"><div><p className="eyebrow justify-center">JR Refrigerações · Aula 1</p><h1 className="display-font mt-5 text-4xl font-bold text-[#102d46]">{titulo}</h1><p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#677782]">{mensagem}</p><Link className="mt-8 inline-flex items-center gap-2 bg-[#102d46] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#168ca1]" to="/"><ArrowLeft size={16} /> Voltar ao início</Link></div></main><Footer companyName="JR Refrigerações" location="Recife, Pernambuco" year={new Date().getFullYear()} /></>
}

export default PaginaNaoEncontrada