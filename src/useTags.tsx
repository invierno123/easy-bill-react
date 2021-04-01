import {useState} from 'react';
import {createIds} from './lib/createIds';

const defaultTags = [
  {id: createIds(), name: '衣'},
  {id: createIds(), name: '食'},
  {id: createIds(), name: '住'},
  {id: createIds(), name: '行'}
];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    //替换 tagsClone 中的第 index 个替换成obj（不能直接修改原数组）
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1);
    setTags(tagsClone);
  };
  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag};
};
export {useTags};