
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {
  const centers = useLoaderData();
  const mapRef=useRef()
  const handleSearch=e=>{
    e.preventDefault()
    const location=e.target.location.value
    const district=centers.find(d=>d.district.toLowerCase().includes(location.toLowerCase()))
    if(district){
        const coord=[district.latitude,district.longitude]
        mapRef.current.flyTo(coord, 15)
        console.log(district, coord);
    }
  }
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold">We are available in 64 districts</h1>
      </div>
      {/* search section */}
      <div >
       <form className="flex items-center gap-2" onSubmit={handleSearch}>
         <label className="input ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" name="location" required placeholder="Search" />
        </label>
        <button className="btnsBg rounded-full">Search</button>
       </form>
      </div>
      {/* map */}

      <div className="space-y-6 w-full ">
        <h1 className="text">We deliver almost all over Bangladesh</h1>
        <div className=" h-[600px] w-full">
          <MapContainer
            center={[23.685, 90.356]}
            zoom={9}
            scrollWheelZoom={false}
            className="h-[600px]"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {centers.map((center) => (
              <Marker position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong>{center.district}</strong> <br /> Service Area:{" "}
                  {center.covered_area.join(', ')}.
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
