// Defining a starting state for the app
// You can omit this file entirely and load required data from an API
// Doing so would require new actions and reducers to add values to the state

export const state = {
  items: [{
    id: 1,
    name: 'Shrimp Tempura Roll',
    category: 'specialty',
    price: 7.99,
    image: '/relative/path.jpg'
  },{
    id: 2,
    name: 'Lobster Shrimp Roll',
    category: 'specialty',
    price: 8.99,
    image: '/relative/path.jpg'
  },{
    id: 3,
    name: 'King Crab Roll',
    category: 'specialty',
    price: 7.99,
    image: '/relative/path.jpg'
  },{
    id: 4,
    name: 'Vegetable Tempura Roll',
    category: 'specialty',
    price: 8.99,
    image: '/relative/path.jpg'
  },{
    id: 5,
    name: 'Calamari Roll',
    category: 'specialty',
    price: 8.99,
    image: '/relative/path.jpg'
  },{
    id: 6,
    name: 'Dynamite Roll',
    category: 'specialty',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 7,
    name: 'Saki',
    category: 'sashimi',
    price: 7.99,
    image: '/relative/path.jpg'
  },{
    id: 8,
    name: 'Akami',
    category: 'sashimi',
    price: 7.99,
    image: '/relative/path.jpg'
  },{
    id: 9,
    name: 'Chutoro',
    category: 'sashimi',
    price: 7.99,
    image: '/relative/path.jpg'
  },{
    id: 10,
    name: 'Otoro',
    category: 'sashimi',
    price: 7.99,
    image: '/relative/path.jpg'
  },{
    id: 11,
    name: 'Hotate',
    category: 'sashimi',
    price: 6.99,
    image: '/relative/path.jpg'
  },{
    id: 12,
    name: 'Basashi',
    category: 'sashimi',
    price: 6.99,
    image: '/relative/path.jpg'
  },{
    id: 13,
    name: 'Suzuki',
    category: 'sashimi',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 14,
    name: 'Aji',
    category: 'sashimi',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 15,
    name: 'Saba',
    category: 'sashimi',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 16,
    name: 'Amaebi',
    category: 'sashimi',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 17,
    name: 'Salmon',
    category: 'uramaki',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 18,
    name: 'Maguro',
    category: 'uramaki',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 19,
    name: 'Shiro Maguro',
    category: 'uramaki',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 20,
    name: 'Kani',
    category: 'uramaki',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 21,
    name: 'Unagi',
    category: 'uramaki',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 22,
    name: 'Tamago',
    category: 'uramaki',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 23,
    name: 'Inari',
    category: 'uramaki',
    price: 9.99,
    image: '/relative/path.jpg'
  },{
    id: 24,
    name: 'Toro',
    category: 'uramaki',
    price: 9.99,
    image: '/relative/path.jpg'
  }],
  order: [/*{ item: state.items[0], amount: 2 }*/],
  activeCategory: 'sashimi',
  orderSuccessVisible: false,
  orderPlaced: false
}
