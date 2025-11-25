"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

// Counter Component
const Counter = ({ value, suffix = "", duration = 2000 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? value : 0 },
    delay: 200,
    config: { duration },
  });

  return (
    <animated.span ref={ref} className="font-bold">
      {number.to((n) => {
        if (suffix === "+")
          return `${Math.round(n).toLocaleString()}${suffix}`;
        return `${Math.round(n).toLocaleString()}${suffix}`;
      })}
    </animated.span>
  );
};

const TwoByTwoStatsGrid = () => {
  const stats = [
    {
      value: 750,
      suffix: "M+",
      title: "Media Spend",
      description:
        "Successfully managed, ensuring every dollar works harder to generate maximum ROI.",
      color: "blue",
    },
    {
      value: 50,
      suffix: "+",
      title: "Customers",
      description:
        "Delivering custom media strategies that drive growth and measurable success across industries.",
      color: "green",
    },
    {
      value: 8,
      suffix: "+",
      title: "Certifications",
      description:
        "Certified by Google, Meta, and Microsoft, our team brings top-tier knowledge and best practices to every campaign.",
      color: "purple",
    },
    {
      value: 4,
      suffix: "",
      title: "Client Transactions",
      description:
        "Our clients have gone on to successful exits, including acquisitions and IPOs, driven by strong marketing performance.",
      color: "orange",
    },
  ];

  return (
    
      <div className="">
        {/* First Row - 2 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-6"
        >
          {/* Media Spend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white  p-4 md:p-8 transition-all duration-300 relative"
          >
            {/* Main vertical line container */}
            <div className="flex">
              {/* Vertical line */}
              <div className="w-0.5 bg-gray-300 mr-6 mt-1"></div>

              <div className="flex-1">
                {/* Title at top */}
                <h4 className=" text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-8 text-black ">
                 Years Experience
                </h4>

                {/* Much larger Number */}
                <h3 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black">
                  <Counter value={20} suffix="+" />
                </h3>

                {/* Paragraph content */}
              </div>
            </div>
          </motion.div>

          {/* Customers */}
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-4 md:p-8 transition-all duration-300 relative"
          >
            {/* Main vertical line container */}
            <div className="flex">
              {/* Vertical line */}
              <div className="w-0.5 bg-gray-300 mr-6 mt-1"></div>

              <div className="flex-1">
                {/* Title at top */}
                <h4 className=" text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-8 text-black ">
                Countries
                </h4>

                {/* Much larger Number */}
                <h3 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black">
                  <Counter value={4}  />
                </h3>

                {/* Paragraph content */}
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Second Row - 2 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 gap-6"
        >
          {/* Certifications */}
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-4 md:p-8 transition-all duration-300 relative"
          >
            {/* Main vertical line container */}
            <div className="flex">
              {/* Vertical line */}
              <div className="w-0.5 bg-gray-300 mr-6 mt-1"></div>

              <div className="flex-1">
                {/* Title at top */}
                <h4 className=" text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-8 text-black ">
                  Business Verticals
                </h4>

                {/* Much larger Number */}
                <h3 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black">
                  <Counter value={3}  />
                </h3>

                {/* Paragraph content */}
              </div>
            </div>
          </motion.div>


            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-4 md:p-8 transition-all duration-300 relative"
          >
            {/* Main vertical line container */}
            <div className="flex">
              {/* Vertical line */}
              <div className="w-0.5 bg-gray-300 mr-6 mt-1"></div>

              <div className="flex-1">
                {/* Title at top */}
                <h4 className=" text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-8 text-black ">
                Business Verticals
                </h4>

                {/* Much larger Number */}
                <h3 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black">
                  <Counter value={300} suffix="+" />
                </h3>

                {/* Paragraph content */}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
  
  );
};

export default TwoByTwoStatsGrid;
