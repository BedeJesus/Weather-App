 export interface Data {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    }
    clouds:{
        all: number;
    }

    visibility:number

    weather: {
        main: string;
        description: string;
    }[]

    wind:{
        speed:number;
        deg:number;
    }

    sys:{
        country: string,
        sunrise: number,
        sunset: number
    }

    dt: number;
}