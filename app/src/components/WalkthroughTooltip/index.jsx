import React, { useEffect, useState } from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import { DeviceInformationContext } from '../../store/contexts/deviceInformationContext';
import { useContext } from 'react';
import { Pressable, StatusBar, Text, View } from 'react-native';
import { WalkthroughStepsContext } from '../../store/contexts/walkthroughStepsContext';
import colors from '../../../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WalkthroughTooltip({
    children,
    incomingWalkthroughStep,
    placement = "top",
    customCloseAction = null,
    useInteractionManager = false,
    shouldBeVisibleFromChild = true,
    horizontalAdjustment = 0
}) {
    const { walkthroughStep, setWalkthroughStep, setCompleted, completed } = useContext(WalkthroughStepsContext);
    const { operationalSystem } = useContext(DeviceInformationContext);
    const statusBarCurrentHeight =
        operationalSystem == 'android' ? StatusBar.currentHeight : 0;
    const [tooltipVisibility, setTooltipVisibility] = useState(
        incomingWalkthroughStep == walkthroughStep,
    );
    const [currentStep, setCurrentStep] = useState(incomingWalkthroughStep);
    const walkthroughTooltipSteps = require('../../../assets/jsons/walkthroughSteps.json');

    useEffect(() => {
        if (walkthroughStep === incomingWalkthroughStep) {
            setTooltipVisibility(true);
            setCurrentStep(incomingWalkthroughStep);
        }

        if (walkthroughStep > 8 && !completed) {
          setTimeout(() => {
            setWalkthroughStep(0)
            setCompleted(true)
          }, 500)
        }
    }, [walkthroughStep]);

    const handleClose = () => {
        if (customCloseAction){
          customCloseAction()
        }

        setTooltipVisibility(false);
        setWalkthroughStep((prevStep) => prevStep + 1);
    };

    const toolTipContent = () => {
        return (
            <>
                <Text>{walkthroughTooltipSteps[currentStep]}</Text>
                <View className='flex flex-row justify-end items-center space-x-2'>
                  <Text className='font-ms-light text-xs'>{walkthroughStep}/8</Text>
                  <Pressable
                      className="bg-primary px-4 py-1 rounded mt-1"
                      onPress={handleClose}
                      android_ripple={{
                          color: colors.gray.contrast,
                      }}
                  >
                      <Text className="text-white text-xss font-bold">
                          Entendi
                      </Text>
                  </Pressable>
                </View>
            </>
        );
    };

    return (
        <Tooltip
            isVisible={tooltipVisibility && shouldBeVisibleFromChild}
            content={toolTipContent()}
            placement={placement}
            onClose={() => setTooltipVisibility(false)}
            topAdjustment={-statusBarCurrentHeight + 6}
            displayInsets={{ left: 10, right: 10 }}
            contentStyle={{ borderRadius: 6 }}
            closeOnChildInteraction
            useInteractionManager={useInteractionManager}
            backgroundColor='rgba(0,0,0,0.7)'
            horizontalAdjustment={horizontalAdjustment}
        >
            {children}
        </Tooltip>
    );
}
