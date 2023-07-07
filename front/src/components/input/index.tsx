import { iInput } from "./interface"
import { StyledFieldset } from "./styled"

export const Input = ({ id, label, register, placeholder, type, disabled, error }: iInput) => {
  return (
    <StyledFieldset>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        type={type} 
        disabled={disabled}
        {...register}
      />
      <small>{error}</small>
    </StyledFieldset>
  )
}
  