import { useState } from 'react'
import { useNavigate } from 'react-router';

function TopPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolCode: '',
    schoolName: '',
    managerName: '',
    processingDate: '',
    file: null,
  });

  const [errors, setErrors] = useState({
    schoolCode: false,
    schoolName: false,
    managerName: false,
    processingDate: false,
    file: false,
  });

  const [consentChecked, setConsentChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [consentChecks, setConsentChecks] = useState({
    check1: false,
    check2: false,
    check3: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "schoolCode") {
      if (!/^\d{0,4}$/.test(value)) return;
      setErrors({ ...errors, schoolCode: value.length !== 4 });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/vnd.ms-excel" && file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      setErrors({ ...errors, file: true });
      setFormData({ ...formData, file: null });
      return;
    }
    setErrors({ ...errors, file: false });
    setFormData({ ...formData, file });
  };

  const handleConsentModal = () => {
    setModalVisible(true);
  };

  const handleModalSubmit = () => {
    if (Object.values(consentChecks).every((check) => check)) {
      setConsentChecked(true);
      setModalVisible(false);
    } else {
      alert("すべての確認事項に同意してください。");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      schoolCode: formData.schoolCode.length !== 4,
      schoolName: formData.schoolName === '' || !formData.schoolName.endsWith("校"),
      managerName: formData.managerName === '',
      processingDate: formData.processingDate === '',
      file: !formData.file,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error) || !consentChecked) {
      alert("赤く表示されたエラーを修正し、確認事項に同意してください。");
      return;
    }

    navigate("/complete");
    console.log('フォームデータ送信:', formData);
  };


  return (
    <>
      <div className="flex items-start justify-center min-h-screen pt-[120px] bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">学校情報フォーム</h1>
          <p className="text-gray-600 mb-6">以下のフォームに必要事項を入力してください。</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="schoolCode" className="block text-sm font-medium text-gray-700 mb-2">
                校舎コード（4桁の数字） <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="schoolCode"
                name="schoolCode"
                value={formData.schoolCode}
                onChange={handleChange}
                className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.schoolCode ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.schoolCode && <p className="text-red-500 text-sm">校舎コードは正確に4桁で入力してください。</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                校舎名（必ず「校」で終わる） <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.schoolName ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.schoolName && <p className="text-red-500 text-sm">校舎名は必須で、「校」で終わる必要があります。</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="managerName" className="block text-sm font-medium text-gray-700 mb-2">
                担当者名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="managerName"
                name="managerName"
                value={formData.managerName}
                onChange={handleChange}
                className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.managerName ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.managerName && <p className="text-red-500 text-sm">担当者名は必須です。</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="processingDate" className="block text-sm font-medium text-gray-700 mb-2">
                処理年月日 <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="processingDate"
                name="processingDate"
                value={formData.processingDate}
                onChange={handleChange}
                className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.processingDate ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.processingDate && <p className="text-red-500 text-sm">処理年月日は必須です。</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                Excelファイルをアップロード <span className="text-red-500">*</span>
              </label>
              <div className={`relative w-full border ${errors.file ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`}>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".xls,.xlsx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center justify-between px-4 py-3 bg-white rounded-lg">
                  <span className="text-gray-500">{formData.file ? formData.file.name : "ファイルを選択またはドラッグ＆ドロップ"}</span>
                  <button type="button" className="bg-blue-500 text-white py-1 px-3 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none">
                    ファイル選択
                  </button>
                </div>
              </div>
              {errors.file && <p className="text-red-500 text-sm">有効なExcelファイルをアップロードしてください。</p>}
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={consentChecked}
                  onChange={handleConsentModal}
                />
                利用規約に同意する
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-slate-400"
              disabled={!consentChecked}
            >
              送信
            </button>
          </form>

          {modalVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">確認事項</h2>
                <div className="mb-4">
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={consentChecks.check1}
                      onChange={() => setConsentChecks({ ...consentChecks, check1: !consentChecks.check1 })}
                    />
                    確認事項1に同意する
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={consentChecks.check2}
                      onChange={() => setConsentChecks({ ...consentChecks, check2: !consentChecks.check2 })}
                    />
                    確認事項2に同意する
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={consentChecks.check3}
                      onChange={() => setConsentChecks({ ...consentChecks, check3: !consentChecks.check3 })}
                    />
                    確認事項3に同意する
                  </label>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    onClick={() => {
                      setModalVisible(false);
                      setConsentChecked(false); // Ensure consent is reset if modal is closed without agreeing
                    }}
                  >
                    閉じる
                  </button>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={handleModalSubmit}
                  >
                    確認
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  );
}

export default TopPage;
