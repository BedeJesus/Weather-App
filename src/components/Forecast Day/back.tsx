import { Wind, Drop, CloudArrowDown, Eye} from 'phosphor-react'

interface Props {
    wind: number;
    humidity: number;
    pressure: number;
    visibility: number;
    sunrise: number;
    sunset: number;
}

export default function Back(props: Props) {

    return (
        <div className="flex h-full w-full justify-between gap-  rounded-2xl border bg-gray-600/35 p-2 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex flex-col items-center justify-around text-sm">
                <Wind size={24} />{props.wind?.toFixed(1)} km/h
            </div>

            <div className="flex flex-col items-center justify-around text-sm">
                <Drop size={24} />{props.humidity}%
            </div>

            <div className="flex flex-col items-center justify-around text-sm">
                <CloudArrowDown size={24} />{props.pressure} hPa
            </div>

            <div className="flex flex-col items-center justify-around text-sm">
                <Eye size={24} />{(props.visibility / 1000)?.toFixed(1)} km
            </div>
        </div>
    )
}