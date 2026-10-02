import { useNavigate } from 'react-router-dom'
import { ArrowRight, Check, Clock3, MapPinned } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Galeria from '../components/Galeria.jsx'
import Simulador from '../components/Simulador.jsx'
import Footer from '../components/Footer.jsx'
import { galleryItems, services } from '../data/storage.js'
import { useDeslocamento } from '../hooks/useDeslocamento.js'

function Home() {
  const navigate = useNavigate()
  const { cities, selectedCity, setSelectedCity, estimatedFee, selectedRegion } = useDeslocamento();
  
  const handleServiceSelect = (service) => navigate('/orcamento', { state: { service: service.titulo } })
  return <><main>
    <Hero onRequestQuote={() => navigate('/orcamento')} />
    <section className="border-b border-[#e1e6e3] bg-white">
        <div className="container-page grid gap-6 py-6 sm:grid-cols-3 sm:gap-4">
            <div className="flex items-center gap-3">
                <Check className="text-[#168ca1]" size={17} />
                <span className="text-xs font-semibold text-[#465963]">Atendimento direto com o técnico</span>
            </div>
                <div className="flex items-center gap-3">
                    <Clock3 className="text-[#168ca1]" size={17} />
                    <span className="text-xs font-semibold text-[#465963]">Agendamento conforme disponibilidade</span>
                </div>
                <div className="flex items-center gap-3">
                    <MapPinned className="text-[#168ca1]" size={17} />

                    <span className="text-xs font-semibold text-[#465963]">Recife e cidades próximas</span>
                </div>
            </div>
        </section>
    <section id="servicos" className="container-page py-20 md:py-24"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">O que fazemos</p><h2 className="display-font mt-4 max-w-[550px] text-[34px] font-semibold leading-tight text-[#102d46] sm:text-[42px]">Soluções para o seu conforto e o seu negócio.</h2></div><p className="max-w-[350px] text-sm leading-6 text-[#6b7a80]">Serviços explicados com clareza, do cuidado preventivo à correção do problema.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.id} titulo={service.titulo} descricao={service.descricao} detalhe={service.detalhe} icone={service.icon} onSelect={() => handleServiceSelect(service)} />)}</div></section>
    <section id="trabalhos" className="bg-[#edf1ef] py-20 md:py-24"><div className="container-page"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Na prática</p><h2 className="display-font mt-4 text-[34px] font-semibold leading-tight text-[#102d46] sm:text-[42px]">Trabalho bem feito, ambiente cuidado.</h2></div><p className="max-w-[330px] text-sm leading-6 text-[#6b7a80]">Alguns exemplos de serviços realizados na região.</p></div><Galeria items={galleryItems} /></div></section>
    <Simulador cities={cities} selectedCity={selectedCity} onCityChange={setSelectedCity} estimatedFee={estimatedFee} selectedRegion={selectedRegion} />
    <section className="container-page py-16 md:py-20"><div className="flex flex-col justify-between gap-8 border-y border-[#dce2e0] py-10 md:flex-row md:items-center"><div><p className="eyebrow">Próximo passo</p><h2 className="display-font mt-4 text-[30px] font-semibold text-[#102d46]">Vamos entender o que você precisa?</h2></div><button type="button" onClick={() => navigate('/orcamento')} className="group inline-flex w-fit items-center gap-3 bg-[#102d46] px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-[#168ca1]">Solicitar orçamento <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></button></div></section>
  </main><Footer companyName="JR Refrigerações" location="Recife, Pernambuco" year={new Date().getFullYear()} /></>
}

export default Home