import { Container, Line, Icon, Info } from "./styles";
import { ArrowUp, ArrowDown, CloudRain } from 'phosphor-react'

export default function ForecastDay() {
    return (
        <Container>

            <Icon>
                <h1><CloudRain /></h1>
                <h2>21/11</h2>
            </Icon>

            <Info>

                <Line>
                    <h1>Temperatura</h1>
                    <h2> <ArrowUp color="red" weight="bold" />20º <ArrowDown color="blue" weight="bold" />10º</h2>
                </Line>

                <Line>
                    <h1>Chuva</h1>
                    <h2>90%</h2>
                </Line>

            </Info>


        </Container>
    )
}