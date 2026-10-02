import { MapPin, Navigation } from 'lucide-react'
import { formatCurrency } from '../utils/formatters.js'

function Simulador({ cities, selectedCity, onCityChange, estimatedFee, selectedRegion }) {
  return (
    <section id="deslocamento" className="bg-[#102d46] py-20 text-white md:py-24">
      <div className="container-page grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
        <div><p className="eyebrow !text-[#72d1de]">Atendimento regional</p><h2 className="display-font mt-5 max-w-[450px] text-[34px] font-semibold leading-tight sm:text-[42px]">Planeje o atendimento antes de chamar.</h2><p className="mt-5 max-w-[450px] text-sm leading-7 text-white/65">A base operacional fica em Recife. Selecione sua cidade para consultar uma estimativa de deslocamento.</p></div>
        <div className="border border-white/15 bg-white/[0.04] p-6 sm:p-8"><label className="field-label !text-white/75" htmlFor="travel-city">Sua cidade</label><div className="relative"><MapPin size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#168ca1]" /><select id="travel-city" className="field appearance-none pl-11" value={selectedCity} onChange={(event) => onCityChange(event.target.value)}>{cities.map((city) => <option key={city.city} value={city.city}>{city.city}</option>)}</select></div>
          <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-white/15 pt-6"><div><p className="text-xs text-white/55">Estimativa de deslocamento</p><p className="display-font mt-1 text-[34px] font-bold text-[#72d1de]">{estimatedFee === 0 ? 'A combinar' : formatCurrency(estimatedFee)}</p></div><span className="mb-1 inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-[11px] text-white/75"><Navigation size={13} /> {selectedRegion?.level}</span></div><p className="mt-4 text-[11px] leading-5 text-white/45">Valor estimado para fins acadêmicos. A taxa final pode variar conforme endereço e serviço.</p>
        </div>
      </div>
    </section>
  )
}

export default Simulador