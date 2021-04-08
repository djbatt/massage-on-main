import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { Parking, MapPin } from "@styled-icons/fa-solid";
import MapStyle from "./mapstyle.json";

const Business = styled(MapPin)`
  color: ${(props) => props.theme.colors.brandBlue};
  width: 12px;
`;

const BusinessParking = styled(Parking)`
  color: ${(props) => props.theme.colors.brandBlue};
  width: 16px;
`;

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: MapStyle,
  };
}

const map = () => {
  const mapData = {
    center: {
      lat: 37.552256078496825,
      lng: -77.473304844577,
    },
    parking: {
      lat: 37.55213699723793,
      lng: -77.4724733598262,
    },
    business: {
      lat: 37.55230179714384,
      lng: -77.47341347403636,
    },
    zoom: 17,
    apiKey: process.env.MAPS_API_KEY,
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCLo1g8znFtrQg-UovgeyOxIH4ZqzkddHI" }}
      defaultCenter={mapData.center}
      defaultZoom={mapData.zoom}
      options={createMapOptions}
    >
      <div lat={mapData.business.lat} lng={mapData.business.lng}>
        <Business />
      </div>
      <div lat={mapData.parking.lat} lng={mapData.parking.lng}>
        <BusinessParking />
      </div>
    </GoogleMapReact>
  );
};

export default map;