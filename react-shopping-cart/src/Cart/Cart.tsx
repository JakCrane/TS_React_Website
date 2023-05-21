import CartItem from '../CartItem/CartItem'
// Styles
import { Wrapper } from './Cart.styles'
// Types
import { CardItemType } from '../App'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;

}