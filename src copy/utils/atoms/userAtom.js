import {atom} from 'recoil';
import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'recoil-persist',
    storage: sessionStorage
})

export const userState = atom({
    key: 'user',
    default: {},
    effects_UNSTABLE: [persistAtom]
})

// localStorage.setItem('products', JSON.stringify(product))