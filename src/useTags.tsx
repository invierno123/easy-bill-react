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
  return {tags, setTags, findTag};
};
export {useTags};