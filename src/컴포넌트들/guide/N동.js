import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import image from "./사진/배경화면.jpg"

ReactModal.setAppElement("#root");

function DecoModal({isOpen, onClose, title, content, imageSrc}){
  const style = {
    content: {
      backgroundColor: '#000000', // Dark background color
      color: '#fff', // Light text color
      border: 'none',
      borderRadius: '8px',
      maxWidth: '700px',
      maxHeight: '800px',
      margin: 'auto',
      padding: '10px',
    }
  };
  return(
    <>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={style}>
        <div><h1>{title}</h1></div>
        {imageSrc && <img src={imageSrc} alt={title} 
        style={{ maxWidth: '100%', maxHeight: '400px',
        marginBottom: '10px' }} />}
        <div><p>{content}</p></div>
        <div><buttom onClick={onClose}>Close</buttom></div>
      </ReactModal>
    </>
  );
}


function N동(){
  const [isLakeviewOpen, setLakeviewOpen] = useState(false);
  const [isDasanOpen, setDasanOpen] = useState(false);
  const [isMusicclassOpen, setMusicclassOpen] = useState(false);
  const [isDesignclassOpen, setDesignClassOpen] = useState(false);
  const [isFablabOpen, setFablabOpen] = useState(false);
  const [isEngineerOpen, setEngineerOpen] = useState(false);

// 레이크뷰
  const openLakeview = () => {
    setLakeviewOpen(true);
  };
  const closeLakeview = () => {
    setLakeviewOpen(false);
  };
//다산관
  const openDasan = () => {
    setDasanOpen(true);
  };
  const closeDasan = () => {
    setDasanOpen(false);
  };
//음악실
  const openMusicclass = () => {
    setMusicclassOpen(true);
  };
  const closeMusicclass = () => {
    setMusicclassOpen(false);
  };
//디자인실
  const openDesignClass = () => {
    setDesignClassOpen(true);
  };
  const closeDesignClass = () => {
    setDesignClassOpen(false);
  };
//FABLAB
  const openFablab = () => {
    setFablabOpen(true);
  };
  const closeFablab = () => {
    setFablabOpen(false);
  };
//목공실
  const openEngineer = () => {
    setEngineerOpen(true);
  };
  const closeEngineer = () => {
    setEngineerOpen(false);
  };

  
  return(
    <>
      <div><button onClick={openLakeview}>Lake View</button></div>
      <div><button onClick={openDasan}>다산관</button></div>
      <div><button onClick={openMusicclass}>음악실</button></div>
      <div><button onClick={openDesignClass}>디자인실</button></div>
      <div><button onClick={openFablab}>Fab Lab</button></div>
      <div><button onClick={openEngineer}>목공실</button></div>
      <Link to='/guide'>
        <div>뒤로가기</div>
      </Link>

      <DecoModal
        isOpen={isLakeviewOpen}
        onClose={closeLakeview}
        title="레이크뷰"
        content="예쁜 호수 전경과 자율배식, 삼시새끼 챙겨먹을 수 있는 샐러드"
        imageSrc={image}
      />
      
      <DecoModal
        isOpen={isDasanOpen}
        onClose={closeDasan}
        title="우리학교의 도서관, 일명 다산관"
        content="다산관에 대한 설명"
        imageSrc={image}
      />

      <DecoModal
        isOpen={isMusicclassOpen}
        onClose={closeMusicclass}
        title="충남삼성고의 음악실"
        content="음악실에 대한 설명"
        imageSrc={image}
      />

      <DecoModal
        isOpen={isDesignclassOpen}
        onClose={closeDesignClass}
        title="충남삼성고의 디자인실"
        content="아이맥이 있다고? 디자인실 설명"
        imageSrc={image}
      />
      
      <DecoModal
        isOpen={isFablabOpen}
        onClose={closeFablab}
        title="FAB LAB"
        content="팹랩에 대한 설명"
        imageSrc={image}
      />

      <DecoModal
        isOpen={isEngineerOpen}
        onClose={closeEngineer}
        title="목공실"
        content="목공실에 대한 설명"
        imageSrc={image}
      />
    </>
  );
}

export default N동;