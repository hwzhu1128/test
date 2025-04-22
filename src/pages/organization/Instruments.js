import React from 'react';
import './Instruments.css';

function Instruments() {
  const scrollToPlatform = () => {
    document.getElementById('platform-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToInstruments = () => {
    document.getElementById('instruments-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="instruments-container">
      <div className="icon-row">
        <div className="icon" onClick={scrollToPlatform}>
          <img src="/platform.jpg" alt="平台" className="icon-image" />
          <p>平台</p>
        </div>
        <div className="icon" onClick={scrollToInstruments}>
          <img src="/device.jpg" alt="仪器" className="icon-image" />
          <p>仪器</p>
        </div>
      </div>

      <div id="platform-section" className="platform-section">
        <h2>平台介绍</h2>
        <p>1. 兰州大学网络空间安全研究院（由兰州大学于2016年发文成立）</p>
        <p>2. 甘肃省泛在电力物联网与电力资源优化配置工程研究中心（甘肃省发展和改革委员会于2020年发文成立）</p>
        <p>3. 旅游信息融合处理与数据权属保护文化和旅游部重点实验室（文化和旅游部于2021年5月发文成立）</p>
        <p>4. 甘肃省文化和旅游标准化技术委员会（甘肃省市场监督管理局于2022年发文成立）</p>
      </div>

      <div id="instruments-section" className="instruments-section">
        <h2>仪器介绍</h2>
        <table className="instruments-table">
          <thead>
            <tr>
              <th>设备名称</th>
              <th>规格型号</th>
              <th>数量</th>
              <th>技术指标</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>设备A</td>
              <td>Model X</td>
              <td>5</td>
              <td>高性能计算，支持多线程</td>
            </tr>
            <tr>
              <td>设备B</td>
              <td>Model Y</td>
              <td>3</td>
              <td>高精度测量，误差小于0.1%</td>
            </tr>
            <tr>
              <td>设备C</td>
              <td>Model Z</td>
              <td>2</td>
              <td>支持物联网协议，低功耗</td>
            </tr>
            <tr>
              <td>设备D</td>
              <td>Model W</td>
              <td>4</td>
              <td>人工智能加速，支持深度学习</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Instruments;