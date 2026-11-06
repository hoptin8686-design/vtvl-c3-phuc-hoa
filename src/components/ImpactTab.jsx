import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  TrendingDown, 
  FileText, 
  Zap, 
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { vtvlData } from '../data/vtvlData';

export default function ImpactTab({ searchQuery, onSelectPosition }) {
  const [activeSubTab, setActiveSubTab] = useState('b2ct'); // 'b2ct' | 'b2summary'
  const [filterType, setFilterType] = useState('ALL');

  const { b2ImpactDetails, b2Summary, positions, summary } = vtvlData;

  const filteredDetails = (b2ImpactDetails || []).filter(item => {
    const matchesType = filterType === 'ALL' || item.impactType === filterType;
    const matchesSearch = !searchQuery ||
      item.jobCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.vtvlCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.stage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const totalReducedHours = (b2ImpactDetails || []).reduce((acc, curr) => acc + curr.directHoursReduced, 0);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-semibold">
              Mục 4 & Mục 5 (Biểu B2)
            </span>
            <span className="text-xs text-slate-500">Chuyển đổi số & Cải tiến quy trình</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Tác Động Chuyển Đổi Số, Công Nghệ & Thay Đổi Khối Lượng
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Chi tiết các công đoạn giảm thời gian thực hiện nhờ ứng dụng phần mềm (vnEdu, iOffice, MISA, DVC Kho bạc)
          </p>
        </div>

        {/* Sub-tab Switcher */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveSubTab('b2ct')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSubTab === 'b2ct'
                ? 'bg-white text-cyan-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Biểu 4. B2_CT (Chi tiết)
          </button>
          <button
            onClick={() => setActiveSubTab('b2summary')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSubTab === 'b2summary'
                ? 'bg-white text-cyan-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" /> Biểu 5. B2 (Tổng hợp)
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
            <TrendingDown className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Tổng giờ tiết kiệm được</span>
            <div className="text-xl font-extrabold text-cyan-900 font-mono">
              -{totalReducedHours.toLocaleString()} h
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Trạng thái đối chiếu</span>
            <div className="text-lg font-extrabold text-emerald-900 font-mono">
              100% ĐẠT chuẩn
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Công đoạn cải tiến</span>
            <div className="text-xl font-extrabold text-blue-900 font-mono">
              {b2ImpactDetails?.length || 0} công đoạn
            </div>
          </div>
        </div>
      </div>

      {/* Biểu 4: Chi tiết tác động B2_CT */}
      {activeSubTab === 'b2ct' && (
        <div className="space-y-4">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'ALL', label: 'Tất cả tác động (10)' },
              { id: 'Số hóa', label: 'Số hóa (7)' },
              { id: 'Cải tiến quy trình', label: 'Cải tiến quy trình (3)' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filterType === f.id
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Biểu 4. B2_CT - Chi Tiết Tác Động Số Hóa & Cải Tiến Quy Trình
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Đo lường thời gian trước và sau cải tiến theo từng công đoạn cụ thể
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                100% Đã kiểm chứng
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Mã CV</th>
                    <th className="p-3.5">Mã VTVL</th>
                    <th className="p-3.5">Loại tác động</th>
                    <th className="p-3.5">Công đoạn thay đổi</th>
                    <th className="p-3.5 text-center">SP áp dụng</th>
                    <th className="p-3.5 text-center">Phút trước</th>
                    <th className="p-3.5 text-center">Phút sau</th>
                    <th className="p-3.5 text-right">Giờ giảm trực tiếp</th>
                    <th className="p-3.5">Nguồn / Bằng chứng</th>
                    <th className="p-3.5 text-center">Kiểm tra</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredDetails.map((item, idx) => {
                    const pos = positions.find(p => p.code === item.vtvlCode);
                    return (
                      <tr key={idx} className="hover:bg-cyan-50/40 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-cyan-800 whitespace-nowrap">
                          {item.jobCode}
                        </td>
                        <td className="p-3.5 whitespace-nowrap">
                          <button
                            onClick={() => pos && onSelectPosition(pos)}
                            className="font-mono font-semibold text-blue-700 hover:underline cursor-pointer"
                          >
                            {item.vtvlCode}
                          </button>
                        </td>
                        <td className="p-3.5">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap ${
                            item.impactType === 'Số hóa'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-teal-100 text-teal-800'
                          }`}>
                            {item.impactType}
                          </span>
                        </td>
                        <td className="p-3.5 font-medium text-slate-800 max-w-xs leading-relaxed">
                          {item.stage}
                        </td>
                        <td className="p-3.5 text-center font-mono font-semibold text-slate-800">
                          {item.spApplied.toLocaleString()}
                        </td>
                        <td className="p-3.5 text-center font-mono text-slate-500">
                          {item.minutesBefore}p
                        </td>
                        <td className="p-3.5 text-center font-mono font-bold text-emerald-600">
                          {item.minutesAfter}p
                        </td>
                        <td className="p-3.5 text-right font-mono font-extrabold text-cyan-700 whitespace-nowrap text-sm">
                          -{item.directHoursReduced.toLocaleString()} h
                        </td>
                        <td className="p-3.5 text-slate-600 max-w-xs text-[11px]">
                          {item.source}
                        </td>
                        <td className="p-3.5 text-center">
                          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold whitespace-nowrap">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {item.check}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Biểu 5: Tổng hợp thay đổi B2 */}
      {activeSubTab === 'b2summary' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Biểu 5. B2 - Bảng Tổng Hợp Thay Đổi Khối Lượng & Tác Động Ròng
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Tổng hợp tự động từ Biểu 4. B2_CT chuyển tiếp sang Biểu C3 xác định nhu cầu
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
              Công thức tự động
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="p-3.5">Mã công việc</th>
                  <th className="p-3.5">Mã VTVL</th>
                  <th className="p-3.5">Tên vị trí việc làm</th>
                  <th className="p-3.5 text-right">Giờ giảm số hóa/CT</th>
                  <th className="p-3.5 text-right">Giờ giảm thuê dịch vụ</th>
                  <th className="p-3.5 text-right">Giờ việc mới</th>
                  <th className="p-3.5 text-right">Tác động ròng</th>
                  <th className="p-3.5 text-center">Trạng thái</th>
                  <th className="p-3.5 text-center">Cảnh báo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {(b2Summary || []).map((item, idx) => {
                  const pos = positions.find(p => p.code === item.vtvlCode);
                  return (
                    <tr 
                      key={idx}
                      onClick={() => pos && onSelectPosition(pos)}
                      className="hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <td className="p-3.5 font-mono font-bold text-cyan-800 whitespace-nowrap">
                        {item.jobCode}
                      </td>
                      <td className="p-3.5 font-mono font-semibold text-blue-700 whitespace-nowrap">
                        {item.vtvlCode}
                      </td>
                      <td className="p-3.5 font-bold text-slate-800">
                        {pos?.name || item.vtvlCode}
                      </td>
                      <td className="p-3.5 text-right font-mono font-bold text-cyan-700">
                        {item.digitalHoursReduced.toLocaleString()} h
                      </td>
                      <td className="p-3.5 text-right font-mono text-slate-400">
                        0 h
                      </td>
                      <td className="p-3.5 text-right font-mono text-slate-400">
                        0 h
                      </td>
                      <td className="p-3.5 text-right font-mono font-extrabold text-emerald-700 text-sm">
                        {item.netImpactHours.toLocaleString()} h
                      </td>
                      <td className="p-3.5 text-center">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-center">
                        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {item.warning}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="bg-slate-100 font-bold text-xs text-slate-900 border-t-2 border-slate-300">
                <tr>
                  <td colSpan="3" className="p-3.5 text-right uppercase">
                    TỔNG CỘNG TÁC ĐỘNG TIẾT KIỆM RÒNG:
                  </td>
                  <td className="p-3.5 text-right font-mono text-sm text-cyan-700">
                    {totalReducedHours.toLocaleString()} h
                  </td>
                  <td className="p-3.5 text-right font-mono">0 h</td>
                  <td className="p-3.5 text-right font-mono">0 h</td>
                  <td className="p-3.5 text-right font-mono text-sm text-emerald-700">
                    -{totalReducedHours.toLocaleString()} h
                  </td>
                  <td colSpan="2" className="p-3.5 text-center text-slate-500 font-normal">
                    Chuyển tiếp tự động sang Biểu C3 cột D
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
