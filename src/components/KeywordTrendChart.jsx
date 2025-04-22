export default function KeywordTrendChart() {
  const dummyData = [
    { label: "AI", value: 90 },
    { label: "ChatGPT", value: 70 },
    { label: "Machine Learning", value: 60 },
    { label: "OpenAI", value: 50 },
  ];

  return (
    <div className="space-y-4">
      {dummyData.map((item, index) => (
        <div key={index} className="w-full">
          <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          <div className="relative w-full h-4 bg-gray-200 rounded">
            <div
              className="absolute top-0 left-0 h-4 bg-blue-500 rounded"
              style={{ width: `${item.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
