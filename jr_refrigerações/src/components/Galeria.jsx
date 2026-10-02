import { ArrowUpRight } from 'lucide-react'

function Galeria({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => <article key={item.id} className={`gallery-item group overflow-hidden bg-[#102d46] ${index === 1 ? 'md:mt-10' : ''}`}>
        <div className="relative h-[260px] overflow-hidden sm:h-[300px]"><div className="gallery-photo absolute inset-0" style={{ backgroundImage: `url('${item.image}')` }} role="img" aria-label={item.title} /><div className="absolute inset-0 bg-gradient-to-t from-[#0a2033]/90 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white"><div><h3 className="display-font text-base font-bold">{item.title}</h3><p className="mt-1 text-xs text-white/70">{item.location}</p></div><ArrowUpRight size={18} className="mb-1 text-[#72d1de] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div>
      </article>)}
    </div>
  )
}

export default Galeria