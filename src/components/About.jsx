import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Zap, Users, Clock, Shield, ChevronRight, Star, Award } from "lucide-react";
import { assets } from '../assets/assets'

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  
  const services = [
    {
      title: "Client Centricity",
      description: "We prioritize your needs and work tirelessly to provide solutions that support your unique goals.",
      icon: <Zap className="w-5 h-5" />,
      color: "bg-pink-400"
    },
    {
      title: "Innovation",
      description: "We continually evolve, embracing new tools and methodologies to ensure that our services remain at the forefront of the industry.",
      icon: <ChevronRight className="w-5 h-5" />,
      color: "bg-pink-400"
    },
    {
      title: "Excellence",
      description: "We are committed to delivering services that meet the highest standards, ensuring precision and reliability in every task we undertake.",
      icon: <Star className="w-5 h-5" />,
      color: "bg-pink-400"
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-pink-100 py-24 px-6"
      id="about"
    >
      {/* Luxury decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle diamond pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMTAgMTBoNDB2NDBIMTB6IiBzdHJva2U9IiNGRkMwODgiIHN0cm9rZS13aWR0aD0iLjUiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik0zMCAxMHYzMCIgc3Ryb2tlPSIjRkZDMDg4IiBzdHJva2Utd2lkdGg9Ii41IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTAgMzBoNDAiIHN0cm9rZT0iI0ZGQzA4OCIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')"
        }}></div>
        
        {/* Floating gold accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Luxe Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
        
          
          <motion.p variants={fadeIn} className=" uppercase tracking-widest font-secondary font-bold text-3xl text-black mb-3">
          About Luxeva&Co.
          </motion.p>
          
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-primary font-medium text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-500">Elevated Support</span> for Visionaries
          </motion.h2>
          
          <motion.p variants={fadeIn} className="max-w-3xl mx-auto text-lg text-gray-900 font-quaternary leading-relaxed">
            At LuxeVA&Co., we redefine virtual assistance by combining operational excellence with 
            the personal touch of a luxury concierge. Our bespoke solutions empower visionary leaders 
            to focus on what truly matters.
          </motion.p>
        </motion.div>

        

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-[4/5] rounded-t-full rounded-br-full overflow-hidden shadow-xl">
  <img
    src= {assets.image3} // Replace with your actual image path
    alt="Herma Jepkoech, Founder & Lead Virtual Assistant"
    className="w-full h-full object-cover object-center"
    loading="lazy"
  />
  {/* Optional overlay with name/title - remove if not needed */}
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
    <p className="font-primary text-lg">Herma Jepkoech</p>
    <p className="text-sm opacity-90 font-quaternary">Lead Virtual Assistant</p>
  </div>

              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-pink-200 opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-rose-200 opacity-20 blur-xl"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeIn} className="text-3xl font-secondary font-medium text-gray-900 mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-400">Signature</span> Services
            </motion.h3>
            

            <div className="space-y-6">
  {services.map((service, index) => (
    <motion.div 
      key={index}
      variants={fadeIn}
      className="group relative overflow-hidden"
    >
      {/* Blurred background element */}
      <div className={`absolute inset-0 backdrop-blur-md ${service.color.replace('bg-gradient-to-br', 'bg')} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
      
      {/* Card content */}
      <div className="relative z-10 bg-pink-100 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 backdrop-blur-sm hover:bg-white/90">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full text-white ${service.color} shadow-md flex-shrink-0`}>
            {service.icon}
          </div>
          
          <div>
            <h4 className="text-xl font-medium text-black font-secondary mb-2">{service.title}</h4>
            <p className="text-gray-600 font-quaternary">{service.description}</p>
          </div>
        </div>
      </div>
      
      {/* Floating accent circle (now more subtle) */}
      <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full ${service.color.replace('bg-gradient-to-br', '')} opacity-10 group-hover:opacity-15 transition-opacity duration-500 blur-lg`}></div>
    </motion.div>
  ))}
</div>
          </motion.div>
        </div>

        {/* Founder's Note */}
        <motion.div
          className="mt-24 bg-pink-50 rounded-2xl p-8 md:p-12 shadow-sm border border-pink-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-pink-200 opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-rose-200 opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-pink-500 flex items-center justify-center text-white mr-4 shadow-md">
                <span className="text-xl font-serif">HJ</span>
              </div>
              <div>
                <h4 className="font-secondary font-medium text-gray-900">Herma Jepkoech</h4>
                <p className="text-sm text-pink-600">VA Lead,LuxeVA & Co.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-black font-quaternary leading-relaxed">
              Herma's journey from navigating the complexities of administrative support to establishing LuxeVA & Co. was driven by a singular vision: to offer bespoke, high-caliber assistance that aligns seamlessly with your professional aspirations
              </p>
              
              <p className="text-black font-quaternary leading-relaxed">
              Our mission is to empower you to achieve greater productivity and work-life harmony by entrusting us with your administrative responsibilities. We achieve this by integrating seamlessly into your workflow, anticipating your needs, and delivering results that exceed expectations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;