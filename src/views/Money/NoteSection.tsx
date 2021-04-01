import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding:10px 16px;
  font-size: 14px;

 
`;
type Props={
  value:string;
  onChange:(value:string)=>void;
}
const NoteSection: React.FC<Props> = (props) => {
  const note=props.value
  const MouseOut:ChangeEventHandler<HTMLInputElement> =(e)=>{
    props.onChange(e.target.value)
  }
  return (
    <Wrapper>
<Input label='备注' type='text' placeholder='请在此处输入备注' value={note} onChange={MouseOut}>

</Input>
    </Wrapper>
  );
};
export {NoteSection};