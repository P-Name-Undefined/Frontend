import React from "react";
import { View } from "react-native";
import { ProfilePhoto } from './ProfilePhoto';

const meta = {
    title: "molecules/ProfilePhoto",
    component: ProfilePhoto,
    args: {
        base64: '',
        size: 'lg',
        additionalStyle: ''
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
