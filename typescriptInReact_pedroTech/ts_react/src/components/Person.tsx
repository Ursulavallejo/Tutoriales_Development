// import * as React from 'react'
import {FC, useState, ChangeEvent} from 'react'
import { User } from '../Interfaces'



// Opcion A :how to pass props
// export const Person = (props: Props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.email}</h1>
//             <h1>{props.age}</h1>
//         </div>
//     );

// Opcion B :how to pass props
// export const Person = ({name, email, age}: Props) => {
//     return (
//         <div>
//             <h1>{name}</h1>
//             <h1>{email}</h1>
//             <h1>{age}</h1>
//         </div>
//     );


// Opcion C :how to pass props / implement FC and useState

export const Person: FC<User> = ({name, age, email, hairColor}) => {

    const [country, setCountry] = useState<string | null>('')

    type NameType = 'Pedro' | 'Jack'
    const nameForType: NameType = 'Pedro'

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{age}</h1>
            <input placeholder='Write down your country..'
                // onChange = {(event) => {setCountry(event.target.value)}}  // JS

                // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                //     setCountry(event.target.value)}}

                   onChange={handleChange}

            />


            {country}
            {/*{HairColor.Blonde}*/}
            {hairColor}
        </div>
    );
}