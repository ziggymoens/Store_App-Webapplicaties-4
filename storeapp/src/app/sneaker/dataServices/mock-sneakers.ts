import { Brand } from '../models/brand.model';

const JsonSneakers = [
    {
        name: 'Air Force 1 Low',
        brand: new Brand('Nike'),
        price: 119.99,
        color: "red",
        releaseDate: '2020-02-20'
    },
    {
        name: 'Jordan 5',
        brand: new Brand('Nike'),
        price: 149.99,
        color: "blue",
        releaseDate: '2020-01-10'
    },
    {
        name: 'Supreme x Nike Air Force 1 Low',
        brand: new Brand('Supreme'),
        price: 99.99,
        color: "white",
        releaseDate: '2020-03-04'
    },
    {
        name: 'Supreme x Nike Air Force 1 Low',
        brand: new Brand('Supreme'),
        price: 99.99,
        color: "black",
        releaseDate: '2020-03-04'
    }
];

//export const SNEAKERS: Sneaker[] = JsonSneakers.map(Sneaker.fromJSON);