import React, { useState } from 'react';
import { 
  Calculator, 
  HelpCircle, 
  TrendingUp, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { vtvlData } from '../data/vtvlData';

export default function DemandsTab({ onSelectPosition }) {
  const [simulatorPosCode, setSimulatorPosCode] = useState('THPT-LĐQL.01');
  const [customHours, setCustomHours] = useState(1904);

  const selectedPos = vtvlData.positions.find(p => p.code === simulatorPosCode) || vtvlData.positions[0];

  const handlePosChange = (code) => {
    setSimulatorPosCode(code);
    const p = vtvlData.positions.find(pos => pos.code === code);
    if (p) {
      setCustomHours(p.totalWorkloadHours || 1904);
    }
  };

  const calculatedStaff = (customHours / 1904).toFixed(2);
  const roundedStaff = Math.round(customHours / 1904);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
              Biểu C3
            </span>
            <span className="text-xs text-slate-500">Xác định Nhu cầu</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Xác Định Nhu Cầu Nhân Lực Theo Phương Pháp PP1, PP2, PP3
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            So sánh giờ lao động ròng với quỹ giờ chuẩn (1.904h) và định mức chức danh theo Nghị định 232/NĐ-CP
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 font-semibold border border-blue-200">
            Quỹ giờ chuẩn: 1.904 h/người/năm
          </span>
        </div>
      </div>

      {/* 3 Methods Explanation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Method 1: PP1 */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-blue-900">Phương pháp 1 (PP1)</span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-200 text-blue-900">
              Định mức quy định
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Áp dụng định mức biên chế được giao theo hạng trường, số lớp học hoặc quy chuẩn ngành giáo dục (Hiệu trưởng, Phó Hiệu trưởng, Giáo viên).
          </p>
        </div>

        {/* Method 2: PP2 */}
        <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-indigo-900">Phương pháp 2 (PP2)</span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-200 text-indigo-900">
              Tổng giờ ròng ÷ 1.904h
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Lấy tổng số giờ công việc ròng (Biểu B1 trừ tiết kiệm B2) chia cho quỹ thời gian làm việc chuẩn 1.904 giờ để tính số biên chế quy đổi.
          </p>
        </div>

        {/* Method 3: PP3 */}
        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-purple-900">Phương pháp 3 (PP3)</span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-200 text-purple-900">
              Khối lượng thực tế
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Áp dụng theo khối lượng nhiệm vụ phát sinh thực tế tại đơn vị, tính toán kết hợp với PP1 và PP2 đối với các vị trí chuyên trách.
          </p>
        </div>

      </div>

      {/* Interactive Staffing Demand Simulator */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl border border-indigo-900/50 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center border border-indigo-400/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                Công Cụ Mô Phỏng Tính Nhu Cầu Nhân Lực Theo PP2 (Chuẩn Bộ Biểu)
              </h3>
              <p className="text-xs text-slate-300">
                Thay đổi tổng giờ hoặc sản phẩm để quan sát số lượng người quy đổi tức thì
              </p>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-indigo-200 border border-white/10 self-start sm:self-auto font-mono">
            1 người = 1.904 giờ/năm
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Controls */}
          <div className="space-y-3.5 md:col-span-2">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Chọn Vị trí việc làm cần mô phỏng:
              </label>
              <select
                value={simulatorPosCode}
                onChange={(e) => handlePosChange(e.target.value)}
                className="w-full text-xs sm:text-sm bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-white font-medium focus:outline-none focus:ring-1 focus:ring-indigo-400 cursor-pointer"
              >
                {vtvlData.positions.map(p => (
                  <option key={p.code} value={p.code}>
                    {p.code} - {p.name} ({p.totalWorkloadHours.toLocaleString()} h)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs text-slate-300 mb-1">
                <label className="font-semibold">
                  Tổng giờ lao động ròng trong năm (giờ/năm):
                </label>
                <span className="font-mono text-indigo-300 font-bold text-sm">
                  {Number(customHours).toLocaleString()} giờ
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="50"
                value={customHours}
                onChange={(e) => setCustomHours(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>100 h (Bán thời gian)</span>
                <span>1.904 h (01 Biên chế chuẩn)</span>
                <span>3.808 h (02 Biên chế)</span>
                <span>10.000 h</span>
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="text-indigo-200 font-medium flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Công thức tính PP2 theo Hướng dẫn 07:
              </div>
              <div className="font-mono text-slate-200">
                Người quy đổi = Tổng giờ ròng ÷ 1.904 = {Number(customHours).toLocaleString()} ÷ 1.904 = <strong>{calculatedStaff} người</strong>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-indigo-900/60 rounded-xl p-5 border border-indigo-700/50 flex flex-col justify-between text-center space-y-3">
            <div>
              <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold block">
                Kết quả quy đổi PP2
              </span>
              <div className="text-4xl font-extrabold text-white font-mono mt-2">
                {calculatedStaff}
              </div>
              <span className="text-xs text-indigo-200 mt-1 block">người quy đổi</span>
            </div>

            <div className="border-t border-indigo-800/80 pt-3">
              <span className="text-[11px] text-slate-300 block">Đề xuất bố trí làm tròn:</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">
                {roundedStaff === 0 ? 'Kiêm nhiệm (0.5)' : `${roundedStaff} biên chế`}
              </span>
            </div>

            <div className="text-[10px] text-slate-400">
              *Không tự ý làm tròn vượt quá khung định mức biên chế được giao.
            </div>
          </div>
        </div>
      </div>

      {/* Official C3 Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200">
          <h3 className="font-bold text-slate-900 text-base">
            Bảng Đối Chiếu Nhu Cầu Nhân Lực 12 Vị Trí (Biểu C3)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Dữ liệu chính thức trích xuất từ file Excel Trường THPT Phục Hòa
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
              <tr>
                <th className="p-3.5">Mã VTVL</th>
                <th className="p-3.5">Tên vị trí việc làm</th>
                <th className="p-3.5 text-center">Phương pháp</th>
                <th className="p-3.5 text-right">Tổng giờ B1</th>
                <th className="p-3.5 text-right">Giờ ròng</th>
                <th className="p-3.5 text-center">Người quy đổi PP2</th>
                <th className="p-3.5 text-center">Người PP1</th>
                <th className="p-3.5 text-center">Cần bố trí</th>
                <th className="p-3.5">Căn cứ giải trình</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {vtvlData.positions.map((pos) => {
                const demand = pos.demand || {};
                return (
                  <tr 
                    key={pos.code} 
                    onClick={() => onSelectPosition(pos)}
                    className="hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <td className="p-3.5 font-mono font-bold text-blue-700 whitespace-nowrap">
                      {pos.code}
                    </td>
                    <td className="p-3.5 font-semibold text-slate-800">
                      {pos.name}
                    </td>
                    <td className="p-3.5 text-center font-mono font-bold text-indigo-700">
                      {demand.method || 'PP1'}
                    </td>
                    <td className="p-3.5 text-right font-mono text-slate-700">
                      {demand.b1Hours?.toLocaleString() || pos.totalWorkloadHours.toLocaleString()} h
                    </td>
                    <td className="p-3.5 text-right font-mono font-semibold text-indigo-700">
                      {demand.netHours?.toLocaleString() || pos.totalWorkloadHours.toLocaleString()} h
                    </td>
                    <td className="p-3.5 text-center font-mono text-slate-700">
                      {demand.pp2CalculatedStaff || '-'}
                    </td>
                    <td className="p-3.5 text-center font-mono text-slate-700">
                      {demand.pp1Staff || '-'}
                    </td>
                    <td className="p-3.5 text-center font-mono font-bold text-emerald-700 text-sm">
                      {demand.neededStaff || pos.plan2027?.assignedStaff || 1}
                    </td>
                    <td className="p-3.5 text-slate-600 max-w-xs text-[11px]">
                      {demand.sourceExplanation || 'Nghị định 232/NĐ-CP'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
