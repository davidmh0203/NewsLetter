import NewsCard from "../components/NewsCard";
import KeywordTrendChart from "../components/KeywordTrendChart";

export default function Dashboard() {
  const dummyNews = [
    { category: "경제", summary: "시장 변동성이 커지고 있습니다." },
    { category: "기술", summary: "AI 기술이 산업을 혁신하고 있습니다." },
    { category: "정치", summary: "새로운 정책이 발표되었습니다." },
    { category: "세계", summary: "국제 갈등이 고조되고 있습니다." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">오늘의 뉴스 요약</h2>
          {dummyNews.map((news, idx) => (
            <NewsCard
              key={idx}
              category={news.category}
              summary={news.summary}
            />
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">트렌드 키워드</h2>
          <KeywordTrendChart />
        </div>
      </div>
    </div>
  );
}
