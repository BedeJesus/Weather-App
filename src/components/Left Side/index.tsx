import { Container, City, Temperature, Weather, MinMax, Date } from "./styles"
import { ArrowUp, ArrowDown } from 'phosphor-react'
import { useEffect, useState } from 'react'
import api from "../../utils/api"
import {Data} from '../../Interfaces/TodayData'

interface Props {
    city: string;
    enter: boolean;
}

export default function Today(props: Props) {

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
        setFormatedCity(props.city.toLowerCase())

    }, [props.city])


    useEffect(() => {

        async function search() {
            await api.get(`/weather?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
                setData(response.data)

            })
        }
        search()

    }, [props.enter])



    return (
        <Container>

            <>{loading &&

                <>

                    <Date>{'COLOCAR DATA AQUI'}</Date>
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

