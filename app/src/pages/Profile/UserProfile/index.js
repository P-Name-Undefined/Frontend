import React, { useContext, useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    ImageBackground,
    TouchableOpacity,
    Alert,
} from 'react-native';
import styles from './styles';
import Button from '../../../components/UI/button';
import { UserContext } from '../../../store/contexts/userContext';
import actions from '../../../store/actions';
import UserService from '../../../services/User';
import EntityService from '../../../services/Entity';
import SessionService from '../../../services/Session';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import ConfirmationModal from '../../../components/modals/confirmationModal';
import formatCPF from '../../../utils/formatCpf';
import formatCNPJ from '../../../utils/formatCNPJ';
import formatPhone from '../../../utils/formatPhone';
import parseDate from '../../../utils/parseDate';
import { alertMessage, alertSuccess } from '../../../utils/Alert';
import useService from '../../../services/useService';

export default function Profile({ navigation }) {
    const { user, dispatch } = useContext(UserContext);
    const isEntityUser = user.cnpj;
    const isRegularUser = user.cpf;
    const [isModalVisible, setModalVisible] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);
    const [photo, setPhoto] = useState('');

    const phone = formatPhone(user.phone);
    const idFormated = isEntityUser
        ? formatCNPJ(user.cnpj)
        : formatCPF(user.cpf);
    const idLabel = isEntityUser ? 'CNPJ' : 'CPF';
    const birthday = parseDate(user.birthday);

    async function logout() {
        await useService(SessionService, 'signOut');
    }

    async function changeImgeProfile() {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            // eslint-disable-next-line no-undef
            alertMessage('É preciso permissão para ter acesso as mídias!');
            return;
        }
        if (isEntityUser) {
            Alert.alert(
                null,
                'Como deseja atualizar a foto?',
                [
                    {
                        text: 'Câmera',
                        onPress: openCameraAsync,
                    },
                    {
                        text: 'Galeria',
                        onPress: pickImageFromGallery,
                    },
                ],
                { cancelable: true },
            );
        } else {
            openCameraAsync();
        }
    }

    async function openCameraAsync() {
        const pickerResult = await ImagePicker.launchCameraAsync({
            base64: true,
            allowsEditing: true,
            quality: 0.5,
        });
        if (pickerResult.cancelled === true) {
            return;
        }

        setPhoto(pickerResult.base64);
        setModalVisible(true);
    }

    async function pickImageFromGallery() {
        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 0.5,
            aspect: [1, 1],
            base64: true,
        });

        if (pickerResult.cancelled === true) {
            return;
        }
        setPhoto(pickerResult.base64);
        setModalVisible(true);
    }

    async function sendPhoto() {
        setLoadingModal(true);
        const data = {
            ...user,
            photo: photo,
        };

        const validEditPhoto = isEntityUser
            ? await useService(EntityService, 'editEntity', [data])
            : await useService(UserService, 'editUser', [data]);
        if (!validEditPhoto.error) {
            dispatch({
                type: actions.user.storeUserInfo,
                data: validEditPhoto,
            });
            alertSuccess('Foto atualizada com sucesso!');
        }
        setLoadingModal(false);
        setModalVisible(false);
    }

    function renderUserInfo(label, data) {
        return (
            <View style={styles.viewInput}>
                <Text style={styles.labelInput}>{label}</Text>
                <View style={styles.inputWrapper}>
                    <Text style={styles.textInput}>{data}</Text>
                </View>
            </View>
        );
    }

    function renderEditableUserInfo(label, data, navigateToPage) {
        return (
            <View style={styles.viewInput}>
                <Text style={styles.labelInput}>{label}</Text>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate(`Edit${navigateToPage}Field`, {
                            user,
                        })
                    }>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textInput}>{data}</Text>
                        <Icon size={25} name="edit" color="#000" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <ConfirmationModal
                visible={isModalVisible}
                setVisible={setModalVisible}
                action={sendPhoto}
                message={'Tem certeza que deseja trocar sua foto?'}
                isLoading={loadingModal}
            />
            <View style={styles.imageView}>
                <TouchableOpacity onPress={changeImgeProfile}>
                    <ImageBackground
                        source={{ uri: `data:image/png;base64,${user.photo}` }}
                        style={styles.imageContainer}
                        imageStyle={styles.profileImage}>
                        <Icon size={45} name={'camera-alt'} color="black" />
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.viewContent}>
                {renderEditableUserInfo('Nome Completo', user.name, 'Name')}
                {isRegularUser &&
                    renderUserInfo('Data de Nascimento', birthday)}
                {renderUserInfo('E-mail', user.email)}
                {renderUserInfo(idLabel, idFormated)}
                {renderEditableUserInfo('Telefone', phone, 'Phone')}
                {renderEditableUserInfo('CEP', user.address.cep, 'CEP')}
                <View style={styles.buttonWrapper}>
                    <Button
                        style={styles.buttonExit}
                        large
                        press={() => {
                            logout();
                        }}
                        title="Sair"
                    />
                </View>
            </View>
        </ScrollView>
    );
}
