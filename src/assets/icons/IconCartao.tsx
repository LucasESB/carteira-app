import React from 'react';
import { View } from 'react-native';
import Svg, { Path, SvgProps } from "react-native-svg";

export const IconCartao: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <View>
      <Svg
        width={28}
        height={28}
        fill="none"
        {...props}
      >
        <Path
          d="M2.333 9.922h23.334M7 19.256h2.333M12.25 19.256h4.667"
          stroke="#A9ACB5"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.513 4.09h12.962c4.153 0 5.192 1.026 5.192 5.12v9.58c0 4.094-1.039 5.12-5.18 5.12H7.514c-4.142.012-5.18-1.014-5.18-5.11V9.21c0-4.094 1.038-5.12 5.18-5.12Z"
          stroke="#A9ACB5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  )
}