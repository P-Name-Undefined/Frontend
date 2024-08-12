import React from "react";
import { View } from "react-native";
import { TimeLineItem } from './TimeLineItem';

const meta = {
    title: "molecules/TimeLineItem",
    component: TimeLineItem,
    args: {
        data: {
            title: 'Narutin',
            description: 'Salve salve'
        }
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
