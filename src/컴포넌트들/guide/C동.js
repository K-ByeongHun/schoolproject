import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import image from "./배경화면.jpg"

ReactModal.setAppElement("#root");

function DecoModal({ isOpen, onClose, title, content, imageSrc}) {
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
  return (
    <>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={style}>
        <h1>{title}</h1>
        {imageSrc && <img src={imageSrc} alt={title} 
        style={{ maxWidth: '100%', maxHeight: '400px',
        marginBottom: '10px' }} />}
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </ReactModal>
    </>
  );
}

function C동() {
  const [isGalaxyHallOpen, setGalaxyHallOpen] = useState(false);
  const [isStudyRoomOpen, setStudyRoomOpen] = useState(false);

  const openGalaxyHall = () => {
    setGalaxyHallOpen(true);
  };
  const closeGalaxyHall = () => {
    setGalaxyHallOpen(false);
  };
  const openStudyRoom = () => {
    setStudyRoomOpen(true);
  };
  const closeStudyRoom = () => {
    setStudyRoomOpen(false);
  };

  return (
    <>
      <div><h1>C동에 오신것을 환영합니다. C동에는 갤럭시홀, 면학실, 스터딜룸 등이 있습니다.</h1></div>
      <div>
        <button onClick={openGalaxyHall}>갤럭시홀</button>
      </div>
      <div>
        <button onClick={openStudyRoom}>면학실</button>
      </div>
      <Link to='/guide'>
        <div>뒤로가기</div>
      </Link>
      
      <DecoModal
        isOpen={isGalaxyHallOpen}
        onClose={closeGalaxyHall}
        title="갤럭시홀"
        content="갤럭시홀은 학생들이 모두 모여서 강연을 듣거나 교육을 받는 곳입니다."
        imageSrc={image}
      />
      <DecoModal
        isOpen={isStudyRoomOpen}
        onClose={closeStudyRoom}
        title="면학실"
        content="면학실은 학생들이 조용히 공부할 수 있는 공간입니다."
        imageSrc={image}
      />
    </>
  );
}

export default C동;
