import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <p>电话: 0931-8912778</p>
        <p>地址: 兰州市城关区天水南路222号</p>
        <p>邮编: 730000</p>
        <p>copyright @ 2015 兰州大学信息科学与工程学院 All rights reserved</p>
        <div className="Footer-stats">
          <p>访问统计: 12345</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;