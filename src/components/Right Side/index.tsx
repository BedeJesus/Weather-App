import ForecastDay from "../Forecast Day"
import { useEffect, useState } from 'react'
import api from "../../utils/api"
import type { Data } from "../../Interfaces/ForecastData"

interface Props {
    city: string;
    enter: boolean;
}

export default function Forecast(props: Props) {

    const [formatedCity, setFormatedCity] = useState('sydney')
    const [data, setData] = useState<Data>()
    const [loading, setLoading] = useState(false)
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

    async function APICall() {

        await api.get(`/forecast?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
            setData(response.data)
        })
    }

    useEffect(() => {
        APICall()
            .then(() => {
                setLoading(true)
            })
    }, [])

    useEffect(() => {
        setFormatedCity(formatedCity.replace(/ /g, ','))
        setFormatedCity(props.city.toLowerCase())
    }, [props.city])


    useEffect(() => {

        APICall()

    }, [props.enter])


    function getMaxTemp(first: number, last: number) {

        let values: number[] = []

        if (data)
            for (let i = first; i <= last; i++) {
                values.push(data?.list[i]?.main?.temp_max)
            }

        const tempMax = Math.max(...values)
        return Math.round(tempMax)

    }

    function getMinTemp(first: number, last: number) {

        let values: number[] = []

        if (data)
            for (let i = first; i <= last; i++) {
                values.push(data?.list[i]?.main?.temp_min)
            }

        const tempMin = Math.min(...values)
        return Math.round(tempMin)
    }

    return (
        <div className="flex flex-col w-xl gap-6 max-md:w-xs max-lg:mb-5 lg:mr-4">

            <>{loading && data &&

                <>
                    <ForecastDay
                        temp_min={getMinTemp(0, 7)}
                        temp_max={getMaxTemp(0, 7)}
                        desc={data?.list[5]?.weather[0]?.description}
                        main={data?.list[5]?.weather[0]?.main}
                        clouds={data?.list[5].clouds.all}
                        date={data?.list[5]?.dt_txt}
                        wind={data?.list[5]?.wind.speed}
                        humidity={data?.list[5]?.main.humidity}
                        pressure={data?.list[5]?.main.pressure}
                        visibility={data?.list[5]?.visibility}
                        sunrise={data?.list[5]?.sys.sunrise}
                        sunset={data?.list[5]?.sys.sunset}
                    />

                    <ForecastDay
                        temp_min={getMinTemp(8, 15)}
                        temp_max={getMaxTemp(8, 15)}
                        desc={data?.list[23]?.weather[0]?.description}
                        main={data?.list[13]?.weather[0]?.main}
                        clouds={data?.list[13].clouds.all}
                        date={data?.list[13]?.dt_txt}
                        wind={data?.list[13]?.wind.speed}
                        humidity={data?.list[13]?.main.humidity}
                        pressure={data?.list[13]?.main.pressure}
                        visibility={data?.list[13]?.visibility}
                        sunrise={data?.list[13]?.sys.sunrise}
                        sunset={data?.list[13]?.sys.sunset}
                    />

                    <ForecastDay
                        temp_min={getMinTemp(16, 23)}
                        temp_max={getMaxTemp(16, 23)}
                        desc={data?.list[21]?.weather[0]?.description}
                        main={data?.list[21]?.weather[0]?.main}
                        clouds={data?.list[21].clouds.all}
                        date={data?.list[21]?.dt_txt}
                        wind={data?.list[21]?.wind.speed}
                        humidity={data?.list[21]?.main.humidity}
                        pressure={data?.list[21]?.main.pressure}
                        visibility={data?.list[21]?.visibility}
                        sunrise={data?.list[21]?.sys.sunrise}
                        sunset={data?.list[21]?.sys.sunset}
                    />

                    <ForecastDay
                        temp_min={getMinTemp(24, 31)}
                        temp_max={getMaxTemp(24, 31)}
                        desc={data?.list[29]?.weather[0]?.description}
                        main={data?.list[29]?.weather[0]?.main}
                        clouds={data?.list[29].clouds.all}
                        date={data?.list[29]?.dt_txt}
                        wind={data?.list[29]?.wind.speed}
                        humidity={data?.list[29]?.main.humidity}
                        pressure={data?.list[29]?.main.pressure}
                        visibility={data?.list[29]?.visibility}
                        sunrise={data?.list[29]?.sys.sunrise}
                        sunset={data?.list[29]?.sys.sunset}
                    />

                    <ForecastDay
                        temp_min={getMinTemp(32, 39)}
                        temp_max={getMaxTemp(32, 39)}
                        desc={data?.list[37]?.weather[0]?.description}
                        main={data?.list[37]?.weather[0]?.main}
                        clouds={data?.list[37].clouds.all}
                        date={data?.list[37]?.dt_txt}
                        wind={data?.list[37]?.wind.speed}
                        humidity={data?.list[37]?.main.humidity}
                        pressure={data?.list[37]?.main.pressure}
                        visibility={data?.list[37]?.visibility}
                        sunrise={data?.list[37]?.sys.sunrise}
                        sunset={data?.list[37]?.sys.sunset}
                    />
                </>

            } </>

        </div>

    )
}