import axios from 'axios';
class Viacep {
    async getCepInformation(currentCep) {
        const url = `https://viacep.com.br/ws/${currentCep}/json/`;
        const cepInformation = await axios.get(url);
        if (cepInformation.data.erro) throw new Error('cep inválido');
        return cepInformation.data;
    }
}

export default new Viacep();
