import React, { useState } from 'react';
import './App.css';

function App() {

    let [글제목, 글제목변경함수] = useState(['남자코트 추천', '아이폰 13 pro 시에라 블루 샀다!', 'microsoft 모던 마우스 리뷰']);
    let [따봉, 따봉변경함수] = useState(0);

    let [modal, modal변경함수] = useState(false);
    let [누른제목, 누른제목변경함수] = useState(0);
    let [입력값, 입력값변경함수] = useState('');
    
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
    
          {
            글제목.map(function(글, i) {
              return (
                <div className="list" key={i}>
                <h3 onClick={ () => { 누른제목변경함수(i)} }> { 글 } <span onClick={ () => { 따봉변경함수(따봉+1)} }>💛</span> {따봉} </h3>
                <p>2월 18일 발행</p>
                <hr/>
              </div>
              )
            })
          }

          <input onChange={ (e) => { 입력값변경함수(e.target.value) }} />


          <div className="publish">
            <input onChange={ (e) => { 입력값변경함수(e.target.value)} }/>
            <button onClick={ () => {
              var arrayCopy = [...글제목];
              arrayCopy.unshift(입력값);
              글제목변경함수(arrayCopy);
            } }>저장하기</button> 
          </div>

          <button onClick={ () => {modal변경함수(!modal)} }>modal 열고닫기</button>

         

          {/* <button onClick={ ()=>{ 누른제목변경함수(0) } }>버튼1</button>
          <button onClick={ ()=>{ 누른제목변경함수(1) } }>버튼2</button>
          <button onClick={ ()=>{ 누른제목변경함수(2) } }>버튼3</button> */}

        {
          modal === true
          ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal>
          : null
        }

      </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
