import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/CarValidator.tsx";
import './FormComponent.css'

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<ICar>({mode:'all', resolver: joiResolver(carValidator)})
    const handler = (data:ICar) => {
        addCar(data)
    }

    return (
        <div>
            <form className={'form-style'} onSubmit = {handleSubmit(handler)} >
                <div>
                    <input type="text" {...register ('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" {...register ('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" {...register ('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;