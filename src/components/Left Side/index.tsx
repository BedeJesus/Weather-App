import { ArrowUp, ArrowDown } from 'phosphor-react'
import { useEffect, useState } from 'react'
import api from "../../utils/api"
import type { Data } from "../../Interfaces/TodayData"
import InfoBox from '../infoBox'

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
            setFormatedDate(formateDate(response.data.dt))
        }).catch(() => {
            alert('Verifique se o país desejado foi digitado corretamente e está em inglês.')
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

    function formateDate(unformattedDate: number) {

        const date = new window.Date(unformattedDate * 1000);
        const dia = date.getDate();
        const mes = date.getMonth() + 1;
        const ano = date.getFullYear();
        const diaFormatado = String(dia).padStart(2, '0');
        const mesFormatado = String(mes).padStart(2, '0');
        const dataFinal = `${diaFormatado}/${mesFormatado}/${ano}`;

        return dataFinal

    }

    function formateHour(unformattedHour: number) {

        const timestampEmMilissegundos = unformattedHour * 1000;
        const data = new Date(timestampEmMilissegundos);
        const horas = data.getHours();
        const minutos = data.getMinutes();
        const horasFormatadas = String(horas).padStart(2, '0');
        const minutosFormatados = String(minutos).padStart(2, '0');

        return `${horasFormatadas}:${minutosFormatados}`;

    }

    return (
        <div className="flex  flex-col rounded-2xl h-116 justify-between p-3 w-full bg-gray-600/35 border" >

            <>{loading && data &&
                <>
                    <div>
                        <h2 className="flex justify-center text-md">{formatedDate}</h2>
                        <h3 className="flex text-2xl max-md:text-xl">{`${data.weather[0].description.charAt(0).toUpperCase()}${data.weather[0].description.slice(1)}`}</h3>

                        <div className="flex items-end justify-between mb-3">
                            <h2 className="flex text-9xl max-md:text-8xl">{data.main.temp.toFixed(0)}º</h2>
                            <div className='flex'>
                                <h4 className="flex items-center text-xl"><ArrowUp color="red" />{data.main.temp_max.toFixed(0)}º</h4>
                                <h4 className="flex items-center text-xl"><ArrowDown color="blue" />{data.main.temp_min.toFixed(0)}º</h4>
                            </div>
                        </div>

                        <h3>Sensação Térmica: {data.main.feels_like.toFixed(0)}º</h3>
                    </div>

                    <div className='flex gap-1 justify-center'>
                        <InfoBox label='Vento' icon='Wind' value={`${data.wind.speed} km/h`} />
                        <InfoBox label='Humidade' icon='Drop' value={`${data.main.humidity}%`} />
                        <InfoBox label='Pressão' icon='CloudArrowDown' value={`${data.main.pressure} mb`} />
                        <InfoBox label='Visibilidade' icon='Eye' value={`${data.visibility / 1000} km`} />
                    </div>

                    <div className='flex gap-1 justify-center'>
                        <InfoBox label='Nascer do Sol' icon='SunHorizon' value={formateHour(data.sys.sunrise)} />
                        <InfoBox label='Por do Sol' icon='SunDim' value={formateHour(data.sys.sunset)} />
                        <InfoBox label='Nuvens' icon='Cloud' value={`${data.clouds.all}%`} />
                        <InfoBox label='País' icon='Flag' value={`${data.sys.country}`} />
                    </div>
                </>

            }</>

        </div>

    )

}

