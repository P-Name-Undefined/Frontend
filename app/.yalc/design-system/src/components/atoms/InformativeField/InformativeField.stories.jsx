import React from "react";
import { View } from "react-native";
import {InformativeField} from './InformativeField';

const meta = {
    title: "atoms/InformativeField",
    component: InformativeField,
    args: {
        type: 'informative',
        title: 'Aguardando contato',
        text: 'Naruto eh incrivel ta ligado mano',
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
