export interface Data {
    list: {

        main: {
            temp: any;
            temp_min: any;
            temp_max: any;
        }

        weather: {
            main: any;
            description: any;
        }[]

        clouds: {
            all: any;
        }

        dt_txt: any;
    }[]

    dt: any;
}