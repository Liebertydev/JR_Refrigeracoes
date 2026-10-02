import { Link } from 'react-router-dom'
import { ArrowUpRight, Snowflake } from 'lucide-react'

function Header({ navItems, quoteRoute }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0a2033] text-white">
      <div className="container-page flex h-[74px] items-center justify-between gap-8">
        <Link className="flex shrink-0 items-center gap-3" to="/" aria-label="JR Refrigerações, início">
          <span className="grid size-10 place-items-center rounded-sm bg-[#5cc6d8] text-[#0a2033]"><Snowflake size={23} strokeWidth={2.2} /></span>
          <span className="leading-tight"><strong className="display-font block text-[15px] font-extrabold">JR <span className="text-[#72d1de]">REFRIGERAÇÕES</span></strong><span className="text-[10px] tracking-[0.12em] text-white/55">CLIMATIZAÇÃO E CUIDADO</span></span>
        </Link>
        <nav className="hidden items-center gap-8 text-[13px] text-white/75 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.href} className="transition-colors hover:text-white" href={item.href}>{item.label}</a>)}
        </nav>
        <Link className="group flex items-center gap-2 bg-[#5cc6d8] px-4 py-3 text-xs font-bold text-[#0a2033] transition-all duration-300 hover:bg-white" to={quoteRoute}>Pedir orçamento <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
      </div>
    </header>
  )
}

export default Header