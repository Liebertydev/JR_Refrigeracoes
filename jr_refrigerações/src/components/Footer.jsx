import { Link } from 'react-router-dom'
import { MapPin, Snowflake } from 'lucide-react'

function Footer({ companyName, location, year }) {
  return <footer className="bg-[#081a2a] py-9 text-white"><div className="container-page flex flex-col justify-between gap-7 sm:flex-row sm:items-center"><Link to="/" className="flex items-center gap-3"><Snowflake size={22} className="text-[#72d1de]" /><span className="display-font text-sm font-bold">{companyName}</span></Link><p className="flex items-center gap-2 text-xs text-white/55"><MapPin size={14} /> {location}</p><p className="text-[11px] text-white/40">© {year} {companyName} · Projeto acadêmico</p></div></footer>
}

export default Footer