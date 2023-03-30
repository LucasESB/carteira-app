import React from 'react';
import { View } from 'react-native';
import Svg, { Path, SvgProps } from "react-native-svg";

export const IconTransacao: React.FC<SvgProps> = ({ ...props }) => {
    return (
        <View>
            <Svg
                width={28}
                height={28}
                fill="none"
                {...props}
            >
                <Path
                    d="m10.512 23.917-5.857-5.845M10.512 4.083v19.834M17.488 4.083l5.857 5.845M17.488 23.917V4.083"
                    stroke="#A9ACB5"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}