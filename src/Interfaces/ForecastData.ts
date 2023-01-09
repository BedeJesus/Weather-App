export interface Data {
    list: {

        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
        }

        weather: {
            main: string;
            description: string;
        }[]

        clouds: {
            all: number;
        }

        dt_txt: string;
    }[]

}