import { ReactNode } from "react";

interface CardServicesProps {
  title: string;
  description: string;
  icon: ReactNode;
  features?: string[];
}

const CardServices = ({
  title,
  description,
  icon,
  features,
}: CardServicesProps) => {
  return (
    <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent h-full">
      <div className="relative h-full rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-7 md:p-8 overflow-hidden transition-colors duration-300 group-hover:bg-white/[0.04] group-hover:border-accent/30">
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

        <div className="relative flex flex-col h-full">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 text-accent">
              {icon}
            </div>
          </div>

          <h3 className="mt-6 text-xl font-title font-bold text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-grow">
            {description}
          </p>

          {features && features.length > 0 && (
            <ul className="mt-6 pt-6 border-t border-white/10 space-y-3">
              {features.slice(0, 4).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardServices;
