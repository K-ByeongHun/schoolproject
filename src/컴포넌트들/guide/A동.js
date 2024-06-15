import React, {useState} from "react";
import { Link} from "react-router-dom";
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




function A동(){
  const [isGlobalOpen, setGlobalOpen] = useState(false);
  const [isLogosOpen, setLogosOpen] = useState(false);

  // 글로벌라운지
  const openGlobal = () => {
    setGlobalOpen(true);
  };
  const closeGlobal = () => {
    setGlobalOpen(false);
  };
//로고스랩
  const openLogos = () => {
    setLogosOpen(true);
  };
  const closeLogos = () => {
    setLogosOpen(false);
  };

  return(
    <>
    <div><button onClick={openGlobal}>Global Lounge</button></div>
    <div><button onClick={openLogos}>Logos Lab</button></div>
      <Link to='/guide'>
        뒤로가기
      </Link>

      <DecoModal
        isOpen={isGlobalOpen}
        onClose={closeGlobal}
        title="Global Lounge"
        content="글로벌 라운지에 대한 설명"
        imageSrc={image}
      />

      <DecoModal
        isOpen={isLogosOpen}
        onClose={closeLogos}
        title="Logos Lab"
        content="로고스랩에 대한 설명"
        imageSrc={image}
      />

    </>
  );
}

export default A동;