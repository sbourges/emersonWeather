export class WeatherInfo {
    weather?: [{
		description: String;
	}];
	main?: {
		temp: number;
		feels_like: number;
	};
}