import React from 'react';
import './CultureLab.css'; // 使用与 CultureLab 相同的 CSS 文件

function Leadership() {
  return (
    <div className="culture-lab-container">
      <div className="culture-lab-content">
        <h1>现任领导</h1>

        <table className="committee-table">
          <thead>
            <tr>
              <th>姓名</th>
              <th>现任职务</th>
              <th>职责分工情况</th>
              <th>邮箱</th>
              <th>办公地点</th>
              <th>办公电话</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>张三</td>
              <td>教授</td>
              <td>负责科研项目审批</td>
              <td>zhangsan@lzu.edu.cn</td>
              <td>信息科学与工程学院A座301</td>
              <td>0931-8912001</td>
            </tr>
            <tr>
              <td>李四</td>
              <td>副教授</td>
              <td>负责学术交流活动</td>
              <td>lisi@lzu.edu.cn</td>
              <td>信息科学与工程学院B座202</td>
              <td>0931-8912002</td>
            </tr>
            <tr>
              <td>王五</td>
              <td>高级实验师</td>
              <td>负责实验室管理</td>
              <td>wangwu@lzu.edu.cn</td>
              <td>信息科学与工程学院C座101</td>
              <td>0931-8912003</td>
            </tr>
            <tr>
              <td>赵六</td>
              <td>讲师</td>
              <td>负责学生指导</td>
              <td>zhaoliu@lzu.edu.cn</td>
              <td>信息科学与工程学院D座401</td>
              <td>0931-8912004</td>
            </tr>
            <tr>
              <td>孙七</td>
              <td>助理研究员</td>
              <td>负责数据管理</td>
              <td>sunqi@lzu.edu.cn</td>
              <td>信息科学与工程学院E座501</td>
              <td>0931-8912005</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leadership;