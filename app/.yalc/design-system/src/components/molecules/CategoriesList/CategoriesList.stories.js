import React from "react";
import { View } from "react-native";
import { CategoriesList } from './CategoriesList';

const meta = {
    title: "molecules/CategoriesList",
    component: CategoriesList,
    args: {
        categories: [{
            name: "narutin",
            _id: "0"
        }, {
            name: "sasuke",
            _id: "0"
        }]
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
