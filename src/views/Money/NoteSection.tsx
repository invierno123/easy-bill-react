import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
const NoteSection: React.FC = () => {
  const [note, setNote] = useState('');
  const refInput=useRef<HTMLInputElement>(null)
  const MouseOut=()=>{
    if (refInput.current!==null){
      setNote(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text"
               placeholder='请输入备注'
               ref={refInput}
               defaultValue={note}
               onBlur={MouseOut}/>
        {/*如果使用受控组件onChange，可能会出现bug,React onChange和HTML onChange是不同的，
        React onChange会在你输入一个字后就触发，HTML onChange会在鼠标移开后触发*/}

      </label>
    </Wrapper>
  );
};
export {NoteSection};