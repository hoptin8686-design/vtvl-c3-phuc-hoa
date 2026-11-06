import React from 'react';
import { 
  Building2, 
  FileSpreadsheet, 
  Printer, 
  ExternalLink, 
  Search, 
  GraduationCap, 
  ShieldCheck
} from 'lucide-react';
import { exportFullExcel } from '../utils/exportExcel';

export default function Header({ searchQuery, setSearchQuery, activeTab, setActiveTab }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white shadow-xl sticky top-0 z-40 print:relative print:bg-white print:text-black">
      {/* Top Bar Banner */}
      <div className="border-b border-blue-900/40 bg-black/20 text-xs px-4 py-1.5 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium border border-blue-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            Nghị định 232/NĐ-CP
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-slate-300 hidden sm:inline">Kèm Hướng dẫn số 07</span>
          <span className="text-slate-300 hidden md:inline">•</span>
          <span className="text-slate-300 hidden md:inline">Kỳ đánh giá: 01/10/2025 - 30/09/2026</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <span className="hidden lg:inline text-slate-400">File nguồn: 30.10.2026 C3 Phục Hòa_Bo bieu VTVL</span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
            ĐÃ KIỂM CHỨNG 100%
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo & School Branding */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25 ring-2 ring-white/20 shrink-0">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-blue-300">
                  SỞ GIÁO DỤC VÀ ĐÀO TẠO CAO BẰNG
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-300 border border-amber-500/40 font-mono">
                  THPT
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                TRƯỜNG THPT PHỤC HÒA
                <span className="text-xs font-normal text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700 hidden sm:inline">
                  Hệ thống Đề án Vị trí việc làm
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Phê duyệt theo Tờ trình số 22/TTr-THPT & QĐ 1548/QĐ-SGD&ĐT • Phương án 35 biên chế 2027
              </p>
            </div>
          </div>

          {/* Search & Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Search Box */}
            <div className="relative flex-1 sm:w-64 md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm vị trí, nhiệm vụ, việc làm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800/90 hover:bg-slate-800 focus:bg-slate-900 text-sm text-white placeholder-slate-400 pl-9 pr-3 py-1.5 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Export Full Excel */}
            <button
              onClick={exportFullExcel}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-700/30 transition-all active:scale-95 cursor-pointer"
              title="Xuất trọn bộ 10 sheets thành file Excel"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span className="hidden sm:inline">Xuất Excel</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all active:scale-95 cursor-pointer"
              title="In hoặc xuất PDF báo cáo"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">In báo cáo</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
