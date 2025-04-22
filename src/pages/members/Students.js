import React, { useState } from 'react';
import './Members.css';

const members = {
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
