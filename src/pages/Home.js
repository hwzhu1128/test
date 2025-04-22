import React from 'react';
import NewsRotator from '../components/NewsRotator';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="news-rotator-section">
        <NewsRotator />
      </section>
      
      <section className="content-section">
        <div className="left-content">
        <div className="notice-board">
  <div className="section-header">
    <h2>通知公告</h2>
    <button className="more-btn">更多</button>
  </div>
  <ul className="notice-list">
    <li>
      <span className="notice-date">2023-10</span>
      <span className="notice-title">关于举办全国旅游标准化技术委员会业务工作培训班的通知</span>
    </li>
    <li>
      <span className="notice-date">2023-05</span>
      <span className="notice-title">甘肃省实施标准化发展战略领导小组办公室关于报送“十四五”以来标准化工作总结和下一步工作计划的通知</span>
    </li>
    <li>
      <span className="notice-date">2023-04</span>
      <span className="notice-title">全国旅游标准化技术委员会关于征集2023年旅游业国家标准、行业标准制修订计划项目的公告</span>
    </li>
    <li>
      <span className="notice-date">2022-09</span>
      <span className="notice-title">关于同意引进王建州的通知</span>
    </li>
    <li>
      <span className="notice-date">2022-04</span>
      <span className="notice-title">关于协助做好数字藏品专区建立工作的通知</span>
    </li>
    <li>
      <span className="notice-date">2022-03</span>
      <span className="notice-title">关于召开甘肃省文化和旅游标准化技术委员会成立大会暨标委会第一次会议的通知</span>
    </li>
    <li>
      <span className="notice-date">2021-08</span>
      <span className="notice-title">甘肃省市场监督管理局关于批准筹建甘肃省文化旅游标准化技术委员会的通知</span>
    </li>
  </ul>
</div>
          
<div className="academic-activities">
  <div className="section-header">
    <h2>学术活动</h2>
    <button className="more-btn">更多</button>
  </div>
  <ul className="activity-list">
    <li>
      <span className="activity-date">2024-10</span>
      <span className="activity-title">人工智能与算力技术重点实验室交流座谈</span>
    </li>
    <li>
      <span className="activity-date">2023-10</span>
      <span className="activity-title">甘肃东数西算与人工智能产业发展研讨会暨燧弘探索算力运营合作研讨会</span>
    </li>
    <li>
      <span className="activity-date">2023-10</span>
      <span className="activity-title">飞云大讲堂</span>
    </li>
    <li>
      <span className="activity-date">2023-08</span>
      <span className="activity-title">算力技术大会</span>
    </li>
    <li>
      <span className="activity-date">2023-08</span>
      <span className="activity-title">中国教育科研网格ChinaGrid二十周年研讨会</span>
    </li>
    <li>
      <span className="activity-date">2023-02</span>
      <span className="activity-title">科技创新2030"新一代人工智能"重大项目课题座谈会</span>
    </li>
  </ul>
</div>
        </div>
        
        <div className="right-content">
        <div className="news-section">
  <div className="section-header">
    <h2>新闻动态</h2>
  </div>
  <ul className="news-list">
    <li>
      <span className="news-date">2023-07-12</span>
      <span className="news-title">着力推动文旅产业数字化建设加快发展</span>
    </li>
    <li>
      <span className="news-date">2023-06-27</span>
      <span className="news-title">“缘起丝路”敦煌疏勒河古道徒步活动在香港启动</span>
    </li>
    <li>
      <span className="news-date">2023-05-18</span>
      <span className="news-title">甘肃省文化和旅游厅打造“一平台、一中心、三体系、三朵云” 促进文旅与科技深度融合</span>
    </li>
    <li>
      <span className="news-date">2023-05-13</span>
      <span className="news-title">甘肃省文旅厅与中文在线座谈对接工作</span>
    </li>
    <li>
      <span className="news-date">2023-04-28</span>
      <span className="news-title">【甘快看】为甘肃文旅产业提质增效转型升级提供“数字动能”</span>
    </li>
    <li>
      <span className="news-date">2023-04-28</span>
      <span className="news-title">为甘肃文旅产业高质量发展提供数字动能——省文旅厅与10个网络平台签订合作协议</span>
    </li>
    <li>
      <span className="news-date">2023-03-17</span>
      <span className="news-title">国家信息中心调研甘肃数字文旅建设工作</span>
    </li>
    <li>
      <span className="news-date">2023-03-16</span>
      <span className="news-title">甘肃省文旅厅与支付宝座谈对接工作</span>
    </li>
    <li>
      <span className="news-date">2023-03-01</span>
      <span className="news-title">中国旅游研究院重大项目课题组到甘肃调研</span>
    </li>
    <li>
      <span className="news-date">2023-02-08</span>
      <span className="news-title">甘肃省文旅厅与同程旅行座谈对接工作</span>
    </li>
    <li>
      <span className="news-date">2022-03-01</span>
      <span className="news-title">我院博士生获得国家优秀青年基金资助</span>
    </li>
    <li>
      <span className="news-date">2022-02-28</span>
      <span className="news-title">实验室新增两个省级重点实验室研究方向</span>
    </li>
  </ul>
</div>
        </div>
      </section>
    </div>
  );
}

export default Home;