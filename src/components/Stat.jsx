export default function Stat({ value, label }) {
  return (
    <div className="p-4 rounded-2xl border bg-white shadow-sm">
      <div className="text-2xl font-black">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}
