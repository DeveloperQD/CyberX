import { useEffect} from 'react'

export default function useValueLogger(value){
    useEffect(()=>{
        console.log(value)
    }, [value])
}
