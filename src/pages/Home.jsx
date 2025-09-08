import Section from '../components/Section.jsx'
import Stat from '../components/Stat.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Section className="gradient-hero">
        <div className="container grid md:grid-cols-2 gap-8 items-center py-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              Your journey, <span className="text-brand-600">Fynally</span> guided.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              A life companion platform that supports you from Student to Employee with
              the right resources, learning paths, internships, and jobs.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/learning" className="px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700">
                Start Learning
              </Link>
              <Link to="/internships" className="px-5 py-3 rounded-xl border font-semibold hover:bg-gray-50">
                Find Internships
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat value="10K+" label="Students helped" />
            <Stat value="500+" label="Courses & resources" />
            <Stat value="1K+" label="Internships curated" />
            <Stat value="97%" label="Satisfaction" />
          </div>
        </div>
      </Section>

      <Section title="Career Pathway" subtitle="Smooth navigation across the journey: Student → Learner → Intern → Employee">
        <ol className="grid md:grid-cols-4 gap-4">
          {[
            { t: 'Student', d: 'Build strong fundamentals with curated resources.' },
            { t: 'Learner', d: 'Follow skill paths and projects to grow your portfolio.' },
            { t: 'Intern', d: 'Apply to internships and gain real-world experience.' },
            { t: 'Employee', d: 'Land your first job with confidence and guidance.' },
          ].map((s, i) => (
            <li key={i} className="p-4 border rounded-2xl bg-white shadow-sm">
              <div className="text-sm text-gray-500">Step {i+1}</div>
              <div className="font-bold text-lg">{s.t}</div>
              <p className="text-sm text-gray-600 mt-1">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Get Started">
        <div className="grid md:grid-cols-3 gap-4">
          <Card title="Student Resources" to="/student" desc="Notes, guides, and tools to kickstart your journey." />
          <Card title="Learning Paths" to="/learning" desc="Structured tracks to master in-demand skills." />
          <Card title="Internships & Jobs" to="/internships" desc="Real opportunities to practice and earn." />
        </div>
      </Section>
    </div>
  )
}

function Card({ title, desc, to }) {
  return (
    <Link to={to} className="block p-5 rounded-2xl border bg-white hover:shadow-md transition">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
      <div className="mt-3 inline-block text-sm font-semibold text-brand-700">Explore →</div>
    </Link>
  )
}
