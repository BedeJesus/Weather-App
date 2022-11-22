import { Container, City, Temperature, Weather, MinMax, Date } from "./styles"
import { ArrowUp, ArrowDown } from 'phosphor-react'
import { KeyboardEvent, useEffect, useState } from 'react'
import api from "../../utils/api"

export default function Today() {

    const [city, setCity] = useState('São Paulo')
    const [formatedCity, setFormatedCity] = useState('sao,paulo')
    const [data, setData] = useState({})
    const API_KEY = process.env.REACT_APP_API_KEY


    useEffect(() => {

        api.get(`/weather?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
            setData(response.data)
            console.log('api fetch')

        })

    }, [])


    useEffect(() => {

        setFormatedCity(formatedCity.replaceAll(' ', ','))
        setFormatedCity(city.toLowerCase())


    }, [city])

    async function search(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key == 'Enter') {

            await api.get(`/weather?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
                setData(response.data)
                console.log('api fetch')

            })
        }

    }

    return (
        <Container>

            <City
                type='text'
                placeholder="Digite aqui a cidade"
                value={city}
                onChange={e => setCity(e.target.value)}
                onKeyDown={event => search(event)}
            />

            <Date>17 de novembro de 2022</Date>
            <Temperature>30º</Temperature>
            <Weather>Nublado</Weather>

            <MinMax>
                <h4> <ArrowUp />34º</h4>
                <h4> <ArrowDown />23º</h4>
            </MinMax>

            <>
                {/* {console.log(data)} */}
            </>



        </Container>

    )

}