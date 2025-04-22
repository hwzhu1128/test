import React, { useState } from 'react';
import './Publications.css';

// 示例数据
const publications = {
  '2024': [
    { id: 1, title: 'SCI论文标题2024', authors: ['作者A', '作者B'], conference: 'SCI期刊', pdfLink: 'https://example.com/sci-paper-2024.pdf', bibtex: '@article{...}', isTopConference: true }, // SCI 论文
    { id: 2, title: '普通论文标题2024', authors: ['作者C', '作者D'], conference: '普通期刊', pdfLink: 'https://example.com/normal-paper-2024.pdf', bibtex: '@article{...}', isTopConference: false }, // 普通论文
  ],
  '2023': [
    { id: 3, title: 'CCF论文标题2023', authors: ['作者E', '作者F'], conference: 'CCF会议', pdfLink: 'https://example.com/ccf-paper-2023.pdf', bibtex: '@article{...}', isTopConference: true }, // CCF 论文
    { id: 4, title: '普通论文标题2023', authors: ['作者G', '作者H'], conference: '普通期刊', pdfLink: 'https://example.com/normal-paper-2023.pdf', bibtex: '@article{...}', isTopConference: false }, // 普通论文
  ],
  '2022': [
    { id: 5, title: '普通论文标题2022', authors: ['作者I', '作者J'], conference: '普通期刊', pdfLink: 'https://example.com/normal-paper-2022.pdf', bibtex: '@article{...}', isTopConference: false }, // 普通论文
    { id: 6, title: '普通论文标题2022-2', authors: ['作者K', '作者L'], conference: '普通期刊', pdfLink: 'https://example.com/normal-paper-2022-2.pdf', bibtex: '@article{...}', isTopConference: false }, // 普通论文
  ],
  '2021': [
    { id: 7, title: '普通论文标题2021', authors: ['作者M', '作者N'], conference: '普通期刊', pdfLink: 'https://example.com/normal-paper-2021.pdf', bibtex: '@article{...}', isTopConference: false }, // 普通论文
    { id: 8, title: '普通论文标题2021-2', authors: ['作者O', '作者P'], conference: '普通期刊', pdfLink: 'https://example.com/normal-paper-2021-2.pdf', bibtex: '@article{...}', isTopConference: false }, // 普通论文
  ],
};

function Publications() {
  const [selectedBibtex, setSelectedBibtex] = useState(null);
  const [expandedYears, setExpandedYears] = useState(['2024', '2023']); // 默认展开2024和2023年

  const handleBibtexClick = (bibtex) => {
    setSelectedBibtex(bibtex);
  };

  const handleCloseModal = () => {
    setSelectedBibtex(null);
  };

  const toggleYear = (year) => {
    if (expandedYears.includes(year)) {
      setExpandedYears(expandedYears.filter(y => y !== year));
    } else {
      setExpandedYears([...expandedYears, year]);
    }
  };

  // 按年份倒序排列
  const sortedYears = Object.keys(publications).sort((a, b) => b - a);

  return (
    <div className="Publications">
      {sortedYears.map((year) => (
        <div key={year} className="Publications-year">
          <div className="Publications-year-header">
            <div className="Year-line"></div>
            <h2>{year}</h2>
            <button className="Toggle-button" onClick={() => toggleYear(year)}>
              {expandedYears.includes(year) ? '收起' : '展开'}
            </button>
          </div>
          {expandedYears.includes(year) && (
            <div className="Publications-list">
              {publications[year].map((paper) => (
                <div key={paper.id} className={`Publication-card ${paper.isTopConference ? 'top-conference' : 'normal-conference'}`}>
                  <h3>{paper.title}</h3>
                  <p><strong>作者:</strong> {paper.authors.join(', ')}</p>
                  <p><strong>会议/期刊:</strong> {paper.conference}</p>
                  <p><strong>PDF/arXiv链接:</strong> <a href={paper.pdfLink} target="_blank" rel="noopener noreferrer">查看</a></p>
                  <button className="Bibtex-button" onClick={() => handleBibtexClick(paper.bibtex)}>BibTeX引用</button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {selectedBibtex && (
        <div className="Bibtex-modal">
          <div className="Bibtex-modal-content">
            <span className="Bibtex-modal-close" onClick={handleCloseModal}>&times;</span>
            <pre>{selectedBibtex}</pre>
            <button className="Copy-button" onClick={() => navigator.clipboard.writeText(selectedBibtex)}>复制</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Publications;