import {useState, useEffect} from 'react'

function getSavedValue(key, initial){
    const savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue

    if(initial instanceof Function) return initial()

    return initial
}

export default function useLocalStorage(key, initial){
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initial)
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

