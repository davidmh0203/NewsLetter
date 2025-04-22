export default function NewsCard({ category, summary }) {
  return (
    <div className="border rounded p-4 shadow-sm mb-3 bg-white">
      <h3 className="text-blue-600 font-bold mb-1">{category}</h3>
      <p className="text-sm text-gray-700">{summary}</p>
    </div>
  );
}
