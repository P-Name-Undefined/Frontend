import React, { useState } from 'react';
import { View } from 'react-native';
import faqOption from '../../utils/docs/FAQ/faqOptions';
import { TutorialCard } from '../../components/TutorialCard';
import { SliderModal } from '../../components/SliderModal';
import EmergencyNumbers from '../../components/EmergencyNumbers';
import tw from '../../utils/tailwind';


export const InformationsCenter = () => {
    const [pages, setPages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [emergencyNumbersVisible, setEmergencyNumbersVisible] =
        useState(false);

    const handleShowModal = (id) => {
        const selectedPages = faqOption[id].pages;
        setPages(selectedPages);
        setModalVisible(true);
    };

    return (
        <View style={tw`flex-1 w-screen bg-new_background p-4`}>
            <SliderModal
                visible={modalVisible}
                pages={pages}
                closeModal={() => setModalVisible(false)}
            />
            <EmergencyNumbers
                setVisible={setEmergencyNumbersVisible}
                visible={emergencyNumbersVisible}
            />
            {faqOption.map((faq, i) => (
                <TutorialCard
                    key={faq.title}
                    description={faq.description}
                    title={faq.title}
                    margin={'mb-2'}
                    leftAligment={faq.id % 2}
                    onPress={() => {
                        faq.emergencyModal
                            ? setEmergencyNumbersVisible(true)
                            : handleShowModal(i);
                    }}
                />
            ))}
        </View>
    )
}
