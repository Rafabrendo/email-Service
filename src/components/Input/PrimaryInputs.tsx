import {Input} from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import "./primary-input.css"


interface PrimaryInputProps{
    name:string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string,
    placeholder:string

}

export function PrimaryInput({name, value, onChange, label, placeholder}: PrimaryInputProps){
    return(
        <div className="input-container">  
            <label className="label">{label}</label>
            <Input 
                variant='filled' 
                placeholder={placeholder}
                name={name} 
                value={value} 
                onChange={onChange}
                
            />
        </div>
        
    )
}

// export function PrimaryInputName({name, value, onChange, label}: PrimaryInputProps)
// {
//     return (
//         <div className="input-container">
//             <label className="label">{label}</label>
//             <Input 
//                 variant='filled' 
//                 placeholder='Writer your name' 
//                 name={name} 
//                 value={value} 
//                 onChange={onChange}
                
//             />
//         </div>
//     )
// }

// export function PrimaryInputLastName({name, value, onChange, label}: PrimaryInputProps)
// {
//     return (
//         <div className="input-container">
//             <label className="label">{label}</label>
//             <Input 
//                 variant='filled' 
//                 placeholder='Writer your last name' 
//                 name={name} 
//                 value={value} 
//                 onChange={onChange}
                
//             />
//         </div>
//     )
// }


