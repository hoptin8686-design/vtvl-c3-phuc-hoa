import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Calculator,
  Calendar,
  Layers
} from 'lucide-react';
import { vtvlData } from '../data/vtvlData';

export default function WorkloadsTab({ searchQuery, onSelectPosition }) {
  const [selectedVtvl, setSelectedVtvl] = useState('ALL');

  const filteredWorkloads = vtvlData.workloads.filter(w => {
    const job = vtvlData.jobs.find(j => j.jobCode === w.jobCode);
    const matchesVtvl = selectedVtvl === 'ALL' || w.vtvlCode === selectedVtvl;
    const matchesSearch = !searchQuery ||
      w.jobCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.vtvlCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (job && job.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesVtvl && matchesSearch;
  });

  const totalFilteredHours = filteredWorkloads.reduce((acc, curr) => acc + curr.totalHours, 0);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-semibold">
              Biểu B1
            </span>
            <span className="text-xs text-slate-500">33 Dòng định mức khối lượng</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Đo Lường Khối Lượng & Định Mức Thời Gian Công Việc
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Xác định Số SP/năm, phút/SP đo thực tế, giờ bổ sung liên quan và tổng giờ lao động chuẩn
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2.5">
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
        </div>
      </div>

      {/* KPI Metric Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Tổng giờ đang xem</span>
            <div className="text-lg font-extrabold text-indigo-900 font-mono">
              {totalFilteredHours.toLocaleString()} h
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Tỷ lệ cảnh báo ĐẠT</span>
            <div className="text-lg font-extrabold text-emerald-900 font-mono">
              100% (33/33)
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Quỹ giờ PP2 chuẩn</span>
            <div className="text-lg font-extrabold text-blue-900 font-mono">
              1.904 h / người / năm
            </div>
          </div>
        </div>
      </div>

      {/* Workload Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
              <tr>
                <th className="p-3.5">Mã CV</th>
                <th className="p-3.5">VTVL đảm nhiệm</th>
                <th className="p-3.5">Tên công việc</th>
                <th className="p-3.5 text-center">Số SP/năm</th>
                <th className="p-3.5 text-center">Phút/SP đo</th>
                <th className="p-3.5 text-right">Giờ SP tính</th>
                <th className="p-3.5 text-right">Giờ bổ sung</th>
                <th className="p-3.5 text-right">Tổng giờ (F+G)</th>
                <th className="p-3.5 text-center">Cảnh báo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredWorkloads.map((w) => {
                const job = vtvlData.jobs.find(j => j.jobCode === w.jobCode);
                const position = vtvlData.positions.find(p => p.code === w.vtvlCode);

                return (
                  <tr key={w.jobCode} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-amber-700 whitespace-nowrap">
                      {w.jobCode}
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <button
                        onClick={() => position && onSelectPosition(position)}
                        className="font-medium text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
                      >
                        {w.vtvlCode}
                      </button>
                    </td>
                    <td className="p-3.5 font-medium text-slate-800 max-w-xs">
                      {job?.name || w.jobCode}
                    </td>
                    <td className="p-3.5 text-center font-mono font-semibold text-slate-900">
                      {w.productsPerYear.toLocaleString()}
                    </td>
                    <td className="p-3.5 text-center font-mono text-slate-600">
                      {w.minutesPerProduct} p
                    </td>
                    <td className="p-3.5 text-right font-mono text-slate-700">
                      {w.computedProductHours.toLocaleString()} h
                    </td>
                    <td className="p-3.5 text-right font-mono text-slate-700">
                      {w.additionalHours.toLocaleString()} h
                    </td>
                    <td className="p-3.5 text-right font-mono font-bold text-indigo-700 whitespace-nowrap">
                      {w.totalHours.toLocaleString()} h
                    </td>
                    <td className="p-3.5 text-center">
                      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold whitespace-nowrap">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {w.warning || 'ĐẠT'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 flex justify-between items-center">
        <span>Quy tắc: Giờ SP = (Số SP × Phút/SP) ÷ 60 • Tổng giờ = Giờ SP + Giờ bổ sung công việc liên quan.</span>
      </div>

    </div>
  );
}
