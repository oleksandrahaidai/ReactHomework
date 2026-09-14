import {useEffect, useState} from "react";
import type {IUser} from "../../models/users/IUser.ts";
import {userService} from "../../services/api.service.tsx";
import UserComponent from "../UserComponent/UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAllUsers()
            .then ((allUsers: IUser[]) => {
                setUsers(allUsers);
            })
    }, []);
    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} item ={user}/>)}
        </div>
    );
};

export default UsersComponent;