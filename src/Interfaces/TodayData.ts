 export interface Data {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
    }

    weather: {
        main: string;
        description: string;
    }[]

    dt: number;
}