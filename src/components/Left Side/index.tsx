import { Container, City, Temperature, Weather, MinMax, Date } from "./styles"
import { ArrowUp, ArrowDown } from 'phosphor-react'
import { KeyboardEvent, useEffect, useState } from 'react'
import api from "../../utils/api"

interface Data {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
    }

    weather: [{
        main: string;
        description: string;
    }]

    dt: number;
}

export default function Today() {

    const [city, setCity] = useState('Sydney')
    const [formatedCity, setFormatedCity] = useState('sydney')
    const [data, setData] = useState<Data>()
    const [loading, setLoading] = useState(false)
    const API_KEY = process.env.REACT_APP_API_KEY


    useEffect(() => {

        async function firstApiCall() {

            await api.get(`/weather?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
                setData(response.data)
            })

            setLoading(true)
        }

        firstApiCall()


    }, [])


    useEffect(() => {

        setFormatedCity(formatedCity.replaceAll(' ', ','))
        setFormatedCity(city.toLowerCase())

    }, [city])

    async function search(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key == 'Enter') {

            await api.get(`/weather?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
                setData(response.data)
                console.log(data)

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

            <>{loading &&

                <>

                    <Date>17 de novembro de 2022</Date>
                    <Temperature>{data?.main.temp.toFixed(0)}º</Temperature>
                    <Weather>{`${data?.weather[0].description.charAt(0).toUpperCase()}${data?.weather[0].description.slice(1)}`}</Weather>

                    <MinMax>
                        <h4> <ArrowUp />{data?.main.temp_max.toFixed(0)}º</h4>
                        <h4> <ArrowDown />{data?.main.temp_min.toFixed(0)}º</h4>
                    </MinMax>

                    <>
                        {console.log(data)}
                    </>

                </>


            }</>

        </Container>

    )

}