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

Not closed to being finished. Swallowed too much by choosing Angular that I haven't touched in a while. Got stuck in trying to handle the http error. Should be simple, but eludes me at this time and running out of time. Would have asked someone if possible or taken a break.

Base is in place and getting the weather from the Geo location works. When trying to get for city, got error from API related to API Key (tried using curl and postman also with same result). Since it can take days to receive one, didn't complete and just hard coded API return example.
`http://api.openweathermap.org/geo/1.0/direct?p=Valrico,FL,US&appid=cf002751564a4c78f5f7ed479f1b9ba3`
```json
{
    "cod": 401,
    "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
}
```

Also needed to have the user choose on of the many city/state returned. This would have been a new component shared by city and zip.

Need to add at least unit testing and potentially end to end tests. Normally would have done test first, but realize mid way that I wasn't doing it due to re-learning Angular. Bad estimate or choice of UI. I could have gone for a command line and would have been done in no time.
