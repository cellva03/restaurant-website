import Product1 from "../../images/beef-burger.jpg"
import Product2 from "../../images/ham-burger.jpg"
import Product3 from "../../images/chiken-burger.jpg"
import dessert1 from "../../images/dessert-1.jpg"
import dessert2 from "../../images/dessert-2.jpg"
import dessert3 from "../../images/dessert-3.jpg"

export const ProductData = [
    {
        img : Product1,
        alt : 'Burger',
        name: 'Beef Burger',
        Desc: "beef,american cheese,burger sauce,french mustard,pickles,onion,lettuce",
        price: 'Rs.399 only',
        button : 'Add to Cart'
    },
    {
        img : Product2,
        alt : 'Burger',
        name: 'HamBurger',
        Desc: "american cheese,burger sauce,french mustard, pickles,onion,lettuce,veggies,meat",
        price: 'Rs.199 only',
        button : 'Add to Cart'
    },
    {
        img : Product3,
        alt : 'Burger',
        name: 'Chicken Burger',
        Desc: "Chicken,american cheese,burger sauce,french mustard,pickles,onion,lettuce",
        price: 'Rs.299 only',
        button : 'Add to Cart'
    },
]

export const DessertData = [
    {
        img : dessert1,
        alt : 'IceCream',
        name: 'Chocolate Heaven',
        Desc: "Chocolate Ice Cream with yellow cake ,Jordon Almonds,Cherries, and BlueBerry pie filling ",
        price: 'Rs.159 only',
        button : 'Add to Cart'
    },
    {
        img : dessert2,
        alt : 'Chocolate Fudge Brownies',
        name: 'Chocolate Brownies',
        Desc: "Fudge Brownie Square topped with Ice Cream and chocolate chips and Nuts",
        price: 'Rs.199 only',
        button : 'Add to Cart'
    },
    {
        img : dessert3,
        alt : 'Donuts',
        name: 'Donuts',
        Desc: "Belgian Chocolate glazed donuts covered icing with sprinkles on top",
        price: 'Rs.99 only',
        button : 'Add to Cart'
    },
]