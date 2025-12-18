import { FaCode, FaServer, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";
import CardServices from "../components/CardServices";
import { SERVICES } from "../constants";
import ScreenBackground from "../components/ScreenBackground";
import SectionHeader from "../components/SectionHeader";

const iconMapping: Record<string, React.ReactNode> = {
  frontend: <FaCode size={26} />,
  backend: <FaServer size={26} />,
  devops: <FaCloud size={26} />,
};

export default function Services() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="services"
      className="section min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <ScreenBackground />

      <div className="container-custom relative z-10 w-full py-16 md:py-24">
        <SectionHeader
          label="SERVIÇOS"
          title={
            <>
              Soluções <span className="gradient-text">Especializadas</span>
            </>
          }
          description="Desenvolvimento completo para impulsionar o seu negócio."
          align="center"
        />

        {/* Services Grid */}
        <div className="mt-12 relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent">
          <div className="rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-4 md:p-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {SERVICES.map((service) => (
                <motion.div
                  key={service.id}
                  className="h-full"
                  variants={itemVariants}
                >
                  <CardServices
                    title={service.title}
                    description={service.description}
                    icon={iconMapping[service.id] || <FaCode size={26} />}
                    features={service.features}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
