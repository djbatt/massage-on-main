import styled from "styled-components";
import Link from "next/link";
import { Instagram, FacebookSquare } from "@styled-icons/boxicons-logos";
import { Parking, MapPin } from "@styled-icons/fa-solid";

import GoogleMapReact from "google-map-react";

const mapStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

const Footer = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex: 1;
    position: relative;
    min-width: 300px;
    margin-bottom: 16px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const MenuList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  margin: 0;
  flex-direction: column;
  > li {
    font-weight: bold;
    height: fit-content;
    width: fit-content;
    margin-top: 6px;
    margin-bottom: 6px;
  }
`;

const FooterHeading = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const Hours = styled.span`
  margin-top: 6px;
  margin-bottom: 6px;
`;

const SocialRow = styled.div`
  display: flex;
  a {
    ${Instagram}, ${FacebookSquare} {
      color: ${(props) => props.theme.brandBlue};
      width: 36px;
    }
  }
`;

const LegalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content-center;
`;

const LegalText = styled.span`
  font-size: 12px;
`;

const Pin = styled(MapPin)`
  color: ${(props) => props.theme.brandBlue};
  width: 12px;
`;

const PinParking = styled(Parking)`
  color: ${(props) => props.theme.brandBlue};
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
    styles: mapStyles,
  };
}

// Render data...

function footer(props) {
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
    <Footer>
      <Container>
        <FlexGrid>
          <div>
            <FooterHeading>Site Map</FooterHeading>
            <MenuList>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <SocialRow>
                  <a href="https://www.facebook.com/massageonmainrva" rel="noopener" target="_blank">
                    <FacebookSquare />
                  </a>
                  <a href="https://www.instagram.com/massageonmainrva/" rel="noopener" target="_blank">
                    <Instagram />
                  </a>
                </SocialRow>
              </li>
            </MenuList>
          </div>
          <div style={{ minHeight: "300px" }}>
            <FooterHeading>Locate Us</FooterHeading>
            <Hours>
              Massage On Main is located at 2602 W Main St. You can find extra
              parking in the alleyway behind Main St and N Robinson St. Look for
              the cement parking lot.
            </Hours>
            <FooterHeading>Business Hours</FooterHeading>
            <Hours>MON-FRI: 9AM - 10PM</Hours>
            <Hours>SAT-SUN: 10AM - 7PM</Hours>
          </div>
          <div style={{height: "300px"}}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyCLo1g8znFtrQg-UovgeyOxIH4ZqzkddHI" }}
              defaultCenter={mapData.center}
              defaultZoom={mapData.zoom}
              options={createMapOptions}
            >
              <div lat={mapData.business.lat} lng={mapData.business.lng}>
                <Pin />
              </div>
              <div lat={mapData.parking.lat} lng={mapData.parking.lng}>
                <PinParking />
              </div>
            </GoogleMapReact>
          </div>
        </FlexGrid>
        <LegalRow>
          <LegalText>
            <Link href="/privacy-policy">Privacy Policy</Link> | ©{" "}
            {new Date().getFullYear()} Massage On Main LLC
          </LegalText>
        </LegalRow>
      </Container>
    </Footer>
  );
}

export default footer;
