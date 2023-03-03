import React from 'react'
//<InputContainer> /*fica por volta de tudo
//...rest joga tudo o que sobrar de propriedade para dentro

import { IconContainer, InputContainer, InputText} from './styles'
const Input = ({leftIcon, name, ...rest}) => {
    return (
        <InputContainer> 
        {leftIcon ? (<IconContainer> {leftIcon}</IconContainer>) : null}
            <InputText {...rest} />
        </InputContainer>
    )
}
export  { Input };