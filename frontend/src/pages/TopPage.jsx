import { Link } from "react-router";

function TopPage() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <ul className="bg-white border">
        <li>
          <Link to="/web-flyer-form">WEB/ビラ集計フォーム</Link>
        </li>
        <li>
          <Link to="/web-flyer-form">WEB/ビラ集計フォーム</Link>
        </li>
        <li>
          <Link to="/web-flyer-form">WEB/ビラ集計フォーム</Link>
        </li>
        <li>
          <Link to="/web-flyer-form">WEB/ビラ集計フォーム</Link>
        </li>
      </ul>
    </div>
  );
}

export default TopPage;
