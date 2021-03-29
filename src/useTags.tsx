import {useState} from 'react';
import {createIds} from './lib/createIds';
const useTags=()=>{
  const [tags, setTags] = useState<{ id: number; name: string }[]>
    ([{id:createIds(),name:'衣'},
      {id:createIds(),name:'食'},
      {id:createIds(),name:'住'},
      {id:createIds(),name:'行'}]);
return {tags,setTags}
}
export {useTags}