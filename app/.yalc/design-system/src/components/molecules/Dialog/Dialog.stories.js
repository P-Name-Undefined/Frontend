import React from "react";
import { View } from "react-native";
import { Dialog } from './Dialog';

const meta = {
    title: "molecules/Dialog",
    component: Dialog,
    args: {
        isVisible: true,
        onCloseDialog: () => console.log(''),
        title: 'Narutin',
        description: 'Narutin é massa pra carai',
        cancelText: 'CANCELA',
        onConfirmPress: () => console.log(''),
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
