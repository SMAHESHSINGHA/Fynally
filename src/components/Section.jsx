export default function Section({ title, subtitle, children, className='' }) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-black">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
