import React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {useTags} from 'hooks/useTags';
import Layout from 'components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';

type Params = {
  id: string
}
const TopBar=styled.header`
display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: white;
  align-items: center;
`
const InputWrapper=styled.div`
background: white;
  padding: 0 16px;
  margin-top: 8px;
`
const Tag: React.FC = () => {
  const {findTag,updateTag,deleteTag} = useTags();
  let {id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent=(tag:{id:number,name:string})=>(
    <div>
    <InputWrapper>
      <Input label='标签名'
             type="text"
             placeholder='标签名'
             value={tag.name}
             onChange={(e)=> {
               updateTag(tag.id, {name: e.target.value})
             }}
      />
    </InputWrapper>
  <Center>
    <Button onClick={()=>deleteTag(tag.id)} >删除标签</Button>
  </Center>
    </div>

  )
  const history=useHistory()
  const clickBack=()=>{
   history.goBack()
  }
  return (
    <Layout>
      <TopBar>
        <Icon name='left' onClick={clickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      {tag?tagContent(tag):<Center>tag不存在</Center>}
    </Layout>
  );
}
export {Tag};