export default function Card({ title, src, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-50 mt-4">
      {src ? <img className="w-full" src={src} alt="Service" /> : null}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
