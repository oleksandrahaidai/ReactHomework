import type {FC} from "react";
import type {IUser} from "../../models/users/IUser.ts";
import {useNavigate} from "react-router-dom";
import './UserComponent.css'

type UserPropType ={
    item: IUser;
}
const UserComponent:FC<UserPropType> = ({item}) => {
    const navigate = useNavigate()

    return (
        <div className={'user-style'}>
            <>{item.firstName} {item.lastName}</>

            <button className={'user-style2'} onClick = {() =>{
                navigate ((item.id +'/carts'), {state: item})
            }}>user carts</button>
        </div>
    );
};

export default UserComponent;