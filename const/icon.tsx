import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  width?: string | number;
  height?: string | number;
  color?: string;
};

export const Icon = {
  star: (props: Props) => (
    <Svg {...props} viewBox="0 0 24 24">
      <Path
        fill="currentColor"
        d="m7.325 19.923l1.24-5.313l-4.123-3.572l5.431-.47L12 5.557l2.127 5.01l5.43.47l-4.122 3.572l1.24 5.313L12 17.102z"
      />
    </Svg>
  ),
};
