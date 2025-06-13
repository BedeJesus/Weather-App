import { Container, City, Temperature, Weather, MinMax, Date } from "./styles"
import { ArrowUp, ArrowDown } from 'phosphor-react'
import { useEffect, useState } from 'react'
import api from "../../utils/api"
import type { Data } from "../../Interfaces/TodayData"
import unixApi from "../../utils/unixApi"


interface Props {
    city: string;
    enter: boolean;
}

export default function Today(props: Props) {

    const [formatedCity, setFormatedCity] = useState('sydney')
    const [formatedDate, setFormatedDate] = useState('01')
    const [data, setData] = useState<Data>()
    const [loading, setLoading] = useState(false)

    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

    async function APICall() {

        await api.get(`/weather?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
            setData(response.data)
        }).catch(() => {
            alert('Verifique se o país desejado foi digitado corretamente e está em inglês.')
        })
    }


    useEffect(() => {

        APICall()
            .then(() => {
                formateDate().then(() => {
                    setLoading(true)
                })
            })

    }, [])


    useEffect(() => {

        setFormatedCity(formatedCity.replace(/ /g, ','))
        setFormatedCity(props.city.toLowerCase())

    }, [props.city])


    useEffect(() => {

        APICall()

    }, [props.enter])

    async function formateDate() {

        await unixApi.get(`?cached&s=${data?.dt}`).then((response) => {

            var date = response.data
            date = date.toString().split(' ')[0]
            date = date.toString().split('-').reverse().join('/');
            date = date.toString().split("/", 3).join("/")
            setFormatedDate(date)

        })
    }


    return (
        <Container>

            <>{loading &&

                <>

                    <Date>{formatedDate}</Date>
                    <Temperature>{data?.main.temp.toFixed(0)}º</Temperature>
                    <Weather>{`${data?.weather[0].description.charAt(0).toUpperCase()}${data?.weather[0].description.slice(1)}`}</Weather>

                    <MinMax>
                        <h4> <ArrowUp color="red" />{data?.main.temp_max.toFixed(0)}º</h4>
                        <h4> <ArrowDown color="blue" />{data?.main.temp_min.toFixed(0)}º</h4>
                    </MinMax>

                </>
            }</>

        </Container>

    )

}

