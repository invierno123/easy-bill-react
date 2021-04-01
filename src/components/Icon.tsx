import React from 'react';


let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icons',true,/\.svg$/));} catch (error){
  console.log(error);
}

type x = {
  name?: string
}

const Icon = (props: x) => {
  return (
    <svg className='icon'>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};
export default Icon;