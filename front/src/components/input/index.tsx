import { iInput } from "./interface"

export const Input = ({ id, label, register, placeholder, type, disabled, error }: iInput) => {
    return (
        <fieldset>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                placeholder={placeholder}
                type={type} 
                disabled={disabled}
                {...register}
            />
            <small>{error}</small>
        </fieldset>
    )
  }
  