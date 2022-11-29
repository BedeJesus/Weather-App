import { Container } from "./styles"
import ForecastDay from "../Forecast Day"

export default function Forecast() {
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