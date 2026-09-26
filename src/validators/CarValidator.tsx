import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp ('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern.base': 'Brand name doesnt match the pattern'}),
    price: Joi.number().min(0).max(1000000)
        .messages({'string.min':'Min price is 0', 'string.max':'Max price is 1000000'}),
    year: Joi.number().min(1996).max(2026)
        .messages({'number.min':'Min year is 1996', 'number.max':'Max year is 2026'})
})