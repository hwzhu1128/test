import React, { useState } from 'react';
import './Members.css';

const members = {
  '常任导师': [
    { id: 1, name: '李廉', email: 'lil@lzu.edu.cn', photo: '/tutorA.jpg', title: '教授', department: '计算机软件与理论', research: '网格计算；高性能计算', homepage: 'https://github.com/tutorA', graduation: '' },
    { id: 2, name: '杨裔', email: 'yy@lzu.edu.cn', photo: '/tutorB.jpg', title: '教授、博士生导师', department: '计算机软件与理论', research: '大数据；物联网；机器学习与人工智能', homepage: 'https://github.com/tutorB', graduation: '' },
  ],
  '兼职导师': [
    { id: 3, name: '兼职导师A', email: 'parttimeA@example.com', photo: '/parttimeA.jpg', title: '研究员', department: '计算机科学与技术系', research: '数据挖掘', homepage: 'https://github.com/parttimeA', graduation: '' },
    { id: 4, name: '兼职导师B', email: 'parttimeB@example.com', photo: '/parttimeB.jpg', title: '高级工程师', department: '计算机科学与技术系', research: '计算机视觉', homepage: 'https://github.com/parttimeB', graduation: '' },
  ],
  '在读学生': [
    { id: 5, name: '在读学生A', email: 'studentA@example.com', photo: '/studentA.jpg', degree: '博士研究生在读', research: '自然语言处理', homepage: 'https://github.com/studentA' },
    { id: 6, name: '在读学生B', email: 'studentB@example.com', photo: '/studentB.jpg', degree: '硕士研究生在读', research: '强化学习', homepage: 'https://github.com/studentB' },
  ],
  '已毕业学生': [
    { id: 7, name: '已毕业学生A', email: 'alumniA@example.com', photo: '/alumniA.jpg', degree: '博士', graduation: '某大学讲师', homepage: 'https://github.com/alumniA' },
    { id: 8, name: '已毕业学生B', email: 'alumniB@example.com', photo: '/alumniB.jpg', degree: '硕士', graduation: '某公司研究员', homepage: 'https://github.com/alumniB' },
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
