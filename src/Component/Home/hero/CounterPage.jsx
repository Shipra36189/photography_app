import { FaCameraRetro } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import CounterImage from '../../../assets/images/wt14.jpeg'
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const counters = [
  { id: "users", label: "Wedding Shoot", icon: <FaCameraRetro size={70} className="text-amber-300" /> ,  default: 1000 },
  { id: "projects", label: "Satisfied Clients", icon: <FaRegSmile size={70} className="text-amber-300" />,  default: 500 },
  { id: "professional", label: "Professionals", icon: <IoIosPeople size={70} className="text-amber-300" />, default: 100 },
  { id: "clients", label: "Different Setups", icon: <FaHome size={70} className="text-amber-300" />,  default: 75 },
];

const CounterPage = () => {

  const [counts, setCounts] = useState({});
  const [ref, inView] = useInView({ triggerOnce: true });
  const [startAnimation, setStartAnimation] = useState(false);

  
  useEffect(() => {
    const storedCounts = {};
    counters.forEach(({ id, default: defaultValue }) => {
      const stored = parseInt(localStorage.getItem(id), 10) || defaultValue;
      const updated = stored + 1;
      localStorage.setItem(id, updated);
      storedCounts[id] = updated;
    });
    setCounts(storedCounts);
  }, []);

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (

<div className="py-16 bg-white text-gray-800 bg-cover bg-fixed opacity-90" style={{backgroundImage: `url(${CounterImage})`}} >
<div className="max-w-6xl mx-auto px-4 text-center" ref={ref}>
  {/* <h2 className="text-4xl font-bold mb-10">Our Stats</h2> */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {counters.map(({ id, label ,icon }) => (
      <CounterBox
        key={id}
        value={counts[id] || 0}
        label={label}
        icon={icon}
        animate={startAnimation}
      />
    ))}
  </div>
</div>
</div>
  )
}


const CounterBox = ({ value, label, icon, animate }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animate) {
      let start = 0;
      const duration = 1000; // 1 second
      const stepTime = 20;
      const totalSteps = Math.ceil(duration / stepTime);
      const increment = value / totalSteps;

      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(interval);
        }
        setDisplayValue(Math.floor(start));
      }, stepTime);
    }
  }, [animate, value]);

  return (
    <div className="text-center">
      <div className=" mb-2 flex justify-center">
        {icon}
      </div>
      <p className="text-5xl font-extrabold text-blue-600">{displayValue}+</p>
      <p className="mt-2 text-[28px] font-medium">{label}</p>
    </div>
  );
};

export default CounterPage
