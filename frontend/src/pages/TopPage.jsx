import { Link } from "react-router";

function TopPage() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <ul className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <li className="flex items-center min-w-[900px] justify-between">
          <p className="text-lg">WEB/ビラ集計フォーム</p>
          <div className="flex space-x-3">
            <Link
              to="/"
              className="block w-28 text-center bg-gray-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
            >
              提出状況
            </Link>
            <Link
              to="/web-flyer-form"
              className="block w-28 text-center bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
            >
              回答する
            </Link>
          </div>
        </li>
        <li className="flex items-center min-w-[900px] justify-between">
          <p className="text-lg">返金依頼フォーム</p>
          <div className="flex space-x-3">
            <Link
              to="/"
              className="block w-28 text-center bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
            >
              回答する
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TopPage;
