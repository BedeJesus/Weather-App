import { ArrowUp, ArrowDown, CloudRain, Sun, CloudSnow, CloudFog, Cloud } from 'phosphor-react'

interface Props {
    temp_min: number;
    temp_max: number;
    desc: string;
    main: string;
    clouds: number;
    date: string;
}

export default function Front(props: Props) {

    function formatedDate() {
        let formatedDate = props.date
        formatedDate = formatedDate.split(' ')[0]
        formatedDate = formatedDate.split('-').reverse().join('/');
        formatedDate = formatedDate.split("/", 2).join("/")
        return formatedDate
    }

    function setIcon() {
        if (props.main === 'Clear') return <Sun />
        if (props.main === 'Rain') return <CloudRain />
        if (props.main === 'Snow') return <CloudSnow />
        if (props.main === 'Mist') return <CloudFog />
        if (props.main === 'Clouds') return <Cloud />
        return null;
    }

    return (
        <div className="absolute grid h-full w-full grid-cols-[15%_60%_25%] items-center border rounded-2xl bg-gray-600/35 px-2 py-1 [backface-visibility:hidden] max-md:grid-cols-[20%_50%_30%]">
            <div className="flex h-full flex-col items-center justify-center">
                <h1 className="text-5xl max-md:text-4xl">{setIcon()}</h1>
                <h2 className="text-2xl max-md:text-lg">{formatedDate()}</h2>
            </div>

            <div className="flex h-full flex-col items-end justify-between text-start">
                <h1 className="text-2xl max-md:text-lg">Temperatura</h1>
                <h1 className="text-2xl capitalize max-md:text-lg">{props.desc}</h1>
            </div>

            <div className="flex h-full flex-col items-center justify-between text-start">
                <div className="flex w-full items-center justify-end gap-4 max-md:gap-0">
                    <div className="flex items-center text-2xl max-md:text-lg">
                        <ArrowUp color="red" weight="bold" />
                        <span>{props.temp_max}º</span>
                    </div>
                    <div className="flex items-center text-2xl max-md:text-lg">
                        <ArrowDown color="blue" weight="bold" />
                        <span>{props.temp_min}º</span>
                    </div>
                </div>
                <h2 className="w-full text-end text-2xl max-md:text-lg">{props.clouds}%</h2>
            </div>
        </div>
    )
}