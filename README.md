# Place Picker
Available places are automatically sorted in accordance with a current user location. Click to pick places.

### Styling - Tailwind CSS + Material Tailwind
```
"tailwindcss": "^3.4.0"
"@material-tailwind/react": "^2.1.8"

```

### Modal.jsx & Modal-old.jsx & ProgressBar.jsx
Reusable dialog wrapper and progress bar.

### Geolocation
```
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

```

#### enableHighAccuracy (optional)
A boolean value that indicates the application would like to receive the best possible results. If true and if the device is able to provide a more accurate position, it will do so. Note that this can result in slower response times or increased power consumption (with a GPS chip on a mobile device for example). On the other hand, if false, the device can take the liberty to save resources by responding more quickly and/or using less power. Default: false.

#### timeout (optional)
A positive long value representing the maximum length of time (in milliseconds) the device is allowed to take in order to return a position. The default value is Infinity, meaning that getCurrentPosition() won't return until the position is available.

#### maximumAge (optional)
A positive long value indicating the maximum age in milliseconds of a possible cached position that is acceptable to return. If set to 0, it means that the device cannot use a cached position and must attempt to retrieve the real current position. If set to Infinity the device must return a cached position regardless of its age. Default: 0.