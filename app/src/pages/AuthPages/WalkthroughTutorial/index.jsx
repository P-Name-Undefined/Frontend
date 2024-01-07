import React from 'react';
import { Text, View } from 'react-native';
import { DefaultButton } from '../../../components/atoms/DefaultButton';
import { WalkthroughStepsContext } from '../../../store/contexts/walkthroughStepsContext';

export default function WalkthroughTutorial({ navigation }) {

  const { setWalkthroughStep } = useContext(WalkthroughStepsContext);

  const handleContinue = (shouldRenderTutorial) => {
    if (shouldRenderTutorial) setWalkthroughStep(1)

    navigation.navigate('login')
  }

  return (
    <View className='px-4 py-4 flex h-full justify-center'>
      <Text className='font-ms-semibold text-2xl text-center mt-auto mb-[55%]'>Deseja fazer um tutorial inicial?</Text>
      <View className='pb-8'>
        <DefaultButton title='Sim' onPress={handleContinue(true)}/>
        <DefaultButton title='Pular tutorial' variant='transparent' onPress={handleContinue(false)}/>
      </View>
    </View>
  );
}