import React from 'react';
import { 
  Building2, 
  Users, 
  Briefcase, 
  ListTodo, 
  Clock, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  School,
  UserCheck
} from 'lucide-react';
import { vtvlData } from '../data/vtvlData';

export default function Dashboard({ onSelectPosition, setActiveTab }) {
  const { summary, metadata, positions, tasks } = vtvlData;

  const groupStats = [
    {
      name: 'Lãnh đạo, quản lý',
      count: summary.groupBreakdown.lanhDao,
      positions: 4,
      percentage: Math.round((summary.groupBreakdown.lanhDao / summary.totalAssignedStaff2027) * 100),
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
      description: 'Hiệu trưởng, Phó Hiệu trưởng (2), Tổ trưởng CM (2), Tổ phó CM (2)'
    },
    {
      name: 'Chuyên môn, nghiệp vụ',
      count: summary.groupBreakdown.chuyenMon,
      positions: 1,
      percentage: Math.round((summary.groupBreakdown.chuyenMon / summary.totalAssignedStaff2027) * 100),
      color: 'from-emerald-600 to-teal-700',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-200',
      description: 'Giáo viên THPT (22 biên chế giảng dạy và chủ nhiệm các bộ môn)'
    },
    {
      name: 'Hỗ trợ, phục vụ',
      count: summary.groupBreakdown.hoTro,
      positions: 7,
      percentage: Math.round((summary.groupBreakdown.hoTro / summary.totalAssignedStaff2027) * 100),
      color: 'from-purple-600 to-pink-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200',
      description: 'Giáo vụ (1), Thiết bị TN (1), Y tế (1), Kế toán (1), Văn thư (1), Thư viện (1), Tư vấn HS (1)'
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Hero Welcome & Overview Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <School className="w-3.5 h-3.5" />
            Đề Án Vị Trí Việc Làm 2026 - Phương Án 2027
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Trường Trung Học Phổ Thông Phục Hòa
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hệ thống quản lý, theo dõi và tra cứu toàn diện <strong>Bộ biểu Vị trí việc làm (VTVL)</strong> theo Hướng dẫn 07 và Nghị định số 232/NĐ-CP của Chính phủ. Đã hoàn thành chuẩn hóa 14 nhiệm vụ, 33 công việc phân rã, 12 vị trí việc làm và phương án phân bổ <strong>35 biên chế</strong>.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/10">
              Cơ quan phê duyệt: Sở GD&ĐT Cao Bằng
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/10">
              Định mức PP2: 1.904 giờ/người/năm
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/10">
              Hiệu lực: 30/10/2026
            </span>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -right-12 -bottom-12 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* 4 Main KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Vị trí việc làm */}
        <div 
          onClick={() => setActiveTab('positions')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Vị trí việc làm (C1)
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Briefcase className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">{summary.totalPositions}</span>
            <span className="text-xs font-medium text-blue-600">vị trí chuẩn</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            4 Lãnh đạo, 1 CMNV, 7 Hỗ trợ
          </p>
        </div>

        {/* Card 2: Biên chế phương án 2027 */}
        <div 
          onClick={() => setActiveTab('staffing')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Biên chế 2027 (D2)
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">{summary.totalAssignedStaff2027}</span>
            <span className="text-xs font-medium text-emerald-600">người được giao</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Nhu cầu cần bố trí: {summary.totalNeededStaff} người
          </p>
        </div>

        {/* Card 3: Nhiệm vụ */}
        <div 
          onClick={() => setActiveTab('tasks')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Nhiệm vụ (A1)
            </span>
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <ListTodo className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">{summary.totalTasks}</span>
            <span className="text-xs font-medium text-purple-600">nhiệm vụ lớn</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Theo đề án VTVL Nghị định 232
          </p>
        </div>

        {/* Card 4: Công việc phân rã */}
        <div 
          onClick={() => setActiveTab('jobs')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Công việc (A2 & B1)
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">{summary.totalJobs}</span>
            <span className="text-xs font-medium text-amber-600">công việc</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            100% đạt chuẩn khối lượng đo lường
          </p>
        </div>

      </div>

      {/* Group Distribution & Org Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: 3 Staff Groups */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Cơ Cấu Biên Chế Theo Nhóm (35 Người)
            </h3>
            <span className="text-xs text-slate-500">Năm 2027</span>
          </div>

          <div className="space-y-4">
            {groupStats.map((group) => (
              <div key={group.name} className={`p-4 rounded-xl border ${group.borderColor} ${group.bgColor} space-y-2`}>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900 text-sm">{group.name}</span>
                  <span className={`text-base font-extrabold ${group.textColor}`}>
                    {group.count} người ({group.percentage}%)
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-white/80 rounded-full h-2 overflow-hidden border border-slate-200">
                  <div 
                    className={`h-full bg-gradient-to-r ${group.color} rounded-full`}
                    style={{ width: `${group.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {group.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quỹ giờ chuẩn tham số */}
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
            <div className="font-semibold text-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              Công thức Quỹ giờ quy đổi PP2 (Tham số chuẩn)
            </div>
            <p className="text-[11px] leading-relaxed text-slate-500">
              (261 ngày làm việc − 11 ngày lễ, Tết − 12 ngày phép) × 8 giờ = <strong>1.904 giờ/người/năm</strong>.
              Áp dụng theo chế độ 40 giờ/tuần đối với viên chức.
            </p>
          </div>
        </div>

        {/* Right Col: Sơ đồ tổ chức cơ cấu trực quan Trường THPT Phục Hòa */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <School className="w-4 h-4 text-indigo-600" />
                Sơ Đồ Cơ Cấu Tổ Chức & Vị Trí Việc Làm
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Trường THPT Phục Hòa • Bố trí 12 vị trí việc làm theo Nghị định 232
              </p>
            </div>
            <button
              onClick={() => setActiveTab('positions')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              Xem tất cả <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Org Tree Visualization */}
          <div className="space-y-4 pt-2">
            
            {/* Level 1: Hiệu trưởng */}
            <div className="flex justify-center">
              <div 
                onClick={() => onSelectPosition(positions[0])}
                className="w-full max-w-sm bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-3.5 rounded-xl shadow-md text-center cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="text-[11px] text-blue-200 font-medium">LÃNH ĐẠO CAO NHẤT (THPT-LĐQL.01)</div>
                <div className="text-base font-bold">Hiệu trưởng (01 biên chế)</div>
                <div className="text-xs text-blue-100/90 mt-0.5">Phụ trách toàn diện quản trị & kế hoạch phát triển</div>
              </div>
            </div>

            {/* Tree Branch line */}
            <div className="w-px h-4 bg-slate-300 mx-auto" />

            {/* Level 2: Phó hiệu trưởng */}
            <div className="flex justify-center">
              <div 
                onClick={() => onSelectPosition(positions[1])}
                className="w-full max-w-sm bg-blue-50 border border-blue-200 p-3 rounded-xl text-center cursor-pointer hover:bg-blue-100 transition-colors"
              >
                <div className="text-[11px] text-blue-600 font-semibold">BAN GIÁM HIỆU (THPT-LĐQL.02)</div>
                <div className="text-sm font-bold text-slate-900">Phó Hiệu trưởng (02 biên chế)</div>
                <div className="text-xs text-slate-500">Giúp việc Hiệu trưởng, điều hành lĩnh vực chuyên môn</div>
              </div>
            </div>

            {/* Tree Branch line */}
            <div className="w-px h-4 bg-slate-300 mx-auto" />

            {/* Level 3: 2 Khối trực thuộc (Chuyên môn vs Hỗ trợ) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Khối Chuyên môn & Giảng dạy */}
              <div className="border border-emerald-200 bg-emerald-50/50 p-4 rounded-xl space-y-2.5">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center justify-between">
                  <span>Khối Chuyên Môn & Giảng Dạy</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold text-[11px]">
                    26 Biên chế
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div 
                    onClick={() => onSelectPosition(positions[2])}
                    className="p-2 bg-white rounded-lg border border-emerald-100 hover:border-emerald-300 text-xs flex justify-between items-center cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="font-semibold text-slate-900">Tổ trưởng chuyên môn</span>
                      <span className="text-[10px] text-slate-400 block">THPT-LĐQL.03</span>
                    </div>
                    <span className="font-bold text-emerald-700">02 người</span>
                  </div>

                  <div 
                    onClick={() => onSelectPosition(positions[3])}
                    className="p-2 bg-white rounded-lg border border-emerald-100 hover:border-emerald-300 text-xs flex justify-between items-center cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="font-semibold text-slate-900">Tổ phó chuyên môn</span>
                      <span className="text-[10px] text-slate-400 block">THPT-LĐQL.04</span>
                    </div>
                    <span className="font-bold text-emerald-700">02 người</span>
                  </div>

                  <div 
                    onClick={() => onSelectPosition(positions[4])}
                    className="p-2 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 text-xs flex justify-between items-center cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="font-bold">Giáo viên trung học phổ thông</span>
                      <span className="text-[10px] text-emerald-100 block">THPT-CMNV.01 • Giảng dạy toàn trường</span>
                    </div>
                    <span className="font-extrabold text-sm bg-white/20 px-2 py-0.5 rounded">22 người</span>
                  </div>
                </div>
              </div>

              {/* Khối Hành chính & Hỗ trợ phục vụ */}
              <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl space-y-2.5">
                <div className="text-xs font-bold text-purple-800 uppercase tracking-wider flex items-center justify-between">
                  <span>Khối Văn Phòng & Hỗ Trợ</span>
                  <span className="px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-bold text-[11px]">
                    07 Biên chế
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {positions.slice(5).map((pos) => (
                    <div 
                      key={pos.code}
                      onClick={() => onSelectPosition(pos)}
                      className="p-2 bg-white rounded-lg border border-purple-100 hover:border-purple-300 flex justify-between items-center cursor-pointer transition-colors"
                    >
                      <span className="font-medium text-slate-800 truncate pr-1" title={pos.name}>
                        {pos.name}
                      </span>
                      <span className="font-bold text-purple-700 shrink-0">1</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Positions Quick Table Overview */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              Bảng Tổng Hợp 12 Vị Trí Việc Làm (Biểu C1 & D2)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Nhấp vào bất kỳ dòng nào để mở hồ sơ năng lực chi tiết và danh mục công việc
            </p>
          </div>
          <button
            onClick={() => setActiveTab('positions')}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors self-start sm:self-auto cursor-pointer"
          >
            Xem dạng thẻ & đối chiếu đầy đủ →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
              <tr>
                <th className="p-3.5">Mã VTVL</th>
                <th className="p-3.5">Tên vị trí việc làm</th>
                <th className="p-3.5">Khối / Nhóm</th>
                <th className="p-3.5 text-center">Biên chế 2027</th>
                <th className="p-3.5 text-center">Phương pháp</th>
                <th className="p-3.5 text-right">Tổng giờ B1</th>
                <th className="p-3.5 text-center">Trạng thái</th>
                <th className="p-3.5 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {positions.map((pos) => (
                <tr 
                  key={pos.code} 
                  onClick={() => onSelectPosition(pos)}
                  className="hover:bg-blue-50/60 transition-colors cursor-pointer group"
                >
                  <td className="p-3.5 font-mono font-semibold text-blue-700">
                    {pos.code}
                  </td>
                  <td className="p-3.5 font-bold text-slate-800 group-hover:text-blue-900">
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
                  <td className="p-3.5 text-center font-bold text-sm text-slate-900 font-mono">
                    {pos.plan2027?.assignedStaff || 1}
                  </td>
                  <td className="p-3.5 text-center font-mono font-medium text-slate-600">
                    {pos.demand?.method || 'PP1'}
                  </td>
                  <td className="p-3.5 text-right font-mono font-semibold text-indigo-700">
                    {pos.totalWorkloadHours.toLocaleString()} h
                  </td>
                  <td className="p-3.5 text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Đạt
                    </span>
                  </td>
                  <td className="p-3.5 text-center">
                    <span className="text-blue-600 group-hover:underline text-xs font-semibold">
                      Chi tiết →
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legal & Decision Footer */}
      <div className="bg-slate-100/80 rounded-2xl p-5 border border-slate-200/80 text-xs text-slate-600 space-y-2">
        <h4 className="font-bold text-slate-800 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Hồ sơ Căn cứ Pháp lý & Thẩm quyền Phê duyệt
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-slate-500 pt-1">
          <div className="p-2.5 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-700 block mb-0.5">1. Nghị định số 232/NĐ-CP</strong>
            Quy định về vị trí việc làm và biên chế viên chức trong các đơn vị sự nghiệp giáo dục công lập.
          </div>
          <div className="p-2.5 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-700 block mb-0.5">2. Tờ trình số 22/TTr-THPT</strong>
            Tờ trình ngày 08/10/2026 của Trường THPT Phục Hòa đề nghị phê duyệt Đề án VTVL.
          </div>
          <div className="p-2.5 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-700 block mb-0.5">3. Quyết định 1548/QĐ-SGD&ĐT</strong>
            Quyết định giao biên chế và định biên nhân sự của Sở Giáo dục và Đào tạo tỉnh Cao Bằng.
          </div>
        </div>
      </div>

    </div>
  );
}
