import React from 'react';
import classNames from 'classnames';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icons',true,/\.svg$/));} catch (error){
  console.log(error);
}

type x = {
  name?: string
}& React.SVGAttributes<SVGElement>

const Icon = (props: x) => {
  const {name,children,className,...rest}=props
  return (
    <svg className={classNames('icon',className)} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};
export default Icon;