let id = 0;
const createIds = () => {
  id += 1;
  return id;
};
export {createIds};