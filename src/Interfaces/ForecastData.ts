export interface Data {
    list: {

        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
            feels_like: number;
            pressure: number;
            humidity: number;
        }

        weather: {
            main: string;
            description: string;
        }[]

        clouds: {
            all: number;
        }

        dt_txt: string;

        visibility:number

        wind:{
            speed:number;
            deg:number;
        }

        sys:{
            country: string,
            sunrise: number,
            sunset: number
        }
    }[]

}