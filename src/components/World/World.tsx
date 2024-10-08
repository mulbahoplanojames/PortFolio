import { motion } from "framer-motion";
import { World } from "../../components/ui/globe"; // Adjusted the import to a relative path

export const GlobeDemo = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    // Additional arc data...
  ];

  return (
    <div className="flex flex-row items-center justify-center py-20 h-[95dvh] md:h-auto bg-background relative w-full">
      <div className="max-w-7xl mx-auto w-full relative h-[25rem]  md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-white">
            Connect with me at any time and Location
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-text max-w-md mt-2 mx-auto">
            Explore and interact with this globe—enjoy the experience!
          </p>
        </motion.div>
        {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" /> */}
        <div className="absolute w-full md:-bottom-20 -bottom-17 inset-x-0 h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};
