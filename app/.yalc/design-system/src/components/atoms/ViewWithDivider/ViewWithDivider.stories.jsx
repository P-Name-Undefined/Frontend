import React from "react";
import { View, Text } from "react-native";
import { ViewWithDivider } from './ViewWithDivider';

const meta = {
    title: "atoms/ViewWithDivider",
    component: ViewWithDivider,
    args: {
        children: <View><Text>Hello World</Text></View>
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
