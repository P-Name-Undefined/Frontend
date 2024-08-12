import React from "react";
import { View } from "react-native";
import {CircleBadge} from './CircleBadge';

const meta = {
    title: "atoms/CircleBadge",
    component: CircleBadge,
    args: {
        rank: "1",
        badgeIcon: "arrow",
        isHidden: true
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
