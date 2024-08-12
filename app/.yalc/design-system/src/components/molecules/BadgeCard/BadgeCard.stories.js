import React from "react";
import { View } from "react-native";
import { BadgeCard } from './BadgeCard';

const meta = {
    title: "molecules/BadgeCard",
    component: BadgeCard,
    args: {
        hidden: true,
        badgeTemplate: {
            name: "",
            iconName: 'help',
            description: '-',
            neededValue: '?',
            rank: "1",
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
