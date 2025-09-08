import Section from '../components/Section.jsx'

const tracks = [
  { title: 'Frontend Web (HTML, CSS, JS, React)', duration: '8–12 weeks', level: 'Beginner → Intermediate' },
  { title: 'Backend Web (Node, Express, MongoDB)', duration: '10–14 weeks', level: 'Beginner → Intermediate' },
  { title: 'UI/UX Essentials (Figma, Design Systems)', duration: '6–8 weeks', level: 'Beginner' },
]

export default function Learning() {
  return (
    <div>
      <Section title="Learning Paths" subtitle="Structured skill tracks with projects and checkpoints.">
        <div className="grid md:grid-cols-3 gap-4">
          {tracks.map((t) => (
            <div key={t.title} className="p-5 rounded-2xl border bg-white">
              <div className="font-semibold">{t.title}</div>
              <div className="text-sm text-gray-600 mt-1">{t.level}</div>
              <div className="text-sm text-gray-500 mt-1">{t.duration}</div>
              <button className="mt-3 px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-semibold">View Syllabus</button>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Projects to Build">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Portfolio Website', 'Responsive Landing Page', 'Dashboard UI', 'E-commerce Product Page',
          ].map((p) => (
            <div key={p} className="p-4 rounded-2xl border bg-white">{p}</div>
          ))}
        </div>
      </Section>
    </div>
  )
}
