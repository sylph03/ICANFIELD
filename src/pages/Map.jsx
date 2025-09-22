import { MapContainer, Marker, GeoJSON, useMap, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import countries from "../data/custom.geo.json"
import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const flagCountry = [
  {
    name: "Việt Nam",
    geoName: "Vietnam",
    imgFlag: "/flag-country/vietnam.png",
    position: [21.0285, 105.8542],
    showNav: false
  },
  {
    name: "Hoàng Sa",
    geoName: "Vietnam",
    imgFlag: "/flag-country/vietnam.png",
    position: [16.5, 112.0],
    showNav: false
  },
  {
    name: "Trường Sa",
    geoName: "Vietnam",
    imgFlag: "/flag-country/vietnam.png",
    position: [8.641, 111.918],
    showNav: false
  }, {
    name: "Canada",
    geoName: "Canada",
    imgFlag: "/flag-country/canada-flag2.png",
    position: [62.1304, -102.3468],
    showNav: true
  },
  {
    name: "Châu Âu",
    geoName: "Europe",
    imgFlag: "/flag-country/eu-flag2.png",
    position: [51.1657, 10.4515],
    showNav: true
  },
  {
    name: "Mỹ",
    geoName: "United States of America",
    imgFlag: "/flag-country/d-america-flag-1.jpg",
    position: [39.8283, -98.5795],
    showNav: true
  },
  {
    name: "New Zealeand",
    geoName: "New Zealand",
    imgFlag: "/flag-country/new-zealand-flag.png",
    position: [-41.2865, 172.7762],
    showNav: true
  },
  {
    name: "Úc",
    geoName: "Australia",
    imgFlag: "/flag-country/d-uc-flag.png",
    position: [-25.2744, 133.7751],
    showNav: true
  },
  {
    name: "Caribe",
    geoName: "Grenada",
    imgFlag: "/flag-country/caribe.jpg",
    position: [12.110081, -61.661040],
    showNav: true
  }
]

const customMarker = (flagCountry, name) => {
  const html = `
      <div class="custom-marker pointer-events-none !w-[5rem] !h-[3.26rem] absolute !left-[-1.5rem] top-0 max-sm:!pointer-events-none">
        <img src="/flag-country/bg-marker.png"
            class="absolute w-full h-full top-0 !left-1/2 !-translate-x-1/2 object-cover marker-bound max-sm:!w-[2rem] max-sm:!h-auto"/>
        <img src="${flagCountry}" 
            class="absolute !size-[1.5rem] top-[1rem] !left-1/2 !-translate-x-1/2 object-cover marker-bound rounded-full max-sm:!size-[1rem] max-sm:top-[0.6rem]"/>
        <div class="text-[#5c321e] absolute bottom-[-0.1rem] left-1/2 flex h-[1.375rem] w-fit -translate-x-1/2 translate-y-full items-center whitespace-nowrap rounded-[6.25rem] bg-[#E1DDC5] px-[0.5rem] text-[0.75rem] font-semibold uppercase leading-[1.2] tracking-[-0.0075rem]">
          ${name}
        </div>
      </div>
    `;

  return L.divIcon({
    className: "",
    html,
    iconSize: [96, 52.58],
    iconAnchor: [24, 52.58],
  });
};

// center mặc định
const defaultCenter = [20, 0];
const defaultZoom = 2;

// Component cho Marker với logic zoom
const ZoomableMarker = ({ fc, selected, setSelected, setActive }) => {
  const map = useMap();

  const handleClick = () => {
    if (!fc.showNav) return
    if (selected === fc.geoName) {
      // nếu click lại marker đang chọn → reset
      map.flyTo(defaultCenter, defaultZoom, { duration: 0.75 });
      setSelected(null);
    } else {
      // zoom + center vào marker
      map.flyTo(fc.position, 3, { duration: 0.75 });
      setSelected(fc.geoName);
      setActive(fc.geoName)
    }
  };

  return (
    <Marker
      position={fc.position}
      icon={customMarker(fc.imgFlag, fc.name)}
      eventHandlers={{ click: handleClick }}
    />
  );
};

function FlyToMarker({ active, flagCountry }) {
  const map = useMap();

  useEffect(() => {
    if (!active) return;
    const country = flagCountry.find(fc => fc.geoName === active);
    if (country?.position) {
      map.flyTo(country.position, 3, { duration: 0.75 });
    }
  }, [active, flagCountry, map]);

  return null;
}

function MapInstanceProvider({ setMap }) {
  const map = useMap();

  useEffect(() => {
    if (map) setMap(map);
  }, [map, setMap]);

  return null;
}

const Map = () => {
  const [map, setMap] = useState(null); // custom button zoom
  const [selected, setSelected] = useState(null); // zoom to nhỏ
  const [active, setActive] = useState(null); // active
  const selectedRef = useRef(selected);

  useEffect(() => {
    selectedRef.current = active;
  }, [active]);

  // Style cho từng quốc gia
  const countryStyle = (feature) => {
    const name =
      feature.properties.admin ||
      feature.properties.name ||
      feature.properties.ADMIN;

    const continent = feature.properties.continent;

    let fillColor;
    if (active === name || active === continent) {
      fillColor = '#bc9247'
    } else if (name === "Vietnam") {
      fillColor = "#FF0000";
    } else if (continent === "Europe" || name === "Australia" || name === "United States of America" || name === "United States" || name === "Canada" || name === "New Zealand") {
      fillColor = "#D0C1BA";
    } else {
      fillColor = "#F3F3F3";
    }

    return {
      fillColor,
      color: "#7F7C6E",
      weight: 0.3,
      fillOpacity: 1,
      opacity: 1
    };
  };
  console.log(selectedRef.current)
  console.log(selected)

  const onEachCountry = (feature, layer) => {
    const countryName =
      feature.properties.admin ||
      feature.properties.name ||
      feature.properties.ADMIN;

    const continent = feature.properties.continent;

    layer.on({
      mouseover: (e) => {
        console.log(selectedRef.current)
        console.log(countryName)
        console.log(selectedRef.current !== countryName)
        console.log(continent)
        // chỉ highlight khi KHÔNG phải là selected
        if (continent === selectedRef.current) return
        if (selectedRef.current !== countryName) {
          e.target.setStyle({
            fillColor: "#bc9247",
            fillOpacity: 1,
            color: "#7F7C6E",
            weight: 0.3,
            opacity: 1
          });
        }
      },
      mouseout: (e) => {
        if (continent === selectedRef.current) return
        // nếu không phải selected thì trả về style gốc
        if (selectedRef.current !== countryName) {
          e.target.setStyle(countryStyle(feature));
        }
      },
    });
  }


  return (
    <div className="relative">
      {/* Overlay */}
      <div className="overlay-top pointer-events-none absolute left-0 top-0 z-10 h-[7.625rem] w-full bg-[linear-gradient(180deg,#FFF_56.16%,rgba(255,255,255,0.00)100%)] xsm:hidden"></div>
      <div className="overlay-bottom pointer-events-none absolute bottom-0 left-0 z-10 h-[5.5rem] w-full bg-[linear-gradient(0,#FFF_56.16%,rgba(255,255,255,0.00)100%)] xsm:hidden"></div>
      <div className="overlay-left pointer-events-none absolute left-0 top-0 z-10 h-full w-[5.0625rem] bg-[linear-gradient(90deg,#FFF_56.16%,rgba(255,255,255,0.00)_100%)] xsm:hidden"></div>
      <div className="overlay-right absolute right-0 z-10 h-full w-[9.5rem] bg-[linear-gradient(-90deg,#FFF_56.16%,rgba(255,255,255,0.00)100%)] xsm:hidden"></div>

      {/* Custom button zoom */}
      <div className="absolute bottom-[2.69rem] left-[2.38rem] z-[11] flex flex-col space-y-[0.88rem] xsm:hidden">
        <button
          onClick={() => map && map.zoomIn()}
          className="flex size-[1.5rem] items-center justify-center rounded-[0.375rem] bg-[rgba(183,143,116,0.24)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1.875L6 10.125" stroke="#221910" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.125 6L1.875 6" stroke="#221910" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => map && map.zoomOut()}
          className="flex size-[1.5rem] items-center justify-center rounded-[0.375rem] bg-[rgba(183,143,116,0.24)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.875 6H10.125" stroke="#221910" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <div className="relative z-10 ml-[2.38rem] w-[45.2rem] p-4 max-sm:ml-0 max-sm:w-full overflow-hidden">
        <Swiper
          spaceBetween={56}
          slidesPerView="auto"
          freeMode={true}
          className="!overflow-visible"
        >
          {flagCountry.map((fc, i) => (
            fc.showNav &&
            <SwiperSlide key={i} className="!w-auto">
              <div
                onClick={() => {
                  setActive(fc.geoName)
                  setSelected(fc.geoName)
                }}
                className={`cursor-pointer shrink-0 relative flex items-center space-x-[0.5rem] max-sm:rounded-[0.375rem] max-sm:border max-sm:border-[rgba(0,0,0,0.10)] max-sm:p-[0.38rem] border-[#5C321E] ${active === fc.geoName ? "after:content-[''] after:block after:absolute after:bottom-[-0.5rem] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[linear-gradient(90deg,#95502f_50%,#f5c178)]" : ''}`}
              >
                <div className="relative flex size-[1.75rem] rounded-full bg-white 
                                shadow-[1px_2px_6px_0px_rgba(0,0,0,0.25)] backdrop-blur-[10px] 
                                max-sm:size-[1.35rem] max-sm:bg-white">
                  <img
                    className="absolute bottom-0 left-0 z-[1] h-full w-full rounded-full 
                              bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_58%,rgba(255,255,255,0.70)_97.11%)]"
                    src={fc.imgFlag}
                    alt={fc.name}
                  />
                </div>
                <span className="text-[0.875rem] font-medium uppercase leading-[1.5] 
                                tracking-[-0.00875rem] text-[rgb(51_51_51)] 
                                max-sm:text-[0.8125rem] max-sm:text-white">
                  {fc.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full h-full relative z-0">
        <MapContainer
          center={defaultCenter}
          zoom={defaultZoom}
          zoomDelta={0.5}
          zoomSnap={0.5}
          maxBoundsViscosity={1.0}
          scrollWheelZoom={false}
          style={{ height: "37.5rem", width: "100%", backgroundColor: "#fff" }}
          attributionControl={false}
          zoomControl={false}
        >

          {/* Lấy map instance */}
          <MapInstanceProvider setMap={setMap} />

          {/* Biên giới các quốc gia */}
          <GeoJSON
            data={countries}
            style={(feature) => countryStyle(feature, active)}
            onEachFeature={onEachCountry}
          />

          {/* Marker */}
          {flagCountry.map((fc, i) => (
            <ZoomableMarker
              key={i}
              fc={fc}
              selected={selected}
              setSelected={setSelected}
              setActive={setActive}
            />
          ))}

          {/* Tự động zoom khi click flag */}
          <FlyToMarker active={active} flagCountry={flagCountry} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;