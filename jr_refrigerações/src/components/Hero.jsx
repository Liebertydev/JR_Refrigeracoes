import { ArrowDown, ArrowRight, MapPin, ShieldCheck } from 'lucide-react'

function Hero({ onRequestQuote }) {
  return (
    <section className="hero-photo relative flex min-h-[580px] items-center overflow-hidden bg-[#102d46] text-white md:min-h-[660px]">
      <div className="container-page relative z-10 grid py-20 md:grid-cols-[1.1fr_.9fr] md:items-end">
        <div className="max-w-[650px]">
          <div className="mb-7 inline-flex items-center gap-2 border border-white/35 bg-[#0a2033]/40 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em]"><MapPin size={14} className="text-[#72d1de]" /> Recife e região metropolitana</div>
          <p className="mb-5 text-sm font-semibold text-[#72d1de]">Conforto técnico, atendimento de verdade.</p>
          <h1 className="display-font max-w-[640px] text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[56px] md:text-[66px]">Seu ar-condicionado em boas mãos.</h1>
          <p className="mt-6 max-w-[490px] text-base leading-7 text-white/78">Instalação, limpeza e manutenção com cuidado do primeiro diagnóstico ao serviço final.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><button type="button" onClick={onRequestQuote} className="group inline-flex items-center gap-3 bg-[#5cc6d8] px-5 py-4 text-sm font-bold text-[#0a2033] transition-all duration-300 hover:scale-[1.02] hover:bg-white">Solicitar orçamento <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button><a href="#servicos" className="inline-flex items-center gap-2 px-3 py-4 text-sm font-semibold text-white/85 transition-colors hover:text-white"><ArrowDown size={16} /> Conheça os serviços</a></div>
        </div>
        <div className="mt-14 flex gap-3 border-t border-white/30 pt-5 md:ml-10 md:mt-0 md:justify-end"><ShieldCheck className="mt-0.5 shrink-0 text-[#72d1de]" size={19} /><p className="max-w-[270px] text-xs leading-5 text-white/75">Atendimento direto com Júnior, técnico autônomo em refrigeração.</p></div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-[30%] bg-[#5cc6d8]" />
    </section>
  )
}

export default Hero