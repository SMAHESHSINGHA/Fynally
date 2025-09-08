import Section from '../components/Section.jsx'

const resources = [
  { title: 'Time Management 101', tag: 'Productivity', link: '#' },
  { title: 'Note-taking for Fast Learning', tag: 'Study Skills', link: '#' },
  { title: 'Top 20 Free Tools for Students', tag: 'Tools', link: '#' },
  { title: 'How to Choose a Major', tag: 'Career', link: '#' },
]

export default function Student() {
  return (
    <div>
      <Section title="Student Resources" subtitle="Curated guides, templates, and tools to build your foundation.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r) => (
            <a key={r.title} href={r.link} className="p-5 rounded-2xl border bg-white hover:shadow-md block">
              <div className="text-xs uppercase tracking-wide text-gray-500">{r.tag}</div>
              <div className="font-semibold mt-1">{r.title}</div>
              <div className="text-sm mt-2 text-brand-700">Read →</div>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Starter Kits">
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Exam Planner & Revision Schedule (template)</li>
          <li>Portfolio Starter (simple HTML/CSS/JS)</li>
          <li>LinkedIn Profile Checklist</li>
        </ul>
      </Section>
    </div>
  )
}
