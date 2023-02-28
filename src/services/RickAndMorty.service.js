/* eslint-disable import/no-anonymous-default-export */
import { API_RM } from './../constants/Api.constants';

class RickAndMortyService {

    async getAllCharacters() {
        const response = await fetch(API_RM.CHARACTERS());
        return response.json();
    }

    async getCharaterById(id) {
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        return response.json();
    }

}

export default new RickAndMortyService();
