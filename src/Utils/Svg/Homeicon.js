import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Homeicon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    fill="none"
    {...props}>
    <Path
      stroke="#3E4554"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m10.953 22.116.047.003.047-.003 5.232-.327a4.5 4.5 0 0 0 4.22-4.494l-.004-5.985a4.5 4.5 0 0 0-1.223-3.08L14.27 2.915a4.5 4.5 0 0 0-6.554 0L2.723 8.222A4.5 4.5 0 0 0 1.5 11.306v5.992a4.5 4.5 0 0 0 4.22 4.491l5.233.327Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      d="m10.953 22.116.047.003.047-.003 5.232-.327a4.5 4.5 0 0 0 4.22-4.494l-.004-5.985a4.5 4.5 0 0 0-1.223-3.08L14.27 2.915a4.5 4.5 0 0 0-6.554 0L2.723 8.222A4.5 4.5 0 0 0 1.5 11.306v5.992a4.5 4.5 0 0 0 4.22 4.491l5.233.327Z"
    />
  </Svg>
);
export default Homeicon;
