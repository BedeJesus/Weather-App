import { ArrowUp, ArrowDown, CloudRain, Sun, CloudSnow, CloudFog, Cloud } from 'phosphor-react'

interface Props {
    temp_min: number;
    temp_max: number;
    desc: string;
    main: string;
    clouds: number;
    date: string;
}

export default function ForecastDay(props: Props) {

    function formatedDate() {
        let formatedDate = props.date
        formatedDate = formatedDate.split(' ')[0]
        formatedDate = formatedDate.split('-').reverse().join('/');
        formatedDate = formatedDate.split("/", 2).join("/")
        return formatedDate
    }

    function setIcon() {
        if (props.main === 'Clear') {

            return <Sun />

        } else if (props.main === 'Rain') {

            return <CloudRain />

        } else if (props.main === 'Snow') {

            return <CloudSnow />

        } else if (props.main === 'Mist') {

            return <CloudFog />

        } else if (props.main === 'Clouds') {

            return <Cloud />

        }
    }

    return (
        <div className="grid grid-cols-[10%_65%_25%] rounded-2xl bg-gray-600/35 items-center w-full h-28 py-2 px-5">

            <div className="flex flex-col h-full justify-between items-center">
                <h1 className="text-5xl">{setIcon()}</h1>
                <h2 className="text-2xl">{formatedDate()}</h2>
            </div>

            <div className="flex flex-col items-center text-start h-full justify-between">
                <h1 className="text-2xl">Temperatura</h1>
                <h1 className="text-2xl">{props.desc}</h1>
            </div>

            <div className="flex flex-col items-center text-start h-full justify-between">
                <div className="flex justify-end items-center gap-4 w-full">
                    <div className="flex items-center text-2xl">
                        <ArrowUp color="red" weight="bold" />
                        <span>{props.temp_max}º</span>
                    </div>
                    <div className="flex items-center text-2xl">
                        <ArrowDown color="blue" weight="bold" />
                        <span>{props.temp_min}º</span>
                    </div>
                </div>

                <h2 className="text-end w-full text-2xl">{props.clouds}%</h2>
            </div>

        </div>
    )
}