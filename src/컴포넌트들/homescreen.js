import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {

  const nav = useNavigate();

  const goGuide = () =>{
    nav('/guide');
  }

  const goYolo = () =>{
    nav('/yolo');
  }

  const goBoard = () =>{
    nav('/board');
  }

  return(
    <Fragment>
      <body>
        <button id="guidebutton" onClick={goGuide}>투어가이드 둘러보기</button>
        <br/>
        <button id="boardbutton" onClick={goBoard}>게시판에 질문하기</button>
        <br/>
        <button id="yolobutton" onClick={goYolo}>Yolo학습모델 체험해보기</button>
      </body>
    </Fragment>
  );
}


export default HomeScreen;