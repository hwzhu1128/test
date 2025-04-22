import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import './App.css';
// 在 App.js 顶部添加导入
import CultureLab from './pages/introduction/CultureLab';
import AIComputingLab from './pages/introduction/AIComputingLab';
import StandardsCommittee from './pages/introduction/StandardsCommittee';
import AIExplorer from './pages/introduction/AIExplorer';
import AcademicCommittee from './pages/introduction/AcademicCommittee';
import Leadership from './pages/introduction/Leadership';
import Contact from './pages/introduction/Contact';
// 在 App.js 顶部添加导入
import Structure from './pages/organization/Structure';
import Instruments from './pages/organization/Instruments';
import Faculty from './pages/members/Faculty';
import Students from './pages/members/Students';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <div className="Nav-left">
            <img src="/nav-image.png" alt="Nav Image" className="Nav-image" />
            <div>
              <span className="Nav-text">前沿技术研究实验室</span>
              <span className="Nav-text-en">Advanced Technology Research Laboratory</span>
            </div>
          </div>
<div className="Nav-right">
  <ul>
    <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>首页</Link></li>
    <li className="dropdown">
      <Link to="/introduction/culture-lab" style={{ textDecoration: 'none', color: 'white' }}>实验室介绍</Link>
      <div className="dropdown-content">
        <Link to="/introduction/culture-lab">文旅重点实验室</Link>
        <Link to="/introduction/ai-computing-lab">人工智能与算力技术重点实验室</Link>
        <Link to="/introduction/standards-committee">标委会</Link>
        <Link to="/introduction/ai-explorer">AI探索者联盟社团</Link>
        <Link to="/introduction/academic-committee">学术委员会</Link>
        <Link to="/introduction/leadership">现任领导</Link>
        <Link to="/introduction/contact">联系我们</Link>
      </div>
    </li>
    <li className="dropdown">
      <Link to="/organization/structure" style={{ textDecoration: 'none', color: 'white' }}>机构设置</Link>
      <div className="dropdown-content">
        <Link to="/organization/structure">实验室结构</Link>
        <Link to="/organization/instruments">平台仪器</Link>
      </div>
    </li>
    <li className="dropdown">
      <Link to="/members/faculty" style={{ textDecoration: 'none', color: 'white' }}>团队成员</Link>
      <div className="dropdown-content">
        <Link to="/members/faculty">教师队伍</Link>
        <Link to="/members/students">学生队伍</Link>
      </div>
    </li>
    <li><Link to="/publications" style={{ textDecoration: 'none', color: 'white' }}>论文/成果</Link></li>
    <li><Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>项目研究</Link></li>
  </ul>
</div>
        </nav>
      </header>
      
      <main>
<Routes>
  <Route path="/" element={<Home />} />
  {/* 实验室介绍相关路由 */}
  <Route path="/introduction/culture-lab" element={<CultureLab />} />
  <Route path="/introduction/ai-computing-lab" element={<AIComputingLab />} />
  <Route path="/introduction/standards-committee" element={<StandardsCommittee />} />
  <Route path="/introduction/ai-explorer" element={<AIExplorer />} />
  <Route path="/introduction/academic-committee" element={<AcademicCommittee />} />
  <Route path="/introduction/leadership" element={<Leadership />} />
  <Route path="/introduction/contact" element={<Contact />} />
  {/* 机构设置相关路由 */}
  <Route path="/organization/structure" element={<Structure />} />
  <Route path="/organization/instruments" element={<Instruments />} />
  {/* 团队成员相关路由 */}
  <Route path="/members/faculty" element={<Faculty />} />
  <Route path="/members/students" element={<Students />} />
  <Route path="/publications" element={<Publications />} />
  <Route path="/projects" element={<Projects />} />
</Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;