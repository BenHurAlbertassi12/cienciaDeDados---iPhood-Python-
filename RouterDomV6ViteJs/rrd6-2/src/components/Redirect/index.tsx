import {useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export const Redirect = () => {
    const [time, setTime] = useState(3)

    const timeOut = useRef(0)

    const navigate = useNavigate()

    useEffect(() => {
        clearTimeout(timeOut.current)
        timeOut.current = setTimeout(() => {
            setTime(t => t-1)
        },1000)
        if (time <= 0) {
            navigate('/about', {
              state: `Este é o estado: ${Math.random()}`,
            });
        }
        return () => {
            clearTimeout(timeOut.current);
        }
    }, [time, navigate])

    return (
        <div>
            <h1>Você sera redirecionado em {time}</h1>
        </div>
    )
}