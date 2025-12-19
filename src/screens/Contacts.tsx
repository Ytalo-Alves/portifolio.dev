import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../constants";
import ProjectsMarquee from "../components/ProjectsMarquee";
import ScreenBackground from "../components/ScreenBackground";

export default function Contacts() {
  const [formState, setFormState] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const buildContactText = () => {
    return [
      "*NOVO CONTATO — PORTFÓLIO*",
      "",
      `*Nome:* ${formState.from_name}`,
      `*Email:* ${formState.reply_to}`,
      `*Assunto:* ${formState.subject}`,
      "",
      "*Mensagem:*",
      formState.message,
      "",
    ].join("\n");
  };

  const openWhatsApp = () => {
    if (
      !formState.from_name ||
      !formState.reply_to ||
      !formState.subject ||
      !formState.message
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const encodedMessage = encodeURIComponent(buildContactText());
    const rawNumber = PERSONAL_INFO.whatsappNumber.replace(/\D/g, "");
    const phoneNumber = rawNumber.startsWith("55")
      ? rawNumber
      : rawNumber.length === 11
        ? `55${rawNumber}`
        : rawNumber;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    openWhatsApp();
    setFormState({ from_name: "", reply_to: "", subject: "", message: "" });
  };

  return (
    <section
      id="contacts"
      className="section min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <ScreenBackground />

      <div className="container-custom relative z-10 w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="order-2 lg:order-1 flex flex-col text-center lg:text-left animate-fadeIn">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 w-fit mx-auto lg:mx-0">
                <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
                <span className="text-text-secondary font-mono text-xs tracking-[0.3em]">
                  CONTATO
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-title font-bold leading-[1.05]">
                Bora tirar sua ideia do <span className="gradient-text">modo</span>{" "}
                <span className="gradient-text">rascunho</span>
              </h2>

              <p className="text-text-secondary text-lg max-w-xl mx-auto lg:mx-0">
                Me conte o que você quer construir. Eu respondo pelo WhatsApp e
                a mensagem já chega pronta, com tudo organizado.
              </p>
            </div>

            <ProjectsMarquee />

            <div className="mt-8 lg:mt-10">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {SOCIAL_LINKS.filter((link) => link.id !== "email").map(
                  (link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      aria-label={link.name}
                    >
                      <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/40 via-blue-500/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.06]">
                        {link.id === "github" && (
                          <FaGithub
                            size={20}
                            className="text-white/90 group-hover:text-accent transition-colors"
                          />
                        )}
                        {link.id === "linkedin" && (
                          <FaLinkedin
                            size={20}
                            className="text-white/90 group-hover:text-blue-400 transition-colors"
                          />
                        )}
                        {link.id === "instagram" && (
                          <FaInstagram
                            size={20}
                            className="text-white/90 group-hover:text-pink-400 transition-colors"
                          />
                        )}
                      </span>
                    </a>
                  )
                )}
              </div>

              <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-xs text-text-tertiary font-mono tracking-wider">
                <span className="inline-block h-1 w-1 rounded-full bg-white/30" />
                <span>Resposta rápida</span>
                <span className="inline-block h-1 w-1 rounded-full bg-white/30" />
                <span>WhatsApp</span>
                <span className="inline-block h-1 w-1 rounded-full bg-white/30" />
                <span>Sem spam</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 lg:order-2 animate-scaleIn w-full max-w-xl mx-auto lg:mx-0">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent">
              <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                <form onSubmit={handleSubmit} className="relative p-7 md:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Enviar mensagem
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        Abre em uma nova aba com a mensagem pronta.
                      </p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 rounded-2xl px-3 py-2 bg-white/[0.03] border border-white/10">
                      <FaWhatsapp className="text-green-400" />
                      <span className="text-xs text-text-secondary font-mono tracking-wider">
                        WHATSAPP
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="from_name"
                          value={formState.from_name}
                          onChange={handleChange}
                          required
                          placeholder=" "
                          className="peer w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-4 text-white placeholder-transparent outline-none transition-colors focus:border-accent/40 focus:bg-white/[0.05]"
                        />
                        <label
                          htmlFor="name"
                          className="pointer-events-none absolute left-4 top-4 text-sm text-white/70 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent bg-primary-light/70 px-2 rounded-md"
                        >
                          Nome
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="reply_to"
                          value={formState.reply_to}
                          onChange={handleChange}
                          required
                          placeholder=" "
                          className="peer w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-4 text-white placeholder-transparent outline-none transition-colors focus:border-accent/40 focus:bg-white/[0.05]"
                        />
                        <label
                          htmlFor="email"
                          className="pointer-events-none absolute left-4 top-4 text-sm text-white/70 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent bg-primary-light/70 px-2 rounded-md"
                        >
                          Email
                        </label>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        className="peer w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-4 text-white placeholder-transparent outline-none transition-colors focus:border-accent/40 focus:bg-white/[0.05]"
                      />
                    <label
                      htmlFor="subject"
                      className="pointer-events-none absolute left-4 top-4 text-sm text-white/70 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent bg-primary-light/70 px-2 rounded-md"
                    >
                      Assunto
                    </label>
                  </div>

                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder=" "
                        className="peer w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-4 text-white placeholder-transparent outline-none transition-colors focus:border-accent/40 focus:bg-white/[0.05] resize-none"
                      />
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute left-4 top-4 text-sm text-white/70 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/60 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent bg-primary-light/70 px-2 rounded-md"
                    >
                      Mensagem
                    </label>
                  </div>

                    <button type="submit" className="group w-full">
                      <span className="relative block rounded-2xl p-[1px] bg-gradient-to-r from-accent/70 via-blue-500/30 to-transparent">
                        <span className="flex items-center justify-center gap-3 rounded-2xl bg-primary-light/60 px-6 py-4 font-semibold text-white transition-all duration-300 group-hover:bg-primary-light/70 group-hover:shadow-glow">
                          <FaWhatsapp className="text-green-400" />
                          <span>Enviar no WhatsApp</span>
                          <span className="hidden sm:inline text-white/40 font-mono text-xs tracking-widest">
                            ENTER
                          </span>
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
