import { useState } from 'react';

export function useTierState() {
    return useState([
        { name: 'S', data: [], className: 'bg-rose-500' },
        { name: 'A', data: [], className: 'bg-orange-300' },
        { name: 'B', data: [], className: 'bg-amber-200' },
        { name: 'C', data: [], className: 'bg-green-400' },
        { name: 'D', data: [], className: 'bg-teal-400' },
        { name: 'F', data: [], className: 'bg-fuchsia-400' },
        {
            name: 'Unranked',
            className: 'bg-slate-100',
            data: [
                {
                    id: '1',
                    imageUrl: 'https://i.ibb.co/c69YWfx/image.png',
                },
                {
                    id: '2',
                    imageUrl: 'https://i.ibb.co/vBPFDdW/image.png',
                },
                {
                    id: '3',
                    imageUrl: 'https://i.ibb.co/sHtB51W/image.png',
                },
                {
                    id: '4',
                    imageUrl: 'https://i.ibb.co/4ZHQrmp/image.png',
                },
                {
                    id: '5',
                    imageUrl: 'https://i.ibb.co/8Dyy0yq/image.png',
                },
                {
                    id: '6',
                    imageUrl: 'https://i.ibb.co/VSdQ0B6/image.png',
                },
                {
                    id: '7',
                    imageUrl: 'https://i.ibb.co/Q89S1MP/image.png', // stuff here
                },
                {
                    id: '8',
                    imageUrl: 'https://i.ibb.co/HtTNLZ1/image.png',
                },
                {
                    id: '9',
                    imageUrl: 'https://i.ibb.co/txXNYJt/image.png',
                },
                {
                    id: '10',
                    imageUrl: 'https://i.ibb.co/fHK3gY1/image.png',
                },
            ],
        },
    ]);
}
