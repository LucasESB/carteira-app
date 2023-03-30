import React from 'react';
import { View } from 'react-native';
import Svg, { Path, SvgProps } from "react-native-svg";

export const IconHomeActive: React.FC<SvgProps> = ({ ...props }) => {
    return (
        <View>
            <Svg
                width={28}
                height={28}
                fill="none"
                {...props}
            >
                <Path
                    d="M24.302 9.345 16.66 3.232c-1.493-1.19-3.826-1.202-5.308-.012L3.71 9.345c-1.097.875-1.762 2.625-1.528 4.002l1.47 8.796c.338 1.972 2.17 3.524 4.165 3.524h12.366c1.972 0 3.839-1.587 4.177-3.535l1.47-8.797c.21-1.365-.455-3.115-1.528-3.99ZM14.875 21a.881.881 0 0 1-.875.875.881.881 0 0 1-.875-.875v-3.5c0-.478.397-.875.875-.875.479 0 .875.397.875.875V21Z"
                    fill="#26ACF8"
                />
            </Svg>
        </View>
    )
}