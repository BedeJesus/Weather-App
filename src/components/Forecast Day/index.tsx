import { Container, Line, Icon, Info } from "./styles";
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
        <Container>

            <Icon>
                <h1>{setIcon()}</h1>
                <h2>{formatedDate()}</h2>
            </Icon>

            <Info>

                <Line>
                    <h1>Temperatura</h1>

                    <h2>
                        <ArrowUp color="red" weight="bold" />{props.temp_max}º
                        <ArrowDown color="blue" weight="bold" />{props.temp_min}º
                    </h2>
                </Line>

                <Line>
                    <h1>{props.desc}</h1>
                    <h2>{props.clouds}%</h2>
                </Line>

            </Info>

        </Container>
    )
}