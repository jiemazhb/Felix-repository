import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
// import "./diagnosisChart.css"; // 可以按需引入样式

const DiagnosisChart = () => {
  return (
    <div>
cccc
    </div>
  );
};

export default DiagnosisChart;



// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";
// // import "./diagnosisChart.css"; // 可以按需引入样式

// const DiagnosisChart = ({ patient }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (!chartRef.current || !patient || !patient.diagnosis_history) return;

//     const ctx = chartRef.current.getContext("2d");

//     // ✅ 按时间排序
//     const sortedHistory = [...patient.diagnosis_history].sort((a, b) => {
//       const aDate = new Date(`${a.month} 1, ${a.year}`);
//       const bDate = new Date(`${b.month} 1, ${b.year}`);
//       return aDate - bDate;
//     });

//     // ✅ 获取最近 6 条
//     const recentHistory = sortedHistory.slice(-6);

//     // ✅ 图表实例
//     const chartInstance = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: recentHistory.map(
//           (d) => `${d.month.slice(0, 3)}, ${d.year}`
//         ),
//         datasets: [
//           {
//             label: "Systolic",
//             data: recentHistory.map(
//               (d) => d.blood_pressure?.systolic?.value ?? null
//             ),
//             borderColor: "#D26AFF",
//             backgroundColor: "#D26AFF",
//             tension: 0.4,
//             pointRadius: 5,
//             pointBorderColor: "#fff",
//             pointBorderWidth: 2,
//             fill: false,
//           },
//           {
//             label: "Diastolic",
//             data: recentHistory.map(
//               (d) => d.blood_pressure?.diastolic?.value ?? null
//             ),
//             borderColor: "#7A6BFF",
//             backgroundColor: "#7A6BFF",
//             tension: 0.4,
//             pointRadius: 5,
//             pointBorderColor: "#fff",
//             pointBorderWidth: 2,
//             fill: false,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: { display: false },
//         },
//         scales: {
//           y: {
//             min: 60,
//             max: 180,
//             ticks: {
//               stepSize: 20,
//               color: "#707070",
//               font: { family: "Manrope", size: 12 },
//             },
//             grid: {
//               drawBorder: false,
//               color: "rgba(0, 0, 0, 0.05)",
//             },
//           },
//           x: {
//             ticks: {
//               color: "#707070",
//               font: { family: "Manrope", size: 12 },
//             },
//             grid: {
//               display: false,
//             },
//           },
//         },
//       },
//     });

//     // ✅ 销毁旧图表防止重复绘制
//     return () => chartInstance.destroy();
//   }, [patient]);

//   // ✅ 获取最新一条（右侧显示使用）
//   if (!patient || !patient.diagnosis_history) {
//     return <div className="diagnosis-chart">Loading...</div>;
//   }

//   const sortedHistory = [...patient.diagnosis_history].sort((a, b) => {
//     const aDate = new Date(`${a.month} 1, ${a.year}`);
//     const bDate = new Date(`${b.month} 1, ${b.year}`);
//     return aDate - bDate;
//   });

//   const recentHistory = sortedHistory.slice(-6);
//   const latest = recentHistory.at(-1);

//   return (
//     <div className="diagnosis-chart">
//       <h3 className="section-title">Diagnosis History</h3>
//       <div className="card">
//         <div className="chart-section">
//           {/* 左侧图表 */}
//           <div className="chart-left">
//             <div className="chart-header">
//               <span>Blood Pressure</span>
//               <span className="subtitle">Last 6 months ▼</span>
//             </div>
//             <canvas ref={chartRef} height="200" />
//           </div>

//           {/* 右侧数值摘要 */}
//           <div className="chart-right">
//             <div className="metric">
//               <span className="dot" style={{ backgroundColor: "#D26AFF" }} />
//               <span className="label">Systolic</span>
//               <div className="value">
//                 {latest?.blood_pressure?.systolic?.value ?? "--"}
//               </div>
//               <div className="trend">▲ Higher than Average</div>
//             </div>

//             <hr style={{ margin: "12px 0", borderColor: "#eee" }} />

//             <div className="metric">
//               <span className="dot" style={{ backgroundColor: "#7A6BFF" }} />
//               <span className="label">Diastolic</span>
//               <div className="value">
//                 {latest?.blood_pressure?.diastolic?.value ?? "--"}
//               </div>
//               <div className="trend">▼ Lower than Average</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiagnosisChart;
