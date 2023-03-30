import React from 'react';
import { View } from 'react-native';
import Svg, { Path, SvgProps } from "react-native-svg";

export const IconCartaoActive: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <View>
      <Svg
        width={28}
        height={28}
        fill="none"
        {...props}
      >
        <Path
          d="M25.667 8.808c0 .77-.63 1.4-1.4 1.4H3.733c-.77 0-1.4-.63-1.4-1.4v-.011a4.825 4.825 0 0 1 4.83-4.83h13.662a4.845 4.845 0 0 1 4.842 4.841ZM2.333 13.358v5.845a4.825 4.825 0 0 0 4.83 4.83h13.662a4.845 4.845 0 0 0 4.842-4.841v-5.834c0-.77-.63-1.4-1.4-1.4H3.733c-.77 0-1.4.63-1.4 1.4Zm7 6.767H7a.881.881 0 0 1-.875-.875c0-.478.397-.875.875-.875h2.333c.479 0 .875.397.875.875a.881.881 0 0 1-.875.875Zm7.584 0H12.25a.881.881 0 0 1-.875-.875c0-.478.397-.875.875-.875h4.667c.478 0 .875.397.875.875a.881.881 0 0 1-.875.875Z"
          fill="#26ACF8"
        />
      </Svg>
    </View>
  )
}