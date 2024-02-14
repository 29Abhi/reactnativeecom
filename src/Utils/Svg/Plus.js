import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath} from 'react-native-svg';
const Plus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Rect width={24} height={24} fill="#2A4BA0" rx={12} />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M15.5 11.5h-3v-3a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M6 6h12v12H6z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Plus;
