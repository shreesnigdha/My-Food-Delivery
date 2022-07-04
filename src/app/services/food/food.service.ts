import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      { name: 'FastFood', count: 6 },
      { name: 'Food', count: 2 },
      { name: 'Lunch', count: 6 },
      { name: 'Pizza', count: 1 },
      { name: 'Breakfast', count: 2 },
      { name: 'Dinner', count: 2 },
      { name: 'Pasta', count: 3 },
      { name: 'Kebab', count: 2 },
      { name: 'Veg', count: 3 },
    ]
  }

  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Pizza Italiano',
        cookTime: '10-20',
        price: 4,
        favorite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food10.jpg',
        tags:['FastFood', 'Pizza', 'Lunch','Breakfast'],
      },
      {
        id: 2,
        name: 'Mix Vegetable Kebab',
        cookTime: '15-20',
        price: 9,
        favorite: false,
        origins: ['India','France'],
        star: 4.5,
        imageUrl: '/assets/food2.jpg',
        tags:['Food', 'Kebab', 'Breakfast'],
      },
      {
        id: 3,
        name: 'Creamy Mushroom Pasta',
        cookTime: '10-15',
        price: 3,
        favorite: true,
        origins: ['Indonesia'],
        star: 4.5,
        imageUrl: '/assets/food3.jpg',
        tags:['FastFood', 'Pasta', 'Dinner'],
      },
      {
        id: 4,
        name: 'Pasta Italian',
        cookTime: '15-20',
        price: 12,
        favorite: true,
        origins: ['Italy','India'],
        star: 4.5,
        imageUrl: '/assets/food4.jpg',
        tags:['FastFood', 'Pasta', 'Lunch'],
      },
      {
        id: 5,
        name: 'Veg Sandwitch',
        cookTime: '10-12',
        price: 10,
        favorite: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/food5.jpg',
        tags:['FastFood', 'Veg', 'Lunch','Dinner'],
      },
      {
        id: 6,
        name: 'Masala Samosa',
        cookTime: '15-20',
        price: 6,
        favorite: true,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/food6.jpg',
        tags:['FastFood', 'Veg', 'Lunch'],
      },
      {
        id: 7,
        name: 'Paneer Kebab',
        cookTime: '12-15',
        price: 8,
        favorite: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/food7.jpg',
        tags:['Food', 'Kebab', 'Veg','Lunch'],
      },
      {
        id: 8,
        name: 'Red Creamy Pasta',
        cookTime: '15-20',
        price: 14,
        favorite: false,
        origins: ['Italy','India'],
        star: 4.5,
        imageUrl: '/assets/food8.jpg',
        tags:['FastFood', 'Pasta', 'Lunch'],
      },
    ]
  }
}
