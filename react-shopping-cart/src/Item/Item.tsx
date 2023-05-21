import Button from '@material-ui/core/Button'
// Types
import { CartItemType } from '../App'
// Styles
import { Wrapper } from './Item.styles'; {/* why not just import from App.styles.ts */}

type Props = { /* what is a prop & what is fc */
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;

}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>{item.price}</h4>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to Cart!</Button> {/* need inline function to prevent it being called when assigned to the button */}
    </Wrapper>
)

export default Item;