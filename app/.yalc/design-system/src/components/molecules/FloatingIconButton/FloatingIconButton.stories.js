import React from "react";
import { View } from "react-native";
import { FloatingIconButton } from './FloatingIconButton';

const meta = {
    title: "molecules/FloatingIconButton",
    component: FloatingIconButton,
    args: {
        iconName: 'arrow-back',
        onPress: () => console.log(''),
        iconSize: '2xl',
        color: '#4a4a4a',
    },
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
};

export default meta;

export const Basic= {};
