import mac1 from '../assets/mac1.webp'
import mac2 from '../assets/mac2.webp'
import mac3 from '../assets/mac3.webp'
import mac4 from '../assets/mac4.webp'
import mac5 from '../assets/mac5.webp'
import mac6 from '../assets/mac6.webp'
import mac7 from '../assets/mac7.webp'

import iphone1 from '../assets/iphone1.webp'
import iphone2 from '../assets/iphone2.webp'
import iphone3 from '../assets/iphone3.webp'
import iphone4 from '../assets/iphone4.webp'
import iphone5 from '../assets/iphone5.webp'

import watch1 from '../assets/watch1.webp'
import watch2 from '../assets/watch2.webp'
import watch3 from '../assets/watch3.webp'
import watch4 from '../assets/watch4.webp'
import watch5 from '../assets/watch5.webp'

import ipad1 from '../assets/ipad1.webp'
import ipad2 from '../assets/ipad2.webp'
import ipad3 from '../assets/ipad3.webp'
import ipad4 from '../assets/ipad4.webp'



const products = [
    {
        mac: {
            variations: [
                {
                    id: 1,
                    image: mac1,
                    name: 'Macbook Air with M1 Chip',
                    price: 999,
                },
                {
                    id: 2,
                    image: mac2,
                    name: 'Macbook Air with M2 Chip',
                    price: 1199,
                },
                {
                    id: 3,
                    image: mac3,
                    name: 'Macbook Pro 13"',
                    price: 1299,
                },
                {
                    id: 4,
                    image: mac4,
                    name: 'iMac 24"',
                    price: 999,
                },
                {
                    id: 5,
                    image: mac5,
                    name: 'Mac mini',
                    price: 999,
                },
                {
                    id: 6,
                    image: mac6,
                    name: 'Mac Studio',
                    price: 999,
                },
                {
                    id: 7,
                    image: mac7,
                    name: 'Stuio Display',
                    price: 1599,
                },
            ]
        },
        iphone:{
            variations: [
                {
                    id: 8,
                    image: iphone1,
                    name: 'iPhone 13 Pro',
                    price: 999,
                },
                {
                    id: 9,
                    image: iphone2,
                    name: 'iPhone 13',
                    price: 699,
                },
                {
                    id: 10,
                    image: iphone3,
                    name: 'iPhone SE',
                    price: 429,
                },
                {
                    id: 11,
                    image: iphone4,
                    name: 'iPhone 12',
                    price: 599,
                },
                {
                    id: 12,
                    image: iphone5,
                    name: 'iPhone 11',
                    price: 499,
                },
            ]
        },
        watch: {
            variations: [
                {
                    id: 13,
                    image: watch1,
                    name: 'Apple Watch Series 7',
                    price: 399,
                },
                {
                    id: 14,
                    image: watch2,
                    name: 'Apple Watch SE',
                    price: 279,
                },
                {
                    id: 15,
                    image: watch3,
                    name: 'Apple Watch Series 3',
                    price: 199,
                },
                {
                    id: 16,
                    image: watch4,
                    name: 'Apple Watch Nike',
                    price: 399,
                },
                {
                    id: 17,
                    image: watch5,
                    name: 'Apple Watch Hermès',
                    price: 1229,
                },
            ]
        },
        ipad: {
            variations: [
                {
                    id: 18,
                    image: ipad1,
                    name: 'iPad Pro',
                    price: 799,
                },
                {
                    id: 19,
                    image: ipad2,
                    name: 'iPad Air',
                    price: 599,
                },
                {
                    id: 20,
                    image: ipad3,
                    name: 'iPad',
                    price: 329,
                },
                {
                    id: 21,
                    image: ipad4,
                    name: 'iPad mini',
                    price: 499,
                },
            ]
        }
    }
]

export default products