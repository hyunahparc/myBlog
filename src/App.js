import React, { useState } from 'react';
import './App.css';

function App() {
    let posts = '강남 고기 맛집';

    let [글제목, 글제목변경함수] = useState(['남자코트 추천', '아이폰 13 pro 시에라 블루 샀다!', 'microsoft 모던 마우스 리뷰']);
    let [따봉, 따봉변경함수] = useState(0);
    
    function 제목바꾸기() {
      var newArray = [...글제목];
      newArray[0] = '여자코트 추천';
      글제목변경함수(newArray);
    }

    return (
      <div className="App">
        <div className="black-nav">
          <div>개발 blog</div>
        </div>
        <div className="list">
          <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경함수(따봉+1)} }>💛</span> {따봉} </h3>
          <p>2월 17일 발행</p>
          <button onClick={ 제목바꾸기 }>제목바꿔</button>
          <hr/>
        </div>
        <div className="list">
          <h3>{ 글제목[1] }</h3>
          <p>2월 18일 발행</p>
          <hr/>
        </div>
        <div className="list">
          <h3>{ 글제목[2] }</h3>
          <p>2월 19일 발행</p>
          <hr/>
        </div>

        <Modal />

      </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
