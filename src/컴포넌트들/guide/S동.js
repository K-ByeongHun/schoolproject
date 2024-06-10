import React from "react";
import { Link } from "react-router-dom";
import './style.css';



function S동(){

  return(
    <>
      <div>
        <nav>
          <a href="#openLab">오픈랩</a><br/>
          <a href="#chemistry">화학실험실</a><br/>
          <a href="#tech">첨단기기실</a><br/>
          <a href="#bio">생명과학실험실</a><br/>                {/*옆으로 빠질 예정*/}
        </nav>
      </div>

      <div id="openLab">
        <h2>오픈랩</h2>
        <p>오픈랩에 대한 사진과 글</p>
      </div>

      <div id="chemistry">
        <h2>화학실험실</h2>
        <p>화학실험실에 대한 사진과 글</p>
      </div>

      <div id="tech">
        <h2>첨단기기실</h2>
        <p>첨단기기실에 대한 사진과 글</p>
      </div>

      <div id="bio">
        <h2>생명과학실험실</h2>
        <p>생명과학실험실에 대한 사진과 글</p>
      </div>
      <Link to='/guide'>뒤로가기</Link>
    </>
  );
}

export default S동;
