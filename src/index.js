import data from './module/retaurets.js'

const newData = data.reduce((acc, restaurant)=>{

    const {menus, ...restaurantRest} = restaurant
    acc.restaurants.push([restaurantRest.id, {...restaurantRest, menus: menus.map(menu => menu.id)}])
    acc.menus = [
        ...acc.menus,
        ...menus.map(({id, ...menu}) => [id, {...menu, restaurantId: restaurantRest.id}] )
    ]
    return acc
},{
    restaurants: [],
    menus: []

})

const restaurantes = new Map(newData.restaurants)
const menus = new Map(newData.menus)

console.log(menus)

