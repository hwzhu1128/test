import React, { useState } from 'react';
import './Members.css';

const members = {
  '常任导师': [
    { id: 1, name: '杨裔', email: 'yy@lzu.edu.cn', photo: '/tutoryy.jpg', title: '教授、博士生导师', department: '计算机软件与理论', research: '大数据；物联网；机器学习与人工智能', homepage: 'https://github.com/tutorB', graduation: '' },
    { id: 2, name: '李彩虹', email: 'licaihong@lzu.edu.cn', photo: '/tutorlch.jpg', title: '教授级高级实验师、硕士生导师', department: '计算机软件与理论', research: '大数据；物联网；机器学习与人工智能', homepage: 'https://github.com/tutorA', graduation: '' },
  ],
  '兼职导师': [
    { id: 3, name: '兼职导师A', email: 'parttimeA@example.com', photo: '/parttimeA.jpg', title: '研究员', department: '计算机科学与技术系', research: '数据挖掘', homepage: 'https://github.com/parttimeA', graduation: '' },
    { id: 4, name: '兼职导师B', email: 'parttimeB@example.com', photo: '/parttimeB.jpg', title: '高级工程师', department: '计算机科学与技术系', research: '计算机视觉', homepage: 'https://github.com/parttimeB', graduation: '' },
  ],
};

function Members() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="Members">
      {Object.entries(members).map(([category, membersList]) => (
        <div key={category} className="Members-category">
          <h2>{category}</h2>
          <div className="Members-grid">
            {membersList.map((member) => (
              <div key={member.id} className="Member-card">
                <img src={member.photo} alt={member.name} className="Member-photo" />
                <div className="Member-info">
                  <h3>{member.name}</h3>
                  {(category === '常任导师' || category === '兼职导师') ? (
                    <>
                      {member.title && <p><strong>职称:</strong> {member.title}</p>}
                      {member.department && <p><strong>所在系所:</strong> {member.department}</p>}
                      <p><strong>邮箱:</strong> {member.email}</p>
                    </>
                  ) : (
                    <>
                      {member.degree && <p><strong>学历:</strong> {member.degree}</p>}
                      {member.research && <p><strong>研究方向:</strong> {member.research}</p>}
                      {member.graduation && <p><strong>毕业去向:</strong> {member.graduation}</p>}
                      <p><strong>邮箱:</strong> {member.email}</p>
                    </>
                  )}
                  <div className="Member-detail-button" onClick={() => handleCardClick(member)}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedMember && (
        <div className="Member-modal">
          <div className="Member-modal-content">
            <span className="Member-modal-close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedMember.photo} alt={selectedMember.name} className="Member-modal-photo" />
            <h2>{selectedMember.name}</h2>
            {selectedMember.title && <p><strong>职称:</strong> {selectedMember.title}</p>}
            {selectedMember.department && <p><strong>所在系所:</strong> {selectedMember.department}</p>}
            {selectedMember.degree && <p><strong>学历:</strong> {selectedMember.degree}</p>}
            {selectedMember.research && <p><strong>研究方向:</strong> {selectedMember.research}</p>}
            {selectedMember.graduation && <p><strong>毕业去向:</strong> {selectedMember.graduation}</p>}
            <p><strong>个人主页:</strong> <a href={selectedMember.homepage} target="_blank" rel="noopener noreferrer">{selectedMember.homepage}</a></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Members;
