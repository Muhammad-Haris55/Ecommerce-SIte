// // Action Types
// export const additem = "Cart/Additem"
// export const removeitem = "Cart/Removeitem"
// export const quantityincrease = "Cart/Quantityincrease"
// export const quantitydecrease = "Cart/Quantitydecrease"
// export const carttotal="Cart/Totalprice"

import { createSlice } from "@reduxjs/toolkit";


// // Action Creators
// export function Additem(id, quantity, imgurl, price, title) {
//     return { type: additem, payload: { id: id, quantity: quantity, imgurl: imgurl, price: price*quantity, title: title } }
// }

// export function Removeitem(id) {
//     return { type: removeitem, payload: { id: id } }
// }

// export function Quantityincrease(id) {
//     return { type: quantityincrease, payload: { id: id } }

// }

// export function Quantitydecrease(id) {
//     return { type: quantitydecrease, payload: { id: id } }
// }


// export function CartSlice(state = [], action) {
//     // Actions
//     switch (action.type) {
//         case additem:
//             const existingitem = state.find((item) => (
//                 item.id === action.payload.id
//             ))

//             if (existingitem) {
//                 return state.map((cartitem) => {
//                     if (cartitem.id === action.payload.id) {
//                         return { ...cartitem, quantity: cartitem.quantity + 1 }
//                     }
//                     return cartitem
//                 })
//             }

//             return [...state, action.payload]

//         case removeitem:
//             return state.filter((element) => (element.id !== action.payload.id))

//         case quantityincrease:
//             return state.map((element) => {
//                 if (element.id == action.payload.id) {
//                     return ({ ...element, quantity: element.quantity + 1,price:element.price+element.price })
//                 }
//                 return element
//             })

//         case quantitydecrease:
//             return state.map((element) => {
//                 if (element.id == action.payload.id) {
//                     let half=element.price/element.quantity
//                     return ({ ...element, quantity: element.quantity - 1,price:element.price-half })
//                 }
//                 return element
//             })
//     }
//     return state
// }

// console.log(state)

const existingitem = (state, action) => state.items.findIndex((item) => {
    return item.id === action.payload.id
})

const slice = createSlice({
    name: 'Cart',
    // State
    initialState: {
        items: [],
        price: 0
    },

    // secondstate:{
    //     price:0
    // },

    // Reducer
    reducers: {
        // Action
        Additem(state, action) {
            const index = existingitem(state, action)

            if (index !== -1) {
                state.items[index].quantity += 1

                state.price += Number.parseInt(action.payload.price)
            }
            else {
                state.items.push(action.payload)
                state.price += Number.parseInt(action.payload.price)
            }
        },
        // Will only get id
        Removeitem(state, action) {
            const index = existingitem(state, action)
            if (index !== -1) {
                state.items.splice(index, 1);
                state.price-=Number.parseInt(action.payload.remprice)
            }
            // // // console.log(index)
            // const newarr = [...state.items]
            // // // console.log(newarr)
            // newarr.splice(index, 1)
            // return state.items.splice(index,1)
            // state.items.splice(action)
            // console.log(action.payload.id)
            // return state.items.filter((item) => (item.id !== action.payload.id))
        },
        // Will only get id
        Quantityincrease(state, action) {
            // console.log(action)
            const index = existingitem(state, action)
            state.items[index].quantity += 1
            state.price += Number.parseInt(action.payload.price)
        },
        // Will only get id
        Quantitydecrease(state, action) {
            const index = existingitem(state, action)
            state.items[index].quantity -= 1
            state.price -= Number.parseInt(action.payload.price)
        }
    }
})
// Action export
export const { Additem, Quantitydecrease, Quantityincrease, Removeitem } = slice.actions

// Reducer export
export default slice.reducer