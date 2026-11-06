import React, { useState } from 'react';
import { 
  ListTodo, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { vtvlData } from '../data/vtvlData';

export default function TasksTab({ searchQuery, onSelectPosition }) {
  const [expandedTasks, setExpandedTasks] = useState({ 'LK-NV-01': true });

  const toggleTask = (code) => {
    setExpandedTasks(prev => ({
      ...prev,
      [code]: !prev[code]
    }));
  };

  const expandAll = () => {
    const all = {};
    vtvlData.tasks.forEach(t => { all[t.code] = true; });
    setExpandedTasks(all);
  };

  const collapseAll = () => {
    setExpandedTasks({});
  };

  const filteredTasks = vtvlData.tasks.filter(t => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return t.code.toLowerCase().includes(q) ||
      t.name.toLowerCase().includes(q) ||
      t.basis.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold">
              Biểu A1
            </span>
            <span className="text-xs text-slate-500">14 Nhiệm vụ cơ sở</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Danh Mục Nhiệm Vụ Của Nhà Trường
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Cơ sở kế thừa dữ liệu, phân rã công việc và gắn trách nhiệm thực hiện theo Đề án VTVL Nghị định 232
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          >
            Mở rộng tất cả
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          >
            Thu gọn tất cả
          </button>
        </div>
      </div>

      {/* Task List with Collapsible Job Sub-items */}
      <div className="space-y-3.5">
        {filteredTasks.map((task) => {
          const isExpanded = !!expandedTasks[task.code];
          // Find all jobs under this task
          const taskJobs = vtvlData.jobs.filter(j => j.taskCode === task.code);

          return (
            <div 
              key={task.code}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
            >
              {/* Task Header Bar */}
              <div 
                onClick={() => toggleTask(task.code)}
                className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors select-none"
              >
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-purple-50 text-purple-700 font-mono text-xs font-bold flex items-center justify-center shrink-0 border border-purple-200">
                    {task.code.replace('LK-NV-', '')}
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-purple-700">
                        {task.code}
                      </span>
                      <span className="text-[11px] px-2 py-0.2 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                        {task.agency || 'THPT Phục Hòa'}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        • Kỳ: {task.period}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {task.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      <strong>Căn cứ:</strong> {task.basis}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 hidden sm:inline">
                    {taskJobs.length} công việc phân rã
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Collapsible Jobs Container */}
              {isExpanded && (
                <div className="border-t border-slate-200 bg-slate-50/60 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                      Công việc trực thuộc nhiệm vụ {task.code}:
                    </span>
                    <span>Đơn vị tính & sản phẩm</span>
                  </div>

                  {taskJobs.length > 0 ? (
                    <div className="grid grid-cols-1 gap-2.5">
                      {taskJobs.map((job) => {
                        const position = vtvlData.positions.find(p => p.code === job.vtvlCode);
                        const workload = vtvlData.workloads.find(w => w.jobCode === job.jobCode);

                        return (
                          <div 
                            key={job.jobCode}
                            className="p-3.5 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-blue-300 transition-colors"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-semibold text-blue-700">
                                  {job.jobCode}
                                </span>
                                <span className="text-slate-300">•</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (position) onSelectPosition(position);
                                  }}
                                  className="text-xs font-medium text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-1"
                                >
                                  {job.vtvlCode} - {position?.name || 'VTVL'}
                                </button>
                              </div>
                              <div className="text-xs sm:text-sm font-semibold text-slate-800">
                                {job.name}
                              </div>
                              <div className="text-xs text-slate-500">
                                Sản phẩm: <strong>{job.product}</strong> ({job.unit}) • Chất lượng: {job.quality}
                              </div>
                            </div>

                            {workload && (
                              <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 text-xs shrink-0">
                                <span className="text-slate-400">Khối lượng năm:</span>
                                <div className="font-mono font-bold text-indigo-700 text-sm">
                                  {workload.totalHours.toLocaleString()} h
                                </div>
                                <span className="text-[11px] text-slate-500">
                                  {workload.productsPerYear} {job.unit} × {workload.minutesPerProduct}p
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 italic">Không có công việc nào gắn với nhiệm vụ này.</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}

