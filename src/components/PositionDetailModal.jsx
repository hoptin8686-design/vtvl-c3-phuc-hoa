import React from 'react';
import { 
  X, 
  Briefcase, 
  Clock, 
  UserCheck, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function PositionDetailModal({ position, onClose }) {
  if (!position) return null;

  const { competency, demand, plan2027, currentStaff, jobs } = position;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-blue-500/30 text-blue-200 border border-blue-400/30 font-bold">
                {position.code}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                {position.group}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                {position.status}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              {position.name}
            </h2>
            <p className="text-xs text-blue-200/80">
              Quyết định: {position.decision} • Chế độ: {position.workMode}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-xs text-blue-600 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Quỹ giờ PP2
              </div>
              <div className="text-lg font-bold text-blue-900 mt-0.5">
                {position.standardHoursPP2.toLocaleString()} h
              </div>
              <div className="text-[11px] text-blue-700/80">40 giờ/tuần</div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" /> Bố trí 2027
              </div>
              <div className="text-lg font-bold text-emerald-900 mt-0.5">
                {plan2027?.assignedStaff || demand?.neededStaff || 1} người
              </div>
              <div className="text-[11px] text-emerald-700/80">Biên chế được giao</div>
            </div>

            <div className="p-3 rounded-xl bg-purple-50 border border-purple-100">
              <div className="text-xs text-purple-600 font-medium flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Công việc A2
              </div>
              <div className="text-lg font-bold text-purple-900 mt-0.5">
                {jobs?.length || 0} việc
              </div>
              <div className="text-[11px] text-purple-700/80">Phân rã nghiệp vụ</div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
              <div className="text-xs text-amber-600 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Phương pháp
              </div>
              <div className="text-lg font-bold text-amber-900 mt-0.5">
                {demand?.method || 'PP1'}
              </div>
              <div className="text-[11px] text-amber-700/80">Căn cứ NĐ 232</div>
            </div>
          </div>

          {/* Section 1: Bản mô tả công việc & Khung năng lực (Biểu C2) */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 border-b border-slate-200 pb-2">
              <Award className="w-4 h-4 text-blue-600" />
              Bản Mô Tả Công Việc & Khung Năng Lực (Biểu C2)
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-slate-900 block mb-0.5">Trách nhiệm chính & Sản phẩm:</span>
                <p className="text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80 leading-relaxed">
                  {competency?.responsibility || 'Theo sự phân công của Ban Giám hiệu nhà trường.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <span className="font-semibold text-slate-900 block mb-0.5">Năng lực chung:</span>
                  <p className="text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80 leading-relaxed text-xs">
                    {competency?.generalCompetency || 'Chấp hành chủ trương đường lối của Đảng, pháp luật của Nhà nước; có ý thức tổ chức kỷ luật và tinh thần trách nhiệm cao.'}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block mb-0.5">Năng lực chuyên môn:</span>
                  <p className="text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80 leading-relaxed text-xs">
                    {competency?.professionalCompetency || 'Đạt chuẩn trình độ đào tạo và năng lực chuyên môn theo quy định hiện hành.'}
                  </p>
                </div>
              </div>

              {competency?.leadershipCompetency && (
                <div>
                  <span className="font-semibold text-slate-900 block mb-0.5">Năng lực lãnh đạo / quản lý:</span>
                  <p className="text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80 leading-relaxed text-xs">
                    {competency.leadershipCompetency}
                  </p>
                </div>
              )}

              <div className="text-[11px] text-slate-500 pt-1">
                <strong>Căn cứ:</strong> {competency?.legalBasis || 'Bản mô tả công việc của Trường THPT Phục Hòa'}
              </div>
            </div>
          </div>

          {/* Section 2: Danh sách các công việc phân rã (Biểu A2 & B1) */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                Danh Mục Công Việc & Khối Lượng Thực Hiện (Biểu A2 & B1)
              </span>
              <span className="text-xs font-normal text-slate-500">
                Tổng giờ: <strong className="text-indigo-700">{position.totalWorkloadHours.toLocaleString()} h/năm</strong>
              </span>
            </h3>

            {jobs && jobs.length > 0 ? (
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Mã CV</th>
                      <th className="p-2.5">Tên công việc</th>
                      <th className="p-2.5">Sản phẩm đầu ra</th>
                      <th className="p-2.5 text-center">Số SP</th>
                      <th className="p-2.5 text-center">Phút/SP</th>
                      <th className="p-2.5 text-right">Tổng giờ/năm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {jobs.map((job) => (
                      <tr key={job.jobCode} className="hover:bg-slate-50">
                        <td className="p-2.5 font-mono font-medium text-blue-700 whitespace-nowrap">
                          {job.jobCode}
                        </td>
                        <td className="p-2.5 font-medium text-slate-800">
                          {job.name}
                        </td>
                        <td className="p-2.5 text-slate-600">
                          {job.product} <span className="text-slate-400">({job.unit})</span>
                        </td>
                        <td className="p-2.5 text-center font-mono">
                          {job.workload?.productsPerYear?.toLocaleString() || '-'}
                        </td>
                        <td className="p-2.5 text-center font-mono text-slate-500">
                          {job.workload?.minutesPerProduct || '-'}
                        </td>
                        <td className="p-2.5 text-right font-mono font-semibold text-indigo-700 whitespace-nowrap">
                          {job.workload?.totalHours?.toLocaleString() || '-'} h
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">Chưa có công việc phân rã.</p>
            )}
          </div>

          {/* Section 3: Hiện trạng (D1) & Phương án nhân sự 2027 (D2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50 space-y-2">
              <h4 className="font-semibold text-xs text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                Hiện trạng nhân lực (Biểu D1)
              </h4>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Mã nguồn lực:</span>
                  <span className="font-mono font-semibold text-slate-800">{currentStaff?.staffCode || 'LK-NL-xxx'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Loại nhân lực:</span>
                  <span className="font-medium text-slate-800">{currentStaff?.staffType || position.staffType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Đơn vị quản lý biên chế:</span>
                  <span className="font-medium text-slate-800">{currentStaff?.payrollUnit || 'Sở GD&ĐT Cao Bằng'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Trạng thái xác thực:</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {currentStaff?.status || 'Đã kiểm chứng'}
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50 space-y-2">
              <h4 className="font-semibold text-xs text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                Phương án bố trí 2027 (Biểu D2)
              </h4>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Nhu cầu cần bố trí:</span>
                  <span className="font-semibold text-slate-800">{demand?.neededStaff || plan2027?.neededStaff || 1} người</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Số người có thể bố trí:</span>
                  <span className="font-semibold text-slate-800">{plan2027?.canAllocateStaff || 1} người</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Biên chế được giao:</span>
                  <span className="font-bold text-blue-700">{plan2027?.assignedStaff || 1} người</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Căn cứ phê duyệt:</span>
                  <span className="text-slate-700 font-medium">{plan2027?.sourceExplanation || 'Đề án vị trí việc làm'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Trường THPT Phục Hòa • Cập nhật 30/10/2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}
