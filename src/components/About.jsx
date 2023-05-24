import React, { useEffect, useRef} from "react";
import { motion, useAnimation } from "framer-motion";
import { hospital, img2,Cofounder,founder } from "../assets";

const About = () => {
  
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const { top } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) { // Adjust the threshold as needed
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
   
    exit={{ opacity: 0 }}
      className="about"
    >
      <h1 className=" text-center py-36 text-4xl md:text-5xl md:font-semibold">
        {" "}
        About Us{" "}
      </h1>

      <div className="-mt-20">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-8 md:mb-0 mt-4">
              <img
                className="rounded-lg shadow-md mx-auto"
                src={img2}
                alt="Company"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Insipiration</h2>
              <p className="text-gray-800">
                The challenges posed by the COVID-19 pandemic have served as a
                profound inspiration for our startup. Witnessing the critical
                need for improved hygiene practices in hospitals, coupled with
                the shortage of available personnel, we set out to revolutionize
                cleaning and disinfection. Drawing from these unprecedented
                times, we have developed non-contact remote-operated robots that
                can efficiently and effectively sanitize healthcare facilities.
                These state-of-the-art robots utilize cutting-edge technology,
                enabling them to navigate autonomously while ensuring optimal
                cleanliness and disinfection. By minimizing human contact and
                incorporating advanced sensors, our robots not only enhance
                safety but also provide an efficient and reliable solution to
                combatting infections. Our inspiration stems from the urgent
                need to address hygiene issues and adapt to the challenges we
                have faced, as we strive to create a safer and healthier
                environment for all.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4 ml-10">Our Goal</h2>
              <p className="text-gray-800 ml-10">
                With a strong focus on healthcare and educational institutions,
                we are dedicated to combating hospital-acquired infections
                (HAIs) and promoting a safe and hygienic environment. Leveraging
                state-of-the-art disinfection systems and cutting-edge
                innovations, our startup offers advanced solutions that
                effectively eliminate harmful pathogens and reduce the risk of
                HAIs in hospitals and schools. Our team of experts has developed
                a range of high-performance disinfection devices and protocols
                that not only meet but exceed industry standards. By integrating
                intelligent automation, our technology ensures thorough and
                efficient disinfection processes, targeting even the most
                hard-to-reach areas. With our commitment to infection
                prevention, we aim to create healthier environments, instilling
                confidence in patients, staff, and students alike
              </p>
            </div>
            <div className="mb-8 md:mb-0 mt-10 ">
              <img
                className="rounded-lg shadow-md mx-auto"
                src={hospital}
                alt="Company"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 ">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
              Our Team
            </h2>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={founder}
                alt="man"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl">Arijit Majumdar</h4>
                <span className="block text-sm text-gray-700">Founder And Director</span>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={Cofounder}
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl">Brajgopal Chakraborthy</h4>
                <span className="block text-sm text-gray-700">Co-Founder And Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
