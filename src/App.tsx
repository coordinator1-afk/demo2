/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BarChart3, 
  Layers, 
  Globe, 
  Zap, 
  Cpu, 
  Layout, 
  Eye, 
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Wind
} from "lucide-react";
import React from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent/30 dot-pattern relative">
      {/* Container Frame (Brutalist style) */}
      <div className="max-w-7xl mx-auto min-h-screen border-x-8 border-brand-surface p-6 md:p-12 lg:p-16 relative z-10 flex flex-col">
        
        {/* Top Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-brand-border pb-8 mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="section-label">Innovation Research // 2026</span>
            <h1 className="text-5xl md:text-7xl font-serif italic font-black leading-none uppercase tracking-tighter">
              Gaussian Splat <span className="text-brand-accent text-3xl md:text-5xl">+</span> <br />
              <span className="text-white">Kiến trúc</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-12 text-right"
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-mono">Hoàn thiện</p>
              <p className="text-5xl font-mono font-light text-white">80<span className="text-brand-accent text-xl">%</span></p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-mono">Ứng dụng</p>
              <p className="text-5xl font-mono font-light text-white">65<span className="text-brand-accent text-xl">%</span></p>
            </div>
          </motion.div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow">
          
          {/* Left Column: Chapter 1 */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="border-l-2 border-brand-accent pl-6"
            >
              <h2 className="section-label">Chương 1 / Tổng Quan</h2>
              <p className="text-sm leading-relaxed opacity-80 font-light">
                Gaussian Splat đã chạy được, đang trong quá trình tinh gọn. 
                Nó mở ra hướng đưa không gian 3D lên web với chiều sâu và ánh sáng vượt trội so với panorama, 
                không tốn hạ tầng UE5 nặng nề.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-surface p-8 rounded-sm shadow-2xl"
            >
              <p className="text-[10px] uppercase font-bold text-brand-accent mb-8 flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span> Phân tích đặc tính
              </p>
              <ul className="space-y-8">
                {[
                  { id: "01", title: "Cảm giác không gian", sub: "Mạnh nhất ở showroom, căn hộ mẫu." },
                  { id: "02", title: "Kiểm soát điều hướng", sub: "Cần giới hạn tuyến để tránh lỗi dữ liệu." },
                  { id: "03", title: "Tối ưu Mobile", sub: "Giảm mật độ splat để tăng tốc độ tải." }
                ].map(item => (
                  <li key={item.id} className="flex gap-6 group">
                    <span className="text-3xl font-serif italic text-white/20 group-hover:text-brand-accent transition-colors duration-300">{item.id}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-white">{item.title}</p>
                      <p className="text-[11px] opacity-50 mt-1">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Center Column: Alert & Pipeline */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <motion.div 
              initial={{ backgroundColor: "rgba(94, 234, 212, 0)" }}
              whileInView={{ backgroundColor: "rgba(94, 234, 212, 1)" }}
              viewport={{ once: true }}
              className="text-brand-bg p-8 rounded-sm relative overflow-hidden"
            >
              <h3 className="text-xs font-black uppercase mb-4 font-mono tracking-tighter">Lưu ý kỹ thuật</h3>
              <p className="text-[13px] font-bold leading-relaxed">
                Hình ảnh không sạch tuyệt đối như 360 panorama. Mép vật thể, kính, kim loại thường bị nhiễu hoặc bệt khi thay đổi góc nhìn mạnh.
              </p>
              <div className="absolute -right-6 -bottom-6 text-9xl opacity-10 font-serif font-black select-none pointer-events-none italic">!</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border border-brand-border p-8 flex-grow flex flex-col justify-between"
            >
              <div>
                <h2 className="section-label">Pipeline: UE5 + Atlux</h2>
                <p className="text-sm opacity-80 leading-relaxed font-light mb-6">
                  Đây là phần xương sống đáng giữ lại. Việc xuất dữ liệu trực tiếp từ UE5 giúp tránh bước capture thủ công, ổn định hóa quy trình training.
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="h-[2px] bg-white/5 w-full mb-1"></div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-[2px] bg-brand-accent mb-4"
                ></motion.div>
                <div className="flex justify-between items-center opacity-40">
                  <p className="text-[8px] uppercase tracking-[0.3em] font-mono">Render Efficiency</p>
                  <p className="text-[8px] font-mono">75% RATIO</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Chapter 2 */}
          <div className="lg:col-span-4 bg-white/[0.03] p-8 border-l border-brand-border overflow-hidden relative">
            <h2 className="section-label mb-8">Chương 2 / Kết luận</h2>
            
            <div className="space-y-10 relative z-10">
              {[
                { label: "Vị trí chiến lược", content: "Là cách trình bày Web-3D cao cấp, không phải engine thay thế Unreal.", italic: true },
                { label: "Giới hạn vật liệu", content: "Kính, cây xanh, chi tiết mảnh cần xử lý đầu vào cực kỹ.", italic: false },
                { label: "Lời khuyên triển khai", content: "Kết hợp Hybrid: Dùng Gaussian cho khu vực cần chiều sâu, dùng Panorama cho góc cần độ nét sạch.", highlight: true }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={item.highlight ? "bg-white/10 p-6 rounded-sm border-l-2 border-brand-accent" : ""}
                >
                  <p className="text-[10px] font-bold uppercase text-white/90 mb-2 font-mono tracking-widest">{item.label}</p>
                  <p className={`text-xs opacity-70 leading-relaxed ${item.italic ? "italic" : ""}`}>
                    {item.content}
                  </p>
                </motion.div>
              ))}

              <div className="pt-10 border-t border-brand-border/50">
                <p className="text-[9px] leading-snug opacity-40 uppercase tracking-[0.2em] font-mono">
                  Chưa nên tách rời UE5 khỏi pipeline do phụ thuộc vào Atlux Plugin và tốc độ training dữ liệu đồng nhất.
                </p>
              </div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-brand-accent">
              <Cpu className="w-80 h-80" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <footer className="mt-16 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {["WebGL Supported", "Raster Optimized", "Atlux Integrated"].map(tag => (
              <div key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[8px] uppercase tracking-widest font-mono text-white/60">
                {tag}
              </div>
            ))}
          </div>
          <div className="text-[10px] font-mono opacity-30 flex items-center gap-3">
             <AlertCircle className="w-3 h-3" />
             CONFIDENTIAL RESEARCH // AR-SPLAT-0012
          </div>
        </footer>
      </div>
    </div>
  );
}

