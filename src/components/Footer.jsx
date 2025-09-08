export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-black text-lg text-brand-700">Fynally.io</h3>
          <p className="text-sm text-gray-600 mt-2">
            Guidance, growth, and empowerment — from Student to Employee.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Explore</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/student" className="hover:underline">Student Resources</a></li>
            <li><a href="/learning" className="hover:underline">Learning</a></li>
            <li><a href="/internships" className="hover:underline">Internships</a></li>
            <li><a href="/employment" className="hover:underline">Employment</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Connect</h4>
          <p className="text-sm text-gray-600 mt-2">hello@fynally.io</p>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Fynally</p>
        </div>
      </div>
    </footer>
  )
}
