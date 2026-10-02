import { ArrowUpRight, Wind, Sparkles, Wrench, Store } from 'lucide-react'

const serviceIcons = { wind: Wind, sparkles: Sparkles, wrench: Wrench, store: Store }

function ServiceCard({ titulo, descricao, detalhe, icone, onSelect }) {
  const Icon = serviceIcons[icone] ?? Wind
  return (
    <article className="group flex min-h-[265px] flex-col border-t-2 border-[#d9e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#17879a] hover:shadow-[0_16px_40px_rgba(16,45,70,.09)]">
      <div className="flex items-start justify-between"><span className="grid size-11 place-items-center bg-[#e9f5f5] text-[#157e91]"><Icon size={21} strokeWidth={1.7} /></span><span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#78878d]">{detalhe}</span></div>
      <h3 className="display-font mt-6 text-[18px] font-bold leading-snug text-[#102d46]">{titulo}</h3><p className="mt-3 text-[13px] leading-6 text-[#667780]">{descricao}</p>
      <button type="button" onClick={onSelect} className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-xs font-bold text-[#157e91] transition-all hover:gap-3">Tenho interesse <ArrowUpRight size={14} /></button>
    </article>
  )
}

export default ServiceCard