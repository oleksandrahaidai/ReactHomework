import './CartComponent.css'

import type {FC} from "react";
import type {ICart} from "../../models/carts/ICart.ts";

type JsonPrimitive = string | number | boolean | null | undefined;
type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

type CartPropType = {
    item: ICart;
};

const RenderValue: FC<{ value: JsonValue}> = ({value}) => {
    if (value === null || value === undefined) {
        return <>null</>;
    }
    if (Array.isArray(value)) {
        return (
            <ul className={'cart-style'}>
                {value.map((subItem, index) => (
                    <li key={index}>
                        <RenderValue value={subItem} />
                    </li>
                ))}
            </ul>
        );
    }
    if (typeof value === 'object') {
        return (
            <div>
                {Object.entries(value).map(([subKey, subValue]) => (
                    <p key={subKey}>
                        {subKey}: <RenderValue value={subValue} />
                    </p>
                ))}
            </div>
        );
    }
    return <>{String(value)}</>;
};

export const CartComponent: FC<CartPropType> = ({item}) => {
    return (
        <div>
            {Object.entries(item).map(([key, value]) => (
                <div key={key}>
                    {key}: <RenderValue value={value} />
                </div>
            ))}
        </div>
    );
};
export default CartComponent;