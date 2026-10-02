import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Snowflake } from 'lucide-react'
import Footer from '../components/Footer.jsx'
import { createMockQuoteRequest, travelRegions } from '../data/storage.js'
import { formatPhone } from '../utils/formatters.js'

function SolicitarOrcamento() {
  const location = useLocation()
  // Guarda os campos preenchidos pelo visitante antes do envio da solicitação.
  const [formData, setFormData] = useState({ nome: '', whatsapp: '', cidade: 'Recife', endereco: '', problema: '', dataPreferida: '', turno: 'Manhã', servico: location.state?.service ?? '' })
  // Guarda as solicitações criadas nesta sessão, sem gravar em servidor ou navegador.
  const [quoteRequests, setQuoteRequests] = useState([])
  // Controla a exibição da confirmação após a solicitação ser criada.
  const [submittedRequest, setSubmittedRequest] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newRequest = createMockQuoteRequest(formData)
    setQuoteRequests((currentRequests) => [...currentRequests, newRequest])
    setSubmittedRequest(newRequest)
    setFormData({ nome: '', whatsapp: '', cidade: 'Recife', endereco: '', problema: '', dataPreferida: '', turno: 'Manhã', servico: '' })
    // FUTURO: Aqui entrará a chamada POST da API Node.js/Express (Aula 2).
  }

  return <><main className="min-h-[calc(100vh-74px)] bg-[#f3f6f4] py-12 md:py-16"><div className="container-page max-w-[900px]">
    <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-[#57707b] transition-colors hover:text-[#168ca1]"><ArrowLeft size={15} /> Voltar para a página inicial</Link>
    <div className="mt-8 grid overflow-hidden border border-[#dce3e1] bg-white md:grid-cols-[.72fr_1.28fr]">
      <aside className="bg-[#102d46] p-7 text-white sm:p-9"><Snowflake size={24} className="text-[#72d1de]" /><p className="mt-10 text-xs font-bold uppercase tracking-[0.12em] text-[#72d1de]">Solicitação sem compromisso</p><h1 className="display-font mt-3 text-[32px] font-semibold leading-tight">Conte pra gente o que aconteceu.</h1><p className="mt-5 text-sm leading-6 text-white/65">Júnior vai analisar os detalhes e combinar o melhor próximo passo com você.</p><div className="mt-10 border-t border-white/15 pt-5 text-xs leading-5 text-white/55">Seus dados ficam nesta demonstração apenas durante a sessão atual.</div></aside>
      <section className="p-6 sm:p-9">
        {submittedRequest && <div role="status" className="mb-7 flex gap-3 border border-[#b8ded9] bg-[#edf9f5] p-4 text-[#175d54]"><CheckCircle2 size={20} className="mt-0.5 shrink-0" /><div><p className="text-sm font-bold">Solicitação registrada!</p><p className="mt-1 text-xs leading-5">Obrigado, {submittedRequest.nome}. Seu pedido está <strong>{submittedRequest.status}</strong> e Júnior entrará em contato para conversar sobre o atendimento.</p></div></div>}
        <form onSubmit={handleSubmit} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2"><label className="field-label" htmlFor="nome">Nome completo *</label><input className="field" id="nome" name="nome" value={formData.nome} onChange={handleChange} autoComplete="name" placeholder="Como podemos chamar você?" required /></div>
          <div><label className="field-label" htmlFor="whatsapp">WhatsApp *</label><input className="field" id="whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" value={formData.whatsapp} onChange={(event) => setFormData((currentData) => ({ ...currentData, whatsapp: formatPhone(event.target.value) }))} placeholder="(81) 99999-9999" required /></div>
          <div><label className="field-label" htmlFor="cidade">Cidade *</label><select className="field" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} required>{travelRegions.map((region) => <option key={region.city}>{region.city}</option>)}</select></div>
          <div className="sm:col-span-2"><label className="field-label" htmlFor="endereco">Bairro / endereço *</label><input className="field" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} autoComplete="street-address" placeholder="Bairro, rua e número" required /></div>
          <div className="sm:col-span-2"><label className="field-label" htmlFor="servico">Serviço de interesse</label><select className="field" id="servico" name="servico" value={formData.servico} onChange={handleChange}><option value="">Ainda não sei / preciso de avaliação</option><option>Instalação de ar-condicionado split</option><option>Higienização profissional e manutenção preventiva</option><option>Manutenção corretiva e carga de gás</option><option>Refrigeração comercial e balcões</option></select></div>
          <div className="sm:col-span-2"><label className="field-label" htmlFor="problema">Descrição do problema *</label><textarea className="field min-h-[105px] resize-y" id="problema" name="problema" value={formData.problema} onChange={handleChange} placeholder="Conte um pouco sobre o aparelho e o que está acontecendo" required /></div>
          <div><label className="field-label" htmlFor="dataPreferida">Data de preferência</label><input className="field" id="dataPreferida" name="dataPreferida" type="date" value={formData.dataPreferida} onChange={handleChange} /></div>
          <div><label className="field-label" htmlFor="turno">Turno de preferência *</label><select className="field" id="turno" name="turno" value={formData.turno} onChange={handleChange} required><option>Manhã</option><option>Tarde</option><option>Noite</option></select></div>
        </div><button className="flex w-full items-center justify-center gap-2 bg-[#102d46] px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#168ca1]" type="submit">Enviar solicitação <span aria-hidden="true">→</span></button><p className="text-center text-[11px] leading-5 text-[#849196]">Ao enviar, sua solicitação será criada com status inicial PENDENTE. Não é necessário criar uma conta.</p></form>
        <span className="sr-only" aria-live="polite">{quoteRequests.length} solicitação(ões) nesta sessão.</span>
      </section>
    </div>
  </div></main><Footer companyName="JR Refrigerações" location="Recife, Pernambuco" year={new Date().getFullYear()} /></>
}

export default SolicitarOrcamento