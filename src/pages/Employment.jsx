import Section from '../components/Section.jsx'

const tips = [
  'Tailor your resume to the job description.',
  'Practice behavioral and technical interview questions.',
  'Showcase projects with live demos and GitHub repos.',
  'Network on LinkedIn and follow target companies.',
]

const jobs = [
  { role: 'Junior Frontend Developer', company: 'Startify', type: 'Remote', ctc: '₹4–6 LPA' },
  { role: 'Associate Web Engineer', company: 'PixelWorks', type: 'On-site', ctc: '₹5–7 LPA' },
]

export default function Employment() {
  return (
    <div>
      <Section title="Employment" subtitle="Guidance and opportunities to land your first job.">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            {jobs.map(j => (
              <div key={j.role} className="p-5 rounded-2xl border bg-white">
                <div className="font-semibold">{j.role}</div>
                <div className="text-sm text-gray-600">{j.company} • {j.type}</div>
                <div className="text-sm text-gray-500">CTC: {j.ctc}</div>
                <button className="mt-3 px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-semibold">View Details</button>
              </div>
            ))}
          </div>
          <aside className="space-y-3">
            <div className="p-5 rounded-2xl border bg-white">
              <div className="font-semibold">Quick Tips</div>
              <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-1">
                {tips.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  )
}
