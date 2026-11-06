import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  Filter, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { vtvlData } from '../data/vtvlData';

export default function JobsTab({ searchQuery, onSelectPosition }) {
  const [selectedVtvl, setSelectedVtvl] = useState('ALL');
  const [selectedTask, setSelectedTask] = useState('ALL');

  const filteredJobs = vtvlData.jobs.filter(job => {
    const matchesVtvl = selectedVtvl === 'ALL' || job.vtvlCode === selectedVtvl;
    const matchesTask = selectedTask === 'ALL' || job.taskCode === selectedTask;
    const matchesSearch = !searchQuery ||
      job.jobCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.vtvlCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesVtvl && matchesTask && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">
              Biểu A2
            </span>
            <span className="text-xs text-slate-500">33 Công việc chuẩn hóa</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Phân Rã Công Việc, Sản Phẩm & Trách Nhiệm
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Cơ sở xác định sản phẩm đầu ra, đơn vị tính, chất lượng và gắn mã VTVL chịu trách nhiệm
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2.5">
          <select
            value={selectedVtvl}
            onChange={(e) => setSelectedVtvl(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
          >
            <option value="ALL">Tất cả VTVL ({vtvlData.positions.length})</option>
            {vtvlData.positions.map(p => (
              <option key={p.code} value={p.code}>{p.code} - {p.name}</option>
            ))}
          </select>

          <select
            value={selectedTask}
            onChange={(e) => setSelectedTask(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
          >
            <option value="ALL">Tất cả nhiệm vụ ({vtvlData.tasks.length})</option>
            {vtvlData.tasks.map(t => (
              <option key={t.code} value={t.code}>{t.code}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
              <tr>
                <th className="p-3.5">Mã CV</th>
                <th className="p-3.5">Nhiệm vụ</th>
                <th className="p-3.5">VTVL đảm nhiệm</th>
                <th className="p-3.5">Tên công việc</th>
                <th className="p-3.5">Sản phẩm đầu ra</th>
                <th className="p-3.5 text-center">ĐVT</th>
                <th className="p-3.5 text-center">Chất lượng</th>
                <th className="p-3.5">Căn cứ (nguồn)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredJobs.map((job) => {
                const position = vtvlData.positions.find(p => p.code === job.vtvlCode);
                return (
                  <tr key={job.jobCode} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-amber-700 whitespace-nowrap">
                      {job.jobCode}
                    </td>
                    <td className="p-3.5 font-mono text-purple-700 font-medium whitespace-nowrap">
                      {job.taskCode}
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <button
                        onClick={() => position && onSelectPosition(position)}
                        className="font-medium text-blue-700 hover:text-blue-900 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {job.vtvlCode}
                        <span className="text-[11px] text-slate-500">({position?.name || ''})</span>
                      </button>
                    </td>
                    <td className="p-3.5 font-semibold text-slate-800 max-w-xs">
                      {job.name}
                    </td>
                    <td className="p-3.5 text-slate-700 max-w-xs">
                      {job.product}
                    </td>
                    <td className="p-3.5 text-center font-medium text-slate-600 whitespace-nowrap">
                      {job.unit}
                    </td>
                    <td className="p-3.5 text-center">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-medium whitespace-nowrap">
                        {job.quality}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-500 text-[11px]">
                      {job.source}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 flex justify-between items-center">
        <span>Hiển thị <strong>{filteredJobs.length}</strong> / {vtvlData.jobs.length} công việc phân rã.</span>
        <span className="text-slate-500">Toàn bộ 33 công việc đã được xác nhận mã và đối chiếu căn cứ.</span>
      </div>

    </div>
  );
}

