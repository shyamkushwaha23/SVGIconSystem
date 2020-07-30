import React from 'react';
import SvgIcon from './SvgIcon';

const EyeRegular = (props) => {
  let fill = props.fill ? props.fill : 'currentColor';

  return (
    <SvgIcon viewBox="0 0 576 384" className={props.className} style={props.style}>
      <path className="svg-path" d="M288,80c-10.6,0.2-21.1,1.8-31.2,5c4.7,8.2,7.2,17.5,7.2,27c0,30.9-25.1,56-56,56c-9.5-0.1-18.8-2.6-27-7.2
	C163.9,220,198.1,282,257.4,299c59.3,17.1,121.2-17.1,138.3-76.4s-17.1-121.2-76.4-138.3C309.1,81.4,298.6,80,288,80z M572.5,177.4
	C518.3,71.6,410.9,0,288,0S57.7,71.6,3.5,177.4c-4.6,9.2-4.6,20,0,29.2C57.7,312.4,165.1,384,288,384s230.3-71.6,284.5-177.4
	C577.2,197.4,577.2,186.6,572.5,177.4z M288,336c-98.6,0-189.1-55-237.9-144C98.9,103,189.3,48,288,48s189.1,55,237.9,144
	C477.1,281,386.7,336,288,336z"/>
    </SvgIcon>
  );
}

export default EyeRegular;