import React from "react";
import logo from "./logo.svg";
import "./assets/css/main.css";
import "./assets/css/icons.css";
import "./assets/css/animate.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="home-page">
        <div className="background-image"></div>
        <div className="right">
          <div className="content"></div>
          <div className="content-border animated fadeInRight"></div>
          <div className="content-border-1 animated fadeInRight"></div>
          <div className="logo"> </div>
          <div className="description">
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
          <div className="sectors">
            <ul>
              <li>
                <a href="#">
                  <div className="sector" style={{animationDelay: "0.5s"}}>
                    <div className="sector-icon">
                      <i className="estishraf-icon icon-business-whiteboard-graph"></i>
                    </div>
                    <span>القطاع الأول</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sector" style={{animationDelay: "0.6s"}}>
                    <div className="sector-icon">
                      <i className="estishraf-icon fa-money"></i>
                    </div>
                    <span>القطاع الثاني</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sector" style={{animationDelay: "0.7s"}}>
                    <div className="sector-icon">
                      <i className="estishraf-icon icon-money-stack"></i>
                    </div>
                    <span>القطاع الثالث</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <footer>
            <ul>
              <li>
                <i className="estishraf-icon icon-business-graph-bar-increase"></i>
                <div className="divider"></div>
                <span>تعزيز الإيرادات الغير نفطية</span>
              </li>
              <li>
                <i className="estishraf-icon icon-computer-share"></i>
                <div className="divider"></div>
                <span>أرقام وتطوير</span>
              </li>
              <li>
                <i className="estishraf-icon icon-business-whiteboard-graph"></i>
                <div className="divider"></div>
                <span>تحليلات ومؤشرات</span>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
