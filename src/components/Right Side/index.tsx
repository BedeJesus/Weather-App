import { Container } from "./styles"
import ForecastDay from "../Forecast Day"
import { useEffect, useState } from 'react'
import api from "../../utils/api"
import { mainModule } from "process";

interface Props {
    city: string;
    enter: boolean;
}


interface Data {
    list: {

        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
        }

        weather: {
            main: string;
            description: string;
        }[]

        clouds: {
            all: number;
        }[]

        dt_txt: string;
    }[]

    dt: number;
}



export default function Forecast(props: Props) {


    const [formatedCity, setFormatedCity] = useState('sydney')
    const [data, setData] = useState<Data>()
    const [loading, setLoading] = useState(false)
    const API_KEY = process.env.REACT_APP_API_KEY


    useEffect(() => {
        async function firstApiCall() {
            await api.get(`/forecast?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
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
            await api.get(`/forecast?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
                setData(response.data)

            })
        }
        search()

    }, [props.enter])


    return (
        <Container>
            <h1>Previsão de tempo</h1>

            {/* <ForecastDay
                temp_min={data?.list[1]?.main.temp_min}
                temp_max={data?.list[6].main.temp_max}
                desc={data?.list[6].weather.description}
                clouds={data?.list[6].clouds.all}


            /> */}


            {/* <ForecastDay />
            <ForecastDay />
            <ForecastDay />
            <ForecastDay /> */}

            {/* <>
                const min=  {console.log(data?.list[1].main.temp_min)}
                max = {console.log(data?.list[6].main.temp_max)}
                desc = {console.log(data?.list[6].weather.description)}
                clouds = {console.log(data?.list[6].clouds.all)}

            </> */}

            <>
                {console.log(data?.list[3]?.main)}

            </>
        </Container>

    )
}