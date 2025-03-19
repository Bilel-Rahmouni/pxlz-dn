import { motion } from 'framer-motion';
import { FaComments, FaPencilRuler, FaCode, FaSearchPlus, FaClipboardCheck, FaRocket } from 'react-icons/fa';
import NeubrutalistCard from './NeubrutalistCard';

const Services = () => {
  const timelineSteps = [
    {
      icon: FaComments,
      title: "Indledende Konsultation",
      description: "Vi starter med at forstå din vision, mål og krav gennem grundige diskussioner for at sikre perfekt tilpasning til dine behov.",
      delay: 0
    },
    {
      icon: FaPencilRuler,
      title: "Designfase",
      description: "Vores designteam skaber imponerende, brugercentrerede interfaces, der perfekt balancerer æstetik og funktionalitet.",
      delay: 0.2
    },
    {
      icon: FaCode,
      title: "Udvikling",
      description: "Vi bygger din hjemmeside eller applikation med banebrydende teknologier, der sikrer robuste, skalerbare og effektive løsninger.",
      delay: 0.4
    },
    {
      icon: FaSearchPlus,
      title: "SEO Optimering",
      description: "Vi implementerer omfattende SEO-strategier for at forbedre din synlighed og nå din målgruppe effektivt.",
      delay: 0.6
    },
    {
      icon: FaClipboardCheck,
      title: "Gennemgang & Testning",
      description: "Du får tre runder af revisioner for at sikre, at alt er præcis som du ønsker det. Vi foretager justeringer baseret på din feedback, indtil du er helt tilfreds.",
      delay: 0.8
    },
    {
      icon: FaRocket,
      title: "Lancering & Levering",
      description: "Vi deployer dit projekt og giver dig al nødvendig dokumentation og support for en problemfri overgang.",
      delay: 1
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
 
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-5xl md:text-7xl font-black mb-16"
            style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
          >
            Hvad Du Kan Forvente Af Os
          </motion.h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 h-[calc(100%-2rem)] w-[1px] bg-black transform -translate-x-1/2" />

            {/* Timeline Steps */}
            <div className="relative">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: step.delay }}
                    className={`flex items-center mb-8 ${
                      index % 2 === 0 ? 'justify-end' : 'flex-row-reverse justify-end'
                    }`}
                  >
                    {/* Content Box */}
                    <div className={`w-[calc(50%-2rem)] 
                      ${index % 2 === 0 ? 'text-right mr-2' : 'text-left ml-2'}`}>
                      <NeubrutalistCard className="p-6">
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                          <div className="rounded-full p-3   ">
                            <step.icon className="text-2xl text-black" />
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-gray-800 text-lg">{step.description}</p>
                      </NeubrutalistCard>
                    </div>

                    {/* Timeline Point with Number */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold border-4 border-white">
                          {index + 1}
                        </div>
                        <div className="absolute inset-0 w-8 h-8 rounded-full bg-black/30 animate-ping" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center"
          >
            <motion.a
              href="#contact"
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-black text-white font-bold text-lg border-4 border-black
               hover:bg-white hover:text-black transition-colors duration-300"
            >
              Kom I Gang
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 