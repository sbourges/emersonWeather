# EmersonWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5. The CLI needs to be install to run using a Development Server.

## Goal
Build an application using whatever tools, components, or third party libraries that you&#39;d like.
The app should allow a user to search for current weather conditions by city name, zip code, or
coordinates (GPS, reverse geolocation) using the https://openweathermap.org/api API. The
application should be organized in a way where new features can be easily added and/or tested
and that you would be happy to maintain. Be sure to submit documentation on how to run the
application, including some example inputs.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Observations

Base is in place and getting the weather from the Geo location works. When trying to get for city, got error from API related to API Key (tried using curl and postman also with same result). Since it can take days to receive one, didn't complete and just hard coded API return example.
`http://api.openweathermap.org/geo/1.0/direct?p=Valrico,FL,US&appid=cf002751564a4c78f5f7ed479f1b9ba3`
```json
{
    "cod": 401,
    "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
}
```

Also needed to have the user choose one of the many city/state returned. This would have been a new component shared by city and zip.

Can easily add routing to add more menues and functionality. As it grow would need to re-organize file structure as too many component folder would be under app. 

Need to add at least unit testing and potentially end to end tests. Normally would have done test first, but realize mid way that I wasn't doing it being out of shape in TDD mentality.
