import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Moreicon = ({color, ...props}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={color}
    {...props}>
    <Path
      fill="#3E4554"
      d="M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
    <Path
      fill="#000"
      fillOpacity={0.2}
      d="M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
  </Svg>
);
export default Moreicon;
