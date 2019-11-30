import React from 'react';
import './Form.css';

//이 컴포넌트는 총 4가지의 props를 받음.
// value: 인풋의 내용 
// onChange: 인풋 내용이 변경 될 때 실행되는 함수 
// onCreate: 버튼이 클릭 될 때 실행 될 함수 
// onKeyPress: 인풋에서 키를 입력 할 때 실행되는 함수. 이 함수는 나중에 엔터가 눌렸을 때 onCreate한것과 동일작업을 하기위해 사용.
const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};


export default Form; 