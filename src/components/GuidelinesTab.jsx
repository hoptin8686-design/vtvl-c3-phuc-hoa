import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Search, 
  ListChecks, 
  Hash, 
  FileText, 
  Zap, 
  Settings,
  ShieldAlert
} from 'lucide-react';
import { vtvlData } from '../data/vtvlData';

export default function GuidelinesTab() {
  const [guideSubTab, setGuideSubTab] = useState('huongdan'); // 'huongdan' | 'dienbieu' | 'quytac' | 'thaotac' | 'thamso'
  const [fieldSearch, setFieldSearch] = useState('');

  const { guidelines, fieldGuides, codeRules, quickOps, params } = vtvlData;

  const filteredFieldGuides = fieldGuides.filter(f => {
    if (!fieldSearch) return true;
    const q = fieldSearch.toLowerCase();
    return f.sheetGroup.toLowerCase().includes(q) ||
      f.fieldName.toLowerCase().includes(q) ||
      f.whatToFill.toLowerCase().includes(q) ||
      f.colLetter.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 font-semibold">
              Cẩm Nang Tra Cứu
            </span>
            <span className="text-xs text-slate-500">Kèm Hướng dẫn 07</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Hướng Dẫn Nghiệp Vụ, Điền Biểu & Quy Tắc Mã Hóa
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Quy định nghiệp vụ chính thức giúp các đơn vị rà soát, đối chiếu và điền đúng biểu mẫu VTVL
          </p>
        </div>

        {/* Sub-nav buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setGuideSubTab('huongdan')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              guideSubTab === 'huongdan' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mục lục biểu
          </button>
          <button
            onClick={() => setGuideSubTab('dienbieu')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              guideSubTab === 'dienbieu' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Điền từng cột
          </button>
          <button
            onClick={() => setGuideSubTab('quytac')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              guideSubTab === 'quytac' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Quy tắc mã
          </button>
          <button
            onClick={() => setGuideSubTab('thaotac')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              guideSubTab === 'thaotac' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Thao tác nhanh
          </button>
          <button
            onClick={() => setGuideSubTab('thamso')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              guideSubTab === 'thamso' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tham số chuẩn
          </button>
        </div>
      </div>

      {/* Subtab 1: HUONG_DAN */}
      {guideSubTab === 'huongdan' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200">
            <h3 className="font-bold text-slate-900 text-base">
              Danh Mục & Hướng Dẫn Sử Dụng Bộ Biểu Vị Trí Việc Làm
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Mục lục và chỉ dẫn chức năng của từng bảng biểu nghiệp vụ
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="p-3.5 text-center">STT</th>
                  <th className="p-3.5">Tên Biểu</th>
                  <th className="p-3.5">Nội dung dữ liệu</th>
                  <th className="p-3.5">Chỉ dẫn & Nguyên tắc nghiệp vụ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {guidelines.map((g, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 text-center font-mono font-medium text-slate-500">
                      {g.stt || idx + 1}
                    </td>
                    <td className="p-3.5 font-mono font-bold text-blue-700 whitespace-nowrap">
                      {g.sheetName}
                    </td>
                    <td className="p-3.5 text-slate-800 font-medium max-w-sm">
                      {g.content}
                    </td>
                    <td className="p-3.5 text-slate-600 leading-relaxed">
                      {g.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Subtab 2: HD_DIEN_BIEU */}
      {guideSubTab === 'dienbieu' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm hướng dẫn điền cột, biểu, tên trường..."
                value={fieldSearch}
                onChange={(e) => setFieldSearch(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 pl-9 pr-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Tìm thấy {filteredFieldGuides.length} trường hướng dẫn
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Biểu</th>
                    <th className="p-3.5 text-center">Cột</th>
                    <th className="p-3.5">Tên trường</th>
                    <th className="p-3.5">Nội dung cần điền</th>
                    <th className="p-3.5">Nguồn lấy dữ liệu</th>
                    <th className="p-3.5">Lưu ý / Điều cấm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredFieldGuides.slice(0, 50).map((f, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-semibold text-blue-800 max-w-xs">
                        {f.sheetGroup}
                      </td>
                      <td className="p-3.5 text-center font-mono font-bold text-purple-700">
                        {f.colLetter}
                      </td>
                      <td className="p-3.5 font-bold text-slate-800">
                        {f.fieldName}
                      </td>
                      <td className="p-3.5 text-slate-700 leading-relaxed max-w-xs">
                        {f.whatToFill}
                      </td>
                      <td className="p-3.5 text-slate-600 text-[11px]">
                        {f.dataSource}
                      </td>
                      <td className="p-3.5 text-rose-700 bg-rose-50/30 text-[11px] leading-relaxed max-w-xs">
                        {f.doNotDo || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Subtab 3: QUY_TAC_MA */}
      {guideSubTab === 'quytac' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200">
            <h3 className="font-bold text-slate-900 text-base">
              Quy Tắc Đặt Mã Nhận Diện (QUY_TAC_MA)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Đảm bảo tính duy nhất, kế thừa và liên kết tự động giữa các bộ biểu
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="p-3.5">Nhóm mã</th>
                  <th className="p-3.5">Nguyên tắc chung</th>
                  <th className="p-3.5 font-mono">Ví dụ minh họa</th>
                  <th className="p-3.5">Trách nhiệm / Kiểm tra</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {codeRules.map((r, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900">
                      {r.groupName}
                    </td>
                    <td className="p-3.5 text-slate-700 leading-relaxed">
                      {r.principle}
                    </td>
                    <td className="p-3.5 font-mono font-semibold text-blue-700 whitespace-nowrap bg-blue-50/40">
                      {r.example}
                    </td>
                    <td className="p-3.5 text-slate-600">
                      {r.responsibility}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Subtab 4: THAO_TAC_NHANH */}
      {guideSubTab === 'thaotac' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200">
            <h3 className="font-bold text-slate-900 text-base">
              Quy Trình 7 Bước Thao Tác Nhanh (THAO_TAC_NHANH)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Các bước chuẩn hóa từ kế thừa nhiệm vụ đến phương án phân bổ biên chế
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="p-3.5 text-center">Bước</th>
                  <th className="p-3.5 font-mono">Biểu sử dụng</th>
                  <th className="p-3.5">Cơ sở cần làm</th>
                  <th className="p-3.5">Không làm / Điều kiện được tính</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {quickOps.map((op, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 text-center font-bold text-sm text-indigo-700 font-mono">
                      {op.step}
                    </td>
                    <td className="p-3.5 font-mono font-bold text-blue-700">
                      {op.sheet}
                    </td>
                    <td className="p-3.5 font-medium text-slate-800 leading-relaxed">
                      {op.action}
                    </td>
                    <td className="p-3.5 text-rose-700 bg-rose-50/20 leading-relaxed">
                      {op.restrictions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Subtab 5: DM_THAM_SO */}
      {guideSubTab === 'thamso' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200">
            <h3 className="font-bold text-slate-900 text-base">
              Tham Số Dùng Chung & Danh Sách Lựa Chọn (DM_THAM_SO)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Đã khóa theo quy định — chỉ cơ quan chủ trì được phép sửa
            </p>
          </div>
          <div className="p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2">
                <div className="text-xs text-blue-600 uppercase font-semibold">Tham số cốt lõi 1</div>
                <div className="text-xl font-extrabold text-blue-900">Quỹ giờ PP2: 1.904 giờ/người/năm</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  (261 ngày − 11 ngày lễ, Tết − 12 ngày phép) × 8 giờ = 1.904 giờ. Áp dụng cho chế độ làm việc phổ biến 40 giờ/tuần.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 space-y-2">
                <div className="text-xs text-purple-600 uppercase font-semibold">Tham số cốt lõi 2</div>
                <div className="text-xl font-extrabold text-purple-900">Sức chứa biểu: 200 dòng</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dòng 3–202. Công thức và danh sách chọn đã đặt sẵn cho toàn vùng để đồng bộ tổng hợp đa cấp.
                </p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden mt-4">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Tên tham số</th>
                    <th className="p-3 font-mono">Giá trị chuẩn</th>
                    <th className="p-3">Căn cứ / Phương pháp tính</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {params.map((p, idx) => (
                    <tr key={idx}>
                      <td className="p-3 font-semibold text-slate-800">{p.name}</td>
                      <td className="p-3 font-mono font-bold text-blue-700">{p.value}</td>
                      <td className="p-3 text-slate-600">{p.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

