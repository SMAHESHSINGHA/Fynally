import { Link, NavLink } from 'react-router-dom'

const nav = [
  { to: '/student', label: 'Student' },
  { to: '/learning', label: 'Learning' },
  { to: '/internships', label: 'Internships' },
  { to: '/employment', label: 'Employment' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="font-black text-xl tracking-tight text-brand-700">
          Fynally<span className="text-brand-500">.io</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-brand-600 transition ${
                  isActive ? 'text-brand-700' : 'text-gray-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/learning" className="hidden md:inline-flex px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700">
          Start Learning
        </Link>
        <button className="md:hidden p-2 border rounded-lg text-sm" onClick={() => {
          const m = document.getElementById('mobile-menu')
          m?.classList.toggle('hidden')
        }}>Menu</button>
      </div>
      <div id="mobile-menu" className="md:hidden hidden border-t bg-white">
        <div className="container py-2 flex flex-col gap-2">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="px-2 py-2 rounded-lg text-gray-800 hover:bg-gray-100"
              onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
