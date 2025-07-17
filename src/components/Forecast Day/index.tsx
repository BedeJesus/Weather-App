import { useState } from 'react';
import Front from './Front'
import Back from './Back'

interface Props {
    temp_min: number;
    temp_max: number;
    desc: string;
    main: string;
    clouds: number;
    date: string;
    wind: number;
    humidity: number;
    pressure: number;
    visibility: number;
    sunrise: number;
    sunset: number;
}

export default function ForecastDay(props: Props) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="group h-22.5 cursor-pointer font-sans" onClick={handleFlip} >
            <div className={`relative h-full w-full text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>

                <Front
                    temp_min={props.temp_min}
                    temp_max={props.temp_max}
                    desc={props.desc}
                    main={props.main}
                    clouds={props.clouds}
                    date={props.date}
                />

                <Back
                    wind={props.wind}
                    humidity={props.humidity}
                    pressure={props.pressure}
                    visibility={props.visibility}
                    sunrise={props.sunrise}
                    sunset={props.sunset}
                />
            </div>
        </div>
    )
}