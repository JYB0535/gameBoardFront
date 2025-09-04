import type { Post } from "../type";

export const getData = async (): Promise<Post[]> => {

const getPostDummy = [
    {
        id: 1,
        name: 'abc',
        date: 2023,
        postName: 'abc의 글입니다',
        view: 23
    },

    {
        id: 2,
        name: 'bcd',
        date: 2024,
        postName: 'bcd의 글입니다',
        view: 7000
    },

    {
        id: 3,
        name: 'cde',
        date: 2025,
        postName: 'cde의 글입니다',
        view: 100000
    },

]
return Promise.resolve(getPostDummy);
} 
