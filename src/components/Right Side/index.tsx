import { Container } from "./styles"
import ForecastDay from "../Forecast Day"
import { useEffect, useState } from 'react'
import api from "../../utils/api"

interface Props {
    city: string;
    enter: boolean;
}


interface Data {
    list: {

        main: {
            temp: any;
            temp_min: any;
            temp_max: any;
        }

        weather: {
            main: any;
            description: any;
        }[]

        clouds: {
            all: any;
        }

        dt_txt: any;
    }[]

    dt: any;
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



    function getMaxTemp(first: number, last: number) {

        // search inside the arrays of a certain day for the highest temperature possible

        let tempMax = 0
        let index = 0

        for (let i = first; i < last; i++) {

            console.log(data?.list[i]?.main?.temp_max)

            if (data?.list[i]?.main?.temp_max
                > data?.list[i - 1]?.main?.temp_max
                &&
                data?.list[i]?.main?.temp_max
                > data?.list[index]?.main?.temp_max

            ) {
                tempMax = data?.list[i].main.temp_max
                index = i

            }

        }

        return tempMax

    }

    function getMinTemp(first: number, last: number) {

        // search inside the arrays of a certain day for the lowest temperature possible

        let tempMin = 0
        let index = 0

        for (let i = first; i < last; i++) {

            if (data?.list[i]?.main?.temp_min
                < data?.list[i - 1]?.main?.temp_min
                &&

                data?.list[i]?.main?.temp_min
                < data?.list[index]?.main?.temp_min



            ) {
                tempMin = data?.list[i].main.temp_min
                index = i
                console.log('O valor que foi pego como menor:', i, tempMin)
                // quando o primeiro valor é menor que o segundo da erro
                //mesmo erro acontece o temp max


            }

        }

        return tempMin

    }


    return (
        <Container>
            <h1>Previsão de tempo</h1>

            <>{loading &&
                <>

                    <ForecastDay
                        temp_min={getMinTemp(0, 7)}
                        temp_max={getMaxTemp(0, 7)}
                        desc={data?.list[5]?.weather[0]?.description}
                        main={data?.list[5]?.weather[0]?.main}
                        clouds={data?.list[5].clouds.all}
                        date={data?.list[5]?.dt_txt}
                    />

                    <>
                        {console.log(data)}
                        {/* 

                    0-7 : dia 1
                    8-15: dia 2
                    16-23 : dia 3
                    24-31 : dia 4
                    32-39: dia 5
                    
                    */}


                    </>

                </>

            } </>

        </Container>

    )
}