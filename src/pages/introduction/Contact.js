import React from 'react';
import './CultureLab.css'; // 使用与 CultureLab 相同的 CSS 文件

function Contact() {
  return (
    <div className="culture-lab-container">
      <div className="culture-lab-content">
        <h1>联系我们</h1>

        <table className="contact-table">
          <thead>
            <tr>
              <th>联系人</th>
              <th>手机号码</th>
              <th>电子邮箱</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>张三</td>
              <td>13800138000</td>
              <td>zhangsan@lzu.edu.cn</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>13800138001</td>
              <td>lisi@lzu.edu.cn</td>
            </tr>
            <tr>
              <td>王五</td>
              <td>13800138002</td>
              <td>wangwu@lzu.edu.cn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;