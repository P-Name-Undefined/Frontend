import firebase from 'firebase';
import Constants from 'expo-constants';
import authConfig from '../config/authmiaajuda-firebase';
import authConfigDEv from '../config/authmiaajuda-firebase-dev';

class FirebaseService {
    constructor() {
        const env = Constants.manifest.releaseChannel;
        const { apiKey, authDomain, projectId } =
            env == 'prod' ? authConfig : authConfigDEv;
        this.firebase = firebase.initializeApp({
            apiKey,
            authDomain,
            projectId,
        });
    }

    async login(email, password) {
        await this.firebase.auth().signInWithEmailAndPassword(email, password);
    }

    async getUserId() {
        return await this.firebase.auth().currentUser.getIdToken();
    }
}

const firebaseService = new FirebaseService();
Object.freeze(firebaseService);

export default firebaseService;
