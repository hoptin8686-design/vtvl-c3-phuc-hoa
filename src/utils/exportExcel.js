import * as XLSX from 'xlsx';
import { vtvlData } from '../data/vtvlData';

export function exportFullExcel() {
  const wb = XLSX.utils.book_new();

  // 1. Sheet HUONG_DAN
  const ws_hd = XLSX.utils.json_to_sheet(
    vtvlData.guidelines.map(g => ({
      'STT': g.stt,
      'Tên biểu': g.sheetName,
      'Nội dung chính': g.content,
      'Chỉ dẫn sử dụng': g.note
    }))
  );
  XLSX.utils.book_append_sheet(wb, ws_hd, 'HUONG_DAN');

  // 2. Sheet 1. A1_NhiemVu
  const ws_a1 = XLSX.utils.json_to_sheet(
    vtvlData.tasks.map(t => ({
      'Mã nhiệm vụ': t.code,
      'Tên nhiệm vụ': t.name,
      'Cơ quan thực hiện': t.agency,
      'Căn cứ pháp lý': t.basis,
      'Kỳ thực hiện': t.period,
      'Trạng thái': t.status,
      'Nguồn': t.source
    }))
  );
  XLSX.utils.book_append_sheet(wb, ws_a1, '1. A1_NhiemVu');

  // 3. Sheet 2. A2_CongViec
  const ws_a2 = XLSX.utils.json_to_sheet(
    vtvlData.jobs.map(j => ({
      'Mã công việc': j.jobCode,
      'Mã nhiệm vụ': j.taskCode,
      'Mã VTVL': j.vtvlCode,
      'Tên công việc': j.name,
      'Sản phẩm đầu ra': j.product,
      'Đơn vị tính': j.unit,
      'Tiêu chuẩn chất lượng': j.quality,
      'Căn cứ (nguồn)': j.source
    }))
  );
  XLSX.utils.book_append_sheet(wb, ws_a2, '2. A2_CongViec');

  // 4. Sheet 3. B1_KhoiLuong
  const ws_b1 = XLSX.utils.json_to_sheet(
    vtvlData.workloads.map(w => ({
      'Mã công việc': w.jobCode,
      'Mã VTVL': w.vtvlCode,
      'Số SP/năm': w.productsPerYear,
      'Trung bình phút/SP': w.minutesPerProduct,
      'Giờ bổ sung': w.additionalHours,
      'Giờ SP (tính)': w.computedProductHours,
      'Giờ tổng (tính)': w.totalHours,
      'Nguồn số lượng': w.quantitySource,
      'Kỳ đánh giá': w.period,
      'Cảnh báo dữ liệu': w.warning,
      'Giải trình': w.explanation
    }))
  );
  XLSX.utils.book_append_sheet(wb, ws_b1, '3. B1_KhoiLuong');

  // 5. Sheet 6. C1_VTVL
  const ws_c1 = XLSX.utils.json_to_sheet(
    vtvlData.positions.map(p => ({
      'Mã VTVL': p.code,
      'Tên vị trí việc làm': p.name,
      'Khối / Nhóm': p.group,
      'Loại nhân lực': p.staffType,
      'Quyết định phê duyệt': p.decision,
      'Giờ chuẩn PP2': p.standardHoursPP2,
      'Căn cứ xác định quỹ giờ': p.basisHours,
      'Chế độ làm việc': p.workMode,
      'Trạng thái': p.status,
      'Kiểm tra quỹ giờ PP2': p.checkPP2
    }))
  );
  XLSX.utils.book_append_sheet(wb, ws_c1, '6. C1_VTVL');

  // 6. Sheet 7. C2_NangLuc
  const ws_c2 = XLSX.utils.json_to_sheet(
    vtvlData.positions.map(p => ({
      'Mã VTVL': p.code,
      'Tên VTVL': p.name,
      'Trách nhiệm chính': p.competency?.responsibility || '',
      'Năng lực chung': p.competency?.generalCompetency || '',
      'Năng lực chuyên môn': p.competency?.professionalCompetency || '',
      'Năng lực lãnh đạo': p.competency?.leadershipCompetency || '',
      'Căn cứ bản mô tả': p.competency?.legalBasis || ''
    }))
  );
  XLSX.utils.book_append_sheet(wb, ws_c2, '7. C2_NangLuc');

  // 7. Sheet 8. C3_NhuCau
  const ws_c3 = XLSX.utils.json_to_sheet(
    vtvlData.positions.map(p => ({
      'Mã VTVL': p.code,
      'Tên VTVL': p.name,
      'Phương pháp xác định': p.demand?.method || '',
      'Tổng giờ B1': p.demand?.b1Hours || 0,
      'Giờ ròng': p.demand?.netHours || 0,
      'Quỹ giờ PP2': p.demand?.pp2StandardHours || 1904,
      'Người quy đổi PP2': p.demand?.pp2CalculatedStaff || 0,
      'Người PP1': p.demand?.pp1Staff || 0,
      'Người cần bố trí': p.demand?.neededStaff || 0,
      'Căn cứ / Giải trình': p.demand?.sourceExplanation || '',
      'Cảnh báo': p.demand?.warning || 'ĐẠT'
    }))
  );
  XLSX.utils.book_append_sheet(wb, ws_c3, '8. C3_NhuCau');

  // 8. Sheet 9. D1_NhanLuc
  const ws_d1 = XLSX.utils.json_to_sheet(
    vtvlData.staffList.map(s => ({
      'Mã nguồn lực': s.staffCode,
      'Mã VTVL': s.vtvlCode,
      'Loại nhân lực': s.staffType,
      'Giờ quy đổi/năm': s.standardHours,
      'Giờ dành cho VTVL': s.allocatedHours,
      'Giờ việc khác': s.otherHours,
      'Nơi tính biên chế': s.payrollUnit,
      'Nguồn': s.source,
      'Trạng thái': s.status,
      'Cảnh báo': s.warning
    }))
  );
  XLSX.utils.book_append_sheet(wb, ws_d1, '9. D1_NhanLuc');

  // 9. Sheet 10. D2_PhuongAn
  const ws_d2 = XLSX.utils.json_to_sheet(
    vtvlData.staffingPlans.map(pl => ({
      'Mã VTVL': pl.vtvlCode,
      'Năm phương án': pl.year,
      'Số người có thể bố trí': pl.canAllocateStaff,
      'Biên chế được giao': pl.assignedStaff,
      'Điều chuyển / bố trí lại': pl.reassignedStaff,
      'Đề nghị điều chỉnh': pl.requestAdjustStaff,
      'Nguồn / Giải trình': pl.sourceExplanation,
      'Trạng thái': pl.status,
      'Người cần bố trí C3 tham khảo': pl.c3BaseStaff
    }))
  );
  XLSX.utils.book_append_sheet(wb, ws_d2, '10. D2_PhuongAn');

  // Generate and download
  const fileName = `Bo_Bieu_VTVL_THPT_Phuc_Hoa_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, fileName);
}
