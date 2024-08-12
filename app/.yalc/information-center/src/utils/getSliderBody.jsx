import React from 'react';
import Step1 from '../assets/Step1.svg';
import Step2 from '../assets/Step2.svg';
import Step3 from '../assets/Step3.svg';
import colors from '../styles/colors';
import { SliderDescription, SliderTitle } from 'design-system';

export const getSliderBody = (index, title, subtitle) => {
    const stepImages = {
        1: <Step1 />,
        2: <Step2 />,
        3: <Step3 />,
    };
    const image = stepImages[index];
    return {
        backgroundColor: colors.light,
        image,
        title: <SliderTitle title={title} />,
        subtitle: <SliderDescription description={subtitle} />,
    };
};
