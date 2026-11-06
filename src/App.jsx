import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PositionsTab from './components/PositionsTab';
import TasksTab from './components/TasksTab';
import JobsTab from './components/JobsTab';
import WorkloadsTab from './components/WorkloadsTab';
import DemandsTab from './components/DemandsTab';
import StaffingTab from './components/StaffingTab';
import GuidelinesTab from './components/GuidelinesTab';
import PositionDetailModal from './components/PositionDetailModal';
import { 
  LayoutDashboard, 
  Briefcase, 
  ListTodo, 
  Clock, 
  Calculator, 
  Users, 
  BookOpen, 
  Layers,
  Sparkles,
  School,
  ExternalLink
} from 'lucide-react';
import { vtvlData } from './data/vtvlData';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPosition, setSelectedPosition] = useState(null);

  const tabs = [
    { id: 'dashboard', label: 'Tổng Quan & Thống Kê', icon: LayoutDashboard, badge: null },
    { id: 'positions', label: 'Biểu C1 - Vị Trí Việc Làm', icon: Briefcase, badge: '12' },
    { id: 'tasks', label: 'Biểu A1 - Nhiệm Vụ', icon: ListTodo, badge: '14' },
    { id: 'jobs', label: 'Biểu A2 - Công Việc', icon: Layers, badge: '33' },
    { id: 'workloads', label: 'Biểu B1 - Khối Lượng & Giờ', icon: Clock, badge: '33' },
    { id: 'demands', label: 'Biểu C3 - Xác Định Nhu Cầu', icon: Calculator, badge: 'Mô phỏng' },
    { id: 'staffing', label: 'Biểu D1 & D2 - Nhân Lực 2027', icon: Users, badge: '35 BC' },
    { id: 'guidelines', label: 'Cẩm Nang Tra Cứu HD 07', icon: BookOpen, badge: null },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* Top Main Navigation Header */}
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Secondary Sticky Navigation Tab Bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-[68px] sm:top-[74px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto space-x-1 sm:space-x-2 py-2.5 no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Render Tab Contents */}
        {activeTab === 'dashboard' && (
          <Dashboard 
            onSelectPosition={(pos) => setSelectedPosition(pos)} 
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'positions' && (
          <PositionsTab 
            onSelectPosition={(pos) => setSelectedPosition(pos)}
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'tasks' && (
          <TasksTab 
            searchQuery={searchQuery}
            onSelectPosition={(pos) => setSelectedPosition(pos)}
          />
        )}

        {activeTab === 'jobs' && (
          <JobsTab 
            searchQuery={searchQuery}
            onSelectPosition={(pos) => setSelectedPosition(pos)}
          />
        )}

        {activeTab === 'workloads' && (
          <WorkloadsTab 
            searchQuery={searchQuery}
            onSelectPosition={(pos) => setSelectedPosition(pos)}
          />
        )}

        {activeTab === 'demands' && (
          <DemandsTab 
            onSelectPosition={(pos) => setSelectedPosition(pos)}
          />
        )}

        {activeTab === 'staffing' && (
          <StaffingTab 
            onSelectPosition={(pos) => setSelectedPosition(pos)}
          />
        )}

        {activeTab === 'guidelines' && (
          <GuidelinesTab />
        )}

      </main>

      {/* Detail Modal for any Job Position */}
      {selectedPosition && (
        <PositionDetailModal 
          position={selectedPosition}
          onClose={() => setSelectedPosition(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800 print:hidden mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <School className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                TRƯỜNG TRUNG HỌC PHỔ THÔNG PHỤC HÒA
              </div>
              <div className="text-[11px] text-slate-400">
                Sở Giáo dục và Đào tạo Cao Bằng • Nghị định số 232/NĐ-CP
              </div>
            </div>
          </div>

          <div className="text-center sm:text-right text-[11px] text-slate-500 space-y-0.5">
            <div>Bộ biểu VTVL ngày 30/10/2026 (Kèm Hướng dẫn 07)</div>
            <div>Tờ trình số 22/TTr-THPT & QĐ số 1548/QĐ-SGD&ĐT • Phương án 35 biên chế 2027</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
