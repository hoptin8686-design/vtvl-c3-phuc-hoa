import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  UserCheck, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  FileText,
  ShieldCheck
} from 'lucide-react';
import { vtvlData } from '../data/vtvlData';

export default function StaffingTab({ onSelectPosition }) {
  const [activeSubTab, setActiveSubTab] = useState('d2'); // 'd2' | 'd1'

  const { staffingPlans, staffList, positions, summary } = vtvlData;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
              Biểu D1 & Biểu D2
            </span>
            <span className="text-xs text-slate-500">Kỳ 2026 - Phương án 2027</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Hiện Trạng Nhân Lực & Phương Án Bố Trí Biên Chế
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Phê duyệt phân bổ 35 biên chế theo Quyết định 1548/QĐ-SGD&ĐT của Sở GD&ĐT Cao Bằng
          </p>
        </div>

        {/* Sub-tab Switcher */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveSubTab('d2')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSubTab === 'd2'
                ? 'bg-white text-blue-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" /> Biểu D2 - Phương Án 2027
          </button>
          <button
            onClick={() => setActiveSubTab('d1')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSubTab === 'd1'
                ? 'bg-white text-blue-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" /> Biểu D1 - Hiện Trạng
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Tổng biên chế giao 2027</span>
            <div className="text-2xl font-extrabold text-blue-900 font-mono">
              {summary.totalAssignedStaff2027} người
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Số người có thể bố trí</span>
            <div className="text-2xl font-extrabold text-emerald-900 font-mono">
              {summary.totalCanAllocateStaff2027} người
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Đơn vị quản lý biên chế</span>
            <div className="text-sm font-bold text-purple-900">
              Sở GD&ĐT Cao Bằng
            </div>
          </div>
        </div>
      </div>

      {/* Biểu D2: Phương án 2027 */}
      {activeSubTab === 'd2' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Biểu D2 - Phương Án Bố Trí Nhân Lực Năm 2027 (Theo Đề Án)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Cơ sở giao chỉ tiêu biên chế cho 12 vị trí việc làm của Trường THPT Phục Hòa
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
              Năm thực hiện: 2027
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="p-3.5">Mã VTVL</th>
                  <th className="p-3.5">Tên vị trí việc làm</th>
                  <th className="p-3.5 text-center">Năm</th>
                  <th className="p-3.5 text-center">Có thể bố trí</th>
                  <th className="p-3.5 text-center">Biên chế giao</th>
                  <th className="p-3.5 text-center">Điều chuyển</th>
                  <th className="p-3.5 text-center">Đề nghị Đ/C</th>
                  <th className="p-3.5">Nguồn / Căn cứ</th>
                  <th className="p-3.5 text-center">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {staffingPlans.map((pl) => {
                  const position = positions.find(p => p.code === pl.vtvlCode);
                  return (
                    <tr 
                      key={pl.vtvlCode}
                      onClick={() => position && onSelectPosition(position)}
                      className="hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <td className="p-3.5 font-mono font-bold text-blue-700 whitespace-nowrap">
                        {pl.vtvlCode}
                      </td>
                      <td className="p-3.5 font-bold text-slate-800">
                        {position?.name || pl.vtvlCode}
                      </td>
                      <td className="p-3.5 text-center font-mono font-medium text-slate-600">
                        {pl.year}
                      </td>
                      <td className="p-3.5 text-center font-mono font-bold text-slate-800 text-sm">
                        {pl.canAllocateStaff}
                      </td>
                      <td className="p-3.5 text-center font-mono font-extrabold text-blue-700 text-sm">
                        {pl.assignedStaff}
                      </td>
                      <td className="p-3.5 text-center font-mono text-slate-400">
                        {pl.reassignedStaff || '0'}
                      </td>
                      <td className="p-3.5 text-center font-mono text-slate-400">
                        {pl.requestAdjustStaff || '0'}
                      </td>
                      <td className="p-3.5 text-slate-600 text-[11px]">
                        {pl.sourceExplanation || 'Đề án vị trí việc làm'}
                      </td>
                      <td className="p-3.5 text-center">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                          {pl.status || 'Đang xây dựng'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="bg-slate-100 font-bold text-xs text-slate-900 border-t-2 border-slate-300">
                <tr>
                  <td colSpan="3" className="p-3.5 text-right uppercase">
                    TỔNG CỘNG TOÀN TRƯỜNG:
                  </td>
                  <td className="p-3.5 text-center font-mono text-sm">
                    {summary.totalCanAllocateStaff2027}
                  </td>
                  <td className="p-3.5 text-center font-mono text-sm text-blue-700">
                    {summary.totalAssignedStaff2027}
                  </td>
                  <td className="p-3.5 text-center font-mono">0</td>
                  <td className="p-3.5 text-center font-mono">0</td>
                  <td colSpan="2" className="p-3.5 text-slate-600 font-normal">
                    QĐ số 1548/QĐ-SGD&ĐT tỉnh Cao Bằng
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {/* Biểu D1: Hiện trạng nguồn lực */}
      {activeSubTab === 'd1' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Biểu D1 - Hiện Trạng Nguồn Lực Đang Đảm Nhiệm VTVL
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Theo dõi 12 mã nguồn lực hiện có, quỹ thời gian phân bổ và nơi tính biên chế
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
                  <th className="p-3.5">Mã nguồn lực</th>
                  <th className="p-3.5">Mã VTVL</th>
                  <th className="p-3.5">Tên vị trí việc làm</th>
                  <th className="p-3.5">Loại nhân lực</th>
                  <th className="p-3.5 text-center">Quỹ giờ/năm</th>
                  <th className="p-3.5 text-center">Giờ dành cho VTVL</th>
                  <th className="p-3.5">Nơi tính biên chế</th>
                  <th className="p-3.5">Nguồn căn cứ</th>
                  <th className="p-3.5 text-center">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {staffList.map((s) => {
                  const position = positions.find(p => p.code === s.vtvlCode);
                  return (
                    <tr 
                      key={s.staffCode}
                      onClick={() => position && onSelectPosition(position)}
                      className="hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <td className="p-3.5 font-mono font-bold text-purple-700 whitespace-nowrap">
                        {s.staffCode}
                      </td>
                      <td className="p-3.5 font-mono font-semibold text-blue-700 whitespace-nowrap">
                        {s.vtvlCode}
                      </td>
                      <td className="p-3.5 font-bold text-slate-800">
                        {position?.name || s.vtvlCode}
                      </td>
                      <td className="p-3.5 text-slate-600">
                        {s.staffType}
                      </td>
                      <td className="p-3.5 text-center font-mono text-slate-700">
                        {s.standardHours.toLocaleString()} h
                      </td>
                      <td className="p-3.5 text-center font-mono font-bold text-indigo-700">
                        {s.allocatedHours.toLocaleString()} h
                      </td>
                      <td className="p-3.5 text-slate-700 font-medium">
                        {s.payrollUnit}
                      </td>
                      <td className="p-3.5 text-slate-500 font-mono text-[11px]">
                        {s.source}
                      </td>
                      <td className="p-3.5 text-center">
                        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {s.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
