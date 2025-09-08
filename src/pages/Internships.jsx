import Section from '../components/Section.jsx'
import { useMemo, useState } from 'react'

const DATA = [
  { id: 1, role: 'Frontend Intern', company: 'BrightApps', type: 'Remote', stipend: '₹12,000', skills: ['HTML', 'CSS', 'React'] },
  { id: 2, role: 'UI/UX Intern', company: 'DesignHub', type: 'Hybrid', stipend: '₹10,000', skills: ['Figma', 'Wireframing'] },
  { id: 3, role: 'Web Dev Intern', company: 'TechNest', type: 'On-site', stipend: '₹15,000', skills: ['JS', 'Tailwind', 'API'] },
  { id: 4, role: 'React Intern', company: 'CloudNine', type: 'Remote', stipend: '₹18,000', skills: ['React', 'Vite', 'Git'] },
]

export default function Internships() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')

  const filtered = useMemo(() => {
    return DATA.filter(i => 
      (type === 'All' || i.type === type) &&
      (i.role.toLowerCase().includes(query.toLowerCase()) || i.company.toLowerCase().includes(query.toLowerCase()))
    )
  }, [query, type])

  return (
    <div>
      <Section title="Internships" subtitle="Explore curated internships to kickstart your experience.">
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search roles or companies…"
            className="px-3 py-2 border rounded-xl flex-1"
          />
          <select value={type} onChange={e => setType(e.target.value)} className="px-3 py-2 border rounded-xl">
            {['All', 'Remote', 'Hybrid', 'On-site'].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((i) => (
            <div key={i.id} className="p-5 rounded-2xl border bg-white hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{i.role}</div>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100">{i.type}</span>
              </div>
              <div className="text-sm text-gray-600">{i.company}</div>
              <div className="text-sm text-gray-500 mt-1">Stipend: {i.stipend}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {i.skills.map(s => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100">{s}</span>
                ))}
              </div>
              <button className="mt-3 px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-semibold">Apply</button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-sm text-gray-600">No results. Try a different filter.</div>
          )}
        </div>
      </Section>
    </div>
  )
}
