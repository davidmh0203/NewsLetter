import { useState } from "react";

export default function Settings() {
  const [keywords, setKeywords] = useState("");
  const [categories, setCategories] = useState({
    경제: false,
    기술: false,
    정치: false,
    세계: false,
  });

  const handleCategoryChange = (category) => {
    setCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("관심 키워드:", keywords);
    console.log(
      "선택된 카테고리:",
      Object.keys(categories).filter((c) => categories[c])
    );
  };

  return (
    <div className="max-x-4xl mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">🛠 대시보드 설정</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">
              관심 키워드 (콤마로 구분)
            </label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="예: AI, ChatGPT, 데이터"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">뉴스 카테고리</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(categories).map((category) => (
                <label key={category} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={categories[category]}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            저장하기
          </button>
        </form>
      </div>
    </div>
  );
}
