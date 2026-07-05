# MEDILOCATOR PRO - Real-Time Hospital Finder System

MEDILOCATOR PRO Live is a responsive, single-page web application designed to help users instantly locate the nearest hospitals relative to their real-time GPS coordinates. Built as a full-stack frontend prototype, the system transitions away from static "as-the-crow-flies" mathematical distances to deliver true, live-traffic driving durations and ETAs by leveraging official Google Maps cloud services.

## 🚀 Features

- **Dynamic GPS Tracking:** Integrates the browser's native HTML5 Geolocation API to instantly lock onto user device coordinates. Falls back gracefully to a regional city center (Mumbai, MH) if permissions are restricted.
- **Live Medical Asset Discovery:** Leverages the **Google Places Service API** to perform an on-demand spatial query within a 10km grid radius to find legitimate surrounding hospitals.
- **Traffic-Aware Matrix Routing:** Passes candidate coordinates directly through the **Google Distance Matrix API** using real-time predictive traffic modeling (`BEST_GUESS`) to output true driving lengths and timelines.
- **Interactive Geovisual UI:** Automatically scales and renders custom interactive markers on a live map layout. Clicking on maps pins or matching dashboard list cards triggers rich-data info overlays.
- **Modern Fluid Layout:** Styled natively with Tailwind CSS for a clean, accessible desktop and mobile-responsive interface.

## 🛠️ Built With

- **Frontend Architecture:** Vanilla JavaScript (ES6+), HTML5, CSS3
- **Design System Framework:** Tailwind CSS
- **Mapping & GIS Engines:** - Google Maps JavaScript API
  - Google Places API
  - Google Distance Matrix API

## 🏁 Getting Started

To run this prototype locally on your computer, follow these simple setup steps:

### Prerequisites
You will need a valid **Google Cloud Console API Key** with the following APIs enabled:
1. Maps JavaScript API
2. Places API
3. Distance Matrix API

### Installation & Execution
1. Clone this repository or download the source code:
   ```bash
   git clone [https://github.com/https://github.com/sanuxr/MEDILOCATOR-PRO.git](https://github.com/sanuxr/MEDILOCATOR-PRO.git)
