import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const nav = useNavigate();

  const goHome = () =>{
    alert('주의 : 이 웹은 투어만을 위한 가이드 입니다. 아이리스 학생의 말에 잘 따라주시면 감사하겠습니다.');    //경고 문구를 넣어둘 것. ex)아이리스의 말을 잘 따라 주시면 감사하겠습니다.
    nav('/home');
  }
  
  return(
    <Fragment>
      <div className="background">
        <h1 id="title">충남삼성고 캠퍼스 투어 가이드</h1>
        <p>안녕하십니까? 저는 IT디플로마를 이수하고 있는 2310401강병훈입니다.<br/>제가 이번에 학생탐구활동으로 캠퍼스 투어용 가이드 앱이 있다면 좋겠다는 생각을 통해 이 웹페이지를 만들게 되었습니다.</p>
        <button id='초기버튼' onClick={goHome} >입장하기</button>
      </div>
    </Fragment>
  );
}

export default HomeScreen;