import { Container, City, Temperature, Weather, MinMax, Date } from "./styles"
import { ArrowUp, ArrowDown } from 'phosphor-react'
import { useEffect, useState } from 'react'
import api from "../../utils/api"

export default function Today() {

    const [city, setCity] = useState('sao,paulo')
    const [data, setData] = useState({})



    const API_KEY = process.env.REACT_APP_API_KEY


    useEffect(() => {

        api.get(`/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
            setData(response.data)

        })

    }, [city])




    return (
        <Container>

            <City>São Paulo</City>
            <Date>17 de novembro de 2022</Date>
            <Temperature>30º</Temperature>
            <Weather>Nublado</Weather>

            <MinMax>
                <h4> <ArrowUp />34º</h4>
                <h4> <ArrowDown />23º</h4>
            </MinMax>

            <>
                {console.log(data)}
            </>



        </Container>

    )

}