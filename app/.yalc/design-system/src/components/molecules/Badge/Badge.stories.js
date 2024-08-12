import React from "react";
import { View } from "react-native";
import { Badge } from './Badge';

const meta = {
    title: "molecules/Badge",
    component: Badge,
    args: {
        title: "Narutin",
        size: "large"
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
