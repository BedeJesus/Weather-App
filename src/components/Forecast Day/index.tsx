import { Container, Line, Icon, Info } from "./styles";
import { ArrowUp, ArrowDown, CloudRain } from 'phosphor-react'


interface Props {
    temp_min: number;
    temp_max: number;
    desc: string;
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



    return (
        <Container>

            <Icon>
                <h1><CloudRain /></h1>
                <h2>{formatedDate()}</h2>
            </Icon>

            <Info>

                <Line>
                    <h1>Temperatura</h1>

                    <h2>
                        <ArrowUp color="red" weight="bold" />{props.temp_max}
                        <ArrowDown color="blue" weight="bold" />{props.temp_min}
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