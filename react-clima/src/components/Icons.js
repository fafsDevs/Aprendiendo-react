export default function Icons (icon) {
  switch (icon) {
    case 'Thunderstorms':
      icon = 'icons/thunderstorms-rain.svg'
      break;
    case 'Snow':
      icon = 'icons/snow.svg'
      break;
    case 'Smoke':
      icon = 'icons/smoke.svg'
      break;
    case 'Rain':
      icon = 'icons/rain.svg'
      break;
    case 'Haze':
      icon = 'icons/haze.svg'
      break;
    case 'Fog':
      icon = 'icons/fog.svg'
      break;
    case 'Clouds':
      icon = 'icons/fog.svg'
      break;
    case 'Drizzle':
      icon = 'icons/thunderstorms-rain.svg'
      break;
    case 'Atmosphere':
      icon = 'icons/weather.svg'
      break;
    case 'Clear':
      icon = 'icons/clear-day.svg'
      break;
  
    default:
      icon = 'icons/clear-day.svg'
      break;
  }
  return icon
}
