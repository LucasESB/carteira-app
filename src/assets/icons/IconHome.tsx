import React from 'react';
import { View } from 'react-native';
import Svg, { Path, SvgProps } from "react-native-svg";

export const IconHome: React.FC<SvgProps> = ({ ...props }) => {
    return (
        <View>
            <Svg
                width={28}
                height={28}
                fill="none"
                {...props}
            >
                <Path
                    d="M14 21v-3.5M11.748 3.29 3.663 9.765c-.91.723-1.493 2.252-1.295 3.395l1.552 9.287c.28 1.656 1.867 2.998 3.547 2.998h13.066c1.669 0 3.267-1.353 3.547-2.998l1.552-9.287c.186-1.143-.397-2.672-1.295-3.395l-8.085-6.463c-1.249-1.004-3.267-1.004-4.504-.012Z"
                    stroke="#A9ACB5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}