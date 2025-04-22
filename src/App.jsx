import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex justify-between items-center mb-4 border-b pb-2">
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 hover:underline"
          >
            📰 AI 뉴스 트렌드 알리미
          </Link>

          <div className="flex gap-6">
            <Link to="/" className="hover:underline block text-base px-2">
              대시보드
            </Link>
            <Link
              to="/settings"
              className="hover:underline block text-base px-2"
            >
              설정
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}
