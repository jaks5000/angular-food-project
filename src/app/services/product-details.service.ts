import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor() {}

  // food-menu-list

  productDetails = [
    {
      id: 1,
      foodName: 'Falafel',
      foodDetails: 'Flafel-Dish',
      foodPrice: '50',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/egyptian-falafel.jpg?raw=true',
    },
    {
      id: 2,
      foodName: 'Hamam',
      foodDetails: 'Grilled Hamam',
      foodPrice: '250',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/hamama.jpg?raw=true',
    },
    {
      id: 3,
      foodName: 'Koshary',
      foodDetails: 'Egyptian Mix With Secret Sauce',
      foodPrice: '80',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/koshary.jpg?raw=true',
    },
    {
      id: 4,
      foodName: 'Memmbar',
      foodDetails: 'Membar Filled With Arabic Rice Recipe',
      foodPrice: '300',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/mombar_33.jpg?raw=true',
    },
    {
      id: 5,
      foodName: 'Roasted Dock',
      foodDetails: 'Stuffed With Egyptian Recipe Roasted Duck',
      foodPrice: '270',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/Bat%20mahshy.png?raw=true',
    },
    {
      id: 6,
      foodName: 'Kabab',
      foodDetails: 'Egyptian Grilled Kabab',
      foodPrice: '250',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/Kabab.jpg?raw=true',
    },
    {
      id: 7,
      foodName: 'Koftah',
      foodDetails: 'Egyptian Grilled Koftah',
      foodPrice: '320',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/Kofta.jpg?raw=true',
    },
    {
      id: 8,
      foodName: 'Reyash',
      foodDetails: 'Grilled Egyptian Reyash',
      foodPrice: '220',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/Reyash.png?raw=true',
    },
    {
      id: 9,
      foodName: 'Waraa Enab',
      foodDetails: 'Grape Leaves Stuffed with Egyptian Rice',
      foodPrice: '120',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/Waraa%20Enaab%201.jpg?raw=true',
    },
    {
      id: 10,
      foodName: 'Warrd',
      foodDetails: 'Secret Warrd Filled with Meat Red Sauce Recipe',
      foodPrice: '140',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/Warrd.png?raw=true',
    },
    {
      id: 11,
      foodName: 'Bashamel',
      foodDetails: 'Pasta Filled with Egyption Meat White Sauce Recipe',
      foodPrice: '220',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/bashamel%20mela7ma.jpg?raw=true',
    },
    {
      id: 12,
      foodName: 'Molokheya',
      foodDetails: 'Egyption Corchorus with Allium and Garlic',
      foodPrice: '70',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/mokohkeya.jpg?raw=true',
    },
    {
      id: 13,
      foodName: 'MaaLoba',
      foodDetails: 'Secret Recipe of Rice and Eggplant',
      foodPrice: '90',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/maalooba.jpg?raw=true',
    },
    {
      id: 14,
      foodName: 'Rouz Mokasrat',
      foodDetails: 'Egyption Rice with Nuts Secret Recipe',
      foodPrice: '130',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/roz%20moaksarat.jpg?raw=true',
    },
    {
      id: 15,
      foodName: 'Tartooa',
      foodDetails: 'Egyption Recipe Eggs with Hummus, Tomato, Tomeya and Greengo',
      foodPrice: '60',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/beed.png?raw=true',
    },
    {
      id: 16,
      foodName: 'Egyption Chicken',
      foodDetails: 'Egyption Chicken Recipe Filled with Secret Mixed Rice',
      foodPrice: '230',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/Cheicken.jpg?raw=true',
    },
    {
      id: 17,
      foodName: 'Metabtaba',
      foodDetails: 'Egyption Vintage Recipe',
      foodPrice: '110',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/Metabtaba.jpg?raw=true',
    },
    {
      id: 18,
      foodName: 'Kebda Eskandarany',
      foodDetails: 'Kebda Eskandarany With Garlic Egyption Recipe Alexandria Most Famous Meal',
      foodPrice: '140',
      foodImg:
        'https://github.com/jaks5000/Angular-foodSite/blob/main/Kebda.jpg?raw=true',
    },
  ];
}
