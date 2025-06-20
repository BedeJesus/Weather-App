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
            formateDate(response.data.dt)
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

    async function formateDate(unformattedDate: number) {

        const date = new window.Date(unformattedDate * 1000);
        const dia = date.getDate();
        const mes = date.getMonth() + 1;
        const ano = date.getFullYear();
        const diaFormatado = String(dia).padStart(2, '0');
        const mesFormatado = String(mes).padStart(2, '0');
        const dataFinal = `${diaFormatado}/${mesFormatado}/${ano}`;
        setFormatedDate(dataFinal)

    }

    return (
        <div className="flex flex-col rounded-2xl h-116 justify-between py-3 w-full bg-gray-600/35" >

            <>{loading &&
                <>
                    <div>
                        <h2 className="flex justify-center text-3xl">{formatedDate}</h2>
                        <h2 className="flex justify-center text-9xl max-md:text-8xl">{data?.main.temp.toFixed(0)}º</h2>
                        <h3 className="flex justify-center text-5xl max-md:text-4xl">{`${data?.weather[0].description.charAt(0).toUpperCase()}${data?.weather[0].description.slice(1)}`}</h3>

                        <div className="flex justify-center ">
                            <h4 className="flex items-center text-4xl"> <ArrowUp color="red" />{data?.main.temp_max.toFixed(0)}º</h4>
                            <h4 className="flex items-center text-4xl"> <ArrowDown color="blue" />{data?.main.temp_min.toFixed(0)}º</h4>
                        </div>
                    </div>

                    <div className='flex gap-1 justify-center'>
                        <InfoBox label='Vento' icon='Wind' value={0} />
                        <InfoBox label='Humidade' icon='Drop' value={0} />
                        <InfoBox label='Pressão' icon='CloudArrowDown' value={0} />
                        <InfoBox label='Visibilidade' icon='Eye' value={0}/>
                    </div>

                    <div className='flex gap-1 justify-center'>
                        <InfoBox label='Nascer do Sol' icon='SunHorizon' value={0} />
                        <InfoBox label='Por do Sol' icon='SunDim' value={0} />
                        <InfoBox label='sei la' icon='Wind' value={0}  />
                        <InfoBox label='sei la 2' icon='Wind' value={0}  />
                    </div>
                </>

            }</>

        </div>

    )

}

