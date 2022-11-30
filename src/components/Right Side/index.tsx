import { Container } from "./styles"
import ForecastDay from "../Forecast Day"

interface Props{
    city:string;
    enter:boolean;
}

export default function Forecast(props:Props) {
    return (
        <Container>
            <h1>Previsão de tempo</h1>

        <ForecastDay/>
        <ForecastDay/>
        <ForecastDay/>
        <ForecastDay/>
        <ForecastDay/>
        </Container>

    )
}