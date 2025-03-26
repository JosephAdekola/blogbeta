import {atom} from 'recoil';
import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'recoil-persist',
    storage: sessionStorage
})

export const blogState = atom({
    key: 'blogs',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

// localStorage.setItem('products', JSON.stringify(product))
 