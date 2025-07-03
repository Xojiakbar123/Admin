import React from "react";

export default function Sidebar({ onNavigate }) {
  return (
    <div style={{ width: "250px", background: "#1c2541", color: "white", padding: "20px" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li onClick={() => onNavigate("dashboard")} style={{ cursor: "pointer", margin: "12px 0" }}>
          Dashboard
        </li>
        <li onClick={() => onNavigate("widgets")} style={{ cursor: "pointer", margin: "12px 0" }}>
          Widgets
        </li>
        <li onClick={() => onNavigate("tables")} style={{ cursor: "pointer", margin: "12px 0" }}>
          Tables
        </li>
        <li onClick={() => onNavigate("charts")} style={{ cursor: "pointer", margin: "12px 0" }}>
          Charts
        </li>
      </ul>
    </div>
  );
}
