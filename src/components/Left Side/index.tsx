import { Container, City, Temperature, Weather, MinMax, Date } from "./styles"
import { ArrowUp, ArrowDown } from 'phosphor-react'
import { useEffect, useState } from 'react'
import api from "../../utils/api"
import { Data } from '../../Interfaces/TodayData'
import unixApi from "../../utils/unixApi"


interface Props {
    city: string;
    enter: boolean;
}

export default function Today(props: Props) {

    const [formatedCity, setFormatedCity] = useState('sydney')
    const [formatedDate, setFormatedDate] = useState('')
    const [data, setData] = useState<Data>()
    const [loading, setLoading] = useState(false)


    const API_KEY = process.env.REACT_APP_API_KEY




    useEffect(() => {
        async function firstApiCall() {
            await api.get(`/weather?q=${formatedCity}&appid=${API_KEY}&units=metric&lang=pt_br`).then((response) => {
                setData(response.data)
                unixApi.get(`?cached&s=${data?.dt}`).then((response) => {
                    setFormatedDate(response.data)

                    let date: string = response.data
                    date = date.split(' ')[0]
                    date = date.split('-').reverse().join('/');
                    date = date.split("/", 3).join("/")
                    setFormatedDate(date)
                })

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

    // function FormateDate() {
    //     unixApi.get(`?cached&s=${data?.dt}`).then((response) => {

    //         setFormatedDate(response.data)

    //         let date: string = response.data
    //         date = date.split(' ')[0]
    //         date = date.split('-').reverse().join('/');
    //         date = date.split("/", 3).join("/")
    //         setFormatedDate(date)
    //         console.log('chamou')

    //     })


    // }


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

