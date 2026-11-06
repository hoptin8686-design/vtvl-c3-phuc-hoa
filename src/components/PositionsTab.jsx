import React, { useState } from 'react';
import { 
  Briefcase, 
  Clock, 
  Users, 
  Award, 
  FileText, 
  Filter, 
  LayoutGrid, 
  Table, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { vtvlData } from '../data/vtvlData';

export default function PositionsTab({ onSelectPosition, searchQuery }) {
  const [selectedGroup, setSelectedGroup] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  const groups = [
    { id: 'ALL', label: 'Tất cả vị trí (12)' },
    { id: 'Lãnh đạo, quản lý', label: 'Lãnh đạo, quản lý (4)' },
    { id: 'Chuyên môn, nghiệp vụ', label: 'Chuyên môn, nghiệp vụ (1)' },
    { id: 'Hỗ trợ, phục vụ', label: 'Hỗ trợ, phục vụ (7)' },
  ];

  const filteredPositions = vtvlData.positions.filter(pos => {
    const matchesGroup = selectedGroup === 'ALL' || pos.group === selectedGroup;
    const matchesSearch = !searchQuery || 
      pos.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pos.competency?.responsibility && pos.competency.responsibility.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesGroup && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Tab Header & Controls */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold">
              Biểu C1 & Biểu C2
            </span>
            <span className="text-xs text-slate-500">12 Vị trí việc làm</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Danh Mục Vị Trí Việc Làm & Bản Mô Tả Năng Lực
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Quy định danh mục chức danh, quỹ giờ chuẩn PP2 (1.904h/năm) và khung năng lực tiêu chuẩn
          </p>
        </div>

        {/* Filter & View Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Toggle */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-white text-blue-700 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Dạng Thẻ
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'table' ? 'bg-white text-blue-700 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Table className="w-3.5 h-3.5" /> Dạng Bảng
            </button>
          </div>
        </div>
      </div>

      {/* Group Pills */}
      <div className="flex flex-wrap gap-2">
        {groups.map(g => (
          <button
            key={g.id}
            onClick={() => setSelectedGroup(g.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedGroup === g.id
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPositions.map((pos) => {
            const { competency, demand, plan2027, jobs } = pos;
            return (
              <div
                key={pos.code}
                onClick={() => onSelectPosition(pos)}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group relative overflow-hidden"
              >
                {/* Accent top stripe */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  pos.group === 'Lãnh đạo, quản lý'
                    ? 'bg-blue-600'
                    : pos.group === 'Chuyên môn, nghiệp vụ'
                    ? 'bg-emerald-600'
                    : 'bg-purple-600'
                }`} />

                <div className="space-y-3">
                  {/* Code & Group badge */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {pos.code}
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      pos.group === 'Lãnh đạo, quản lý'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : pos.group === 'Chuyên môn, nghiệp vụ'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-purple-50 text-purple-700 border border-purple-200'
                    }`}>
                      {pos.group}
                    </span>
                  </div>

                  {/* Position Title */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {pos.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {pos.decision}
                    </p>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Bố trí 2027</span>
                      <span className="text-sm font-bold text-blue-700 font-mono">
                        {plan2027?.assignedStaff || demand?.neededStaff || 1}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Công việc</span>
                      <span className="text-sm font-bold text-slate-800 font-mono">
                        {jobs?.length || 0}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Tổng giờ</span>
                      <span className="text-sm font-bold text-indigo-700 font-mono">
                        {pos.totalWorkloadHours >= 1000 
                          ? `${Math.round(pos.totalWorkloadHours / 1000)}k h` 
                          : `${pos.totalWorkloadHours} h`}
                      </span>
                    </div>
                  </div>

                  {/* Competency snippet */}
                  <div className="text-xs text-slate-600 line-clamp-3 bg-slate-50/50 p-2.5 rounded-lg border border-slate-100">
                    <strong className="text-slate-800 block text-[11px] mb-0.5">Trách nhiệm chính:</strong>
                    {competency?.responsibility || 'Thực hiện chức trách, nhiệm vụ được phân công.'}
                  </div>
                </div>

                {/* Card footer */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> PP2: 1.904h
                  </span>
                  <span className="font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Xem hồ sơ <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Table View */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="p-3.5">Mã VTVL</th>
                  <th className="p-3.5">Tên vị trí việc làm</th>
                  <th className="p-3.5">Phân nhóm</th>
                  <th className="p-3.5">Loại nhân lực</th>
                  <th className="p-3.5 text-center">Bố trí 2027</th>
                  <th className="p-3.5 text-center">Quỹ giờ PP2</th>
                  <th className="p-3.5 text-center">Số việc (A2)</th>
                  <th className="p-3.5 text-right">Tổng giờ B1</th>
                  <th className="p-3.5 text-center">Trạng thái</th>
                  <th className="p-3.5 text-center">Xem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredPositions.map((pos) => (
                  <tr
                    key={pos.code}
                    onClick={() => onSelectPosition(pos)}
                    className="hover:bg-blue-50/60 transition-colors cursor-pointer group"
                  >
                    <td className="p-3.5 font-mono font-bold text-blue-700 whitespace-nowrap">
                      {pos.code}
                    </td>
                    <td className="p-3.5 font-bold text-slate-900 group-hover:text-blue-800">
                      {pos.name}
                    </td>
                    <td className="p-3.5">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium ${
                        pos.group === 'Lãnh đạo, quản lý' 
                          ? 'bg-blue-100 text-blue-800' 
                          : pos.group === 'Chuyên môn, nghiệp vụ'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {pos.group}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-600 font-medium">
                      {pos.staffType}
                    </td>
                    <td className="p-3.5 text-center font-bold font-mono text-sm text-slate-900">
                      {pos.plan2027?.assignedStaff || 1}
                    </td>
                    <td className="p-3.5 text-center font-mono text-slate-700">
                      {pos.standardHoursPP2.toLocaleString()} h
                    </td>
                    <td className="p-3.5 text-center font-mono text-slate-800 font-medium">
                      {pos.jobs?.length || 0}
                    </td>
                    <td className="p-3.5 text-right font-mono font-semibold text-indigo-700 whitespace-nowrap">
                      {pos.totalWorkloadHours.toLocaleString()} h
                    </td>
                    <td className="p-3.5 text-center">
                      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {pos.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-center">
                      <button className="text-blue-600 font-semibold group-hover:underline cursor-pointer">
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredPositions.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 text-sm">Không tìm thấy vị trí việc làm phù hợp với từ khóa.</p>
        </div>
      )}

    </div>
  );
}
