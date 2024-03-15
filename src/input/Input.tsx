import { RefObject} from "react"

type InputTypeProps = {
    // name: string
    // newTitle: string
    // callBack: (value: string) => void
    inputRef:RefObject<HTMLInputElement>
}

export const Input: React.FC<InputTypeProps> = (props) => {
       
        // const inputRef = useRef(null)
    
    return(
        <input ref={props.inputRef}/>
    )
}




// import { ChangeEvent} from "react"

// type InputTypeProps = {
//     name: string
//     newTitle: string
//     callBack: (value: string) => void
// }

// export const Input: React.FC<InputTypeProps> = (props) => {


//     const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         if(event.currentTarget){
//             props.callBack(event.currentTarget.value)
//         }

//     }
//     return(
//         <input onChange={onChangeHandler} value={props.newTitle}/>
//     )
// }