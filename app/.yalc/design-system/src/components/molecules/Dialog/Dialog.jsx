import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import tw from '../../../utils/tailwind';

export const Dialog = ({
   isVisible,
   onCloseDialog,
   title,
   description,
   cancelText,
   animationType = 'slide',
   confirmText = 'Ok',
   onConfirmPress,
}) => {
    return (
        <Modal
            visible={isVisible}
            onRequestClose={onCloseDialog}
            animationType={animationType}
            transparent
        >
            <View style={tw`flex-1 w-screen h-screen backdrop-blur-sm bg-black/40 items-center justify-center px-6`}>
                <View style={tw`bg-light rounded-xl p-6 min-w-full`}>
                    {title && (
                        <Text style={tw`font-ms-semibold text-black text-left pb-4`}>
                            {title}
                        </Text>
                    )}
                    <Text style={tw`font-ms-regular text-black text-left pb-6`}>
                        {description}
                    </Text>
                    <View style={tw`flex flex-row justify-end`}>
                        {cancelText && (
                            <Pressable onPress={onCloseDialog}>
                                <Text style={tw`text-primary font-ms-semibold mr-10`}>
                                    {cancelText}
                                </Text>
                            </Pressable>
                        )}
                        <Pressable onPress={onConfirmPress}>
                            <Text style={tw`text-primary font-ms-semibold`}>
                                {confirmText}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
