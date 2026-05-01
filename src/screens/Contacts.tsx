import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../constants";
import SectionHeader from "../components/SectionHeader";

const contactReasons = [
  "Implantação ou melhoria de WMS/ERP",
  "Mapeamento de processos e requisitos",
  "Validação funcional e suporte a go-live",
  "Projetos web e soluções internas",
];

const socialIcon = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  email: FaEnvelope,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const name = formState.from_name.trim();
    const email = formState.reply_to.trim();
    const subject = formState.subject.trim();
    const messageText = formState.message.trim();

    const messageLines = [
      `Olá, me chamo ${name}.`,
      "",
      email ? `E-mail: ${email}` : "",
      subject ? `Assunto: ${subject}` : "",
      "",
      "Mensagem:",
      messageText,
      "",
      "Vim através do seu portfólio.",
    ].join("\n");

    return messageLines.replace(/\n{3,}/g, "\n\n").trim();
  };

  const openWhatsApp = () => {
    const name = formState.from_name.trim();
    const email = formState.reply_to.trim();
    const messageText = formState.message.trim();

    if (!name || !messageText) {
      alert("Por favor, preencha nome e mensagem.");
      return false;
    }

    if (email && !emailPattern.test(email)) {
      alert("Por favor, informe um e-mail válido.");
      return false;
    }

    const rawNumber = PERSONAL_INFO.whatsappNumber.replace(/\D/g, "");

    if (!rawNumber) {
      alert("Número de WhatsApp não configurado.");
      return false;
    }

    const phoneNumber = rawNumber.startsWith("55")
      ? rawNumber
      : rawNumber.length === 11
        ? `55${rawNumber}`
        : rawNumber;

    if (!/^\d+$/.test(phoneNumber)) {
      alert("Número de WhatsApp inválido.");
      return false;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      buildContactText()
    )}`;

    window.open(whatsappUrl, "_blank");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!openWhatsApp()) {
      return;
    }

    setFormState({ from_name: "", reply_to: "", subject: "", message: "" });
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section id="contacts" className="page-section relative overflow-hidden">
      <div className="container-custom relative z-10 w-full max-w-6xl">
        <SectionHeader
          label="CONTATO"
          title={
            <>
              Vamos conversar sobre <span className="gradient-text">processos</span>
            </>
          }
          description="Me envie uma mensagem com o contexto do seu projeto, operação ou sistema. O formulário abre uma conversa no WhatsApp com tudo organizado."
          align="center"
        />

        <motion.div
          className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.92fr_minmax(0,1.08fr)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.14 }}
        >
          <motion.div className="grid h-full gap-6" variants={itemVariants}>
            <article className="group flex h-full min-h-[25rem] flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-transparent p-6 shadow-bento backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.04] md:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                  <FaWhatsapp className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-tertiary">
                    canal principal
                  </p>
                  <h3 className="mt-2 font-title text-2xl font-bold leading-tight text-white">
                    Conte o desafio. Eu retorno com clareza.
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-text-secondary md:text-[15px]">
                Pode ser uma implantação, melhoria de processo, necessidade de
                documentação, validação funcional ou uma solução web. Quanto
                mais contexto, melhor consigo entender o próximo passo.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {contactReasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex min-h-[4rem] items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/35 p-4 text-sm leading-snug text-text-secondary transition-colors group-hover:border-white/15"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-bento backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.04] md:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-tertiary">
                    canais
                  </p>
                  <h3 className="mt-2 font-title text-xl font-bold text-white">
                    Onde me encontrar
                  </h3>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = socialIcon[link.id as keyof typeof socialIcon];
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social flex min-h-[4.75rem] items-center justify-between gap-3 rounded-2xl border border-white/10 bg-zinc-950/35 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.04]"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-200">
                          {Icon && <Icon className="h-4 w-4" />}
                        </span>
                        <span className="truncate text-sm font-semibold text-white">
                          {link.name}
                        </span>
                      </span>
                      <FaArrowRight className="h-3.5 w-3.5 shrink-0 text-text-tertiary transition-transform group-hover/social:translate-x-0.5 group-hover/social:text-cyan-200" />
                    </a>
                  );
                })}
              </div>
            </article>
          </motion.div>

          <motion.div className="h-full" variants={itemVariants}>
            <article className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] shadow-bento backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.04]">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex h-full flex-col p-6 md:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-tertiary">
                      mensagem
                    </p>
                    <h3 className="mt-2 font-title text-2xl font-bold text-white">
                      Enviar pelo WhatsApp
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      Preencha os campos e a conversa abre com a mensagem pronta.
                    </p>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-green-400/20 bg-green-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                    <FaWhatsapp />
                    WhatsApp
                  </div>
                </div>

                <div className="mt-7 flex flex-1 flex-col space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-zinc-300"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        value={formState.from_name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-4 text-white outline-none transition-colors placeholder:text-text-tertiary focus:border-accent/40 focus:bg-white/[0.04]"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-zinc-300"
                      >
                        Email <span className="text-text-tertiary">(opcional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="reply_to"
                        value={formState.reply_to}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-4 text-white outline-none transition-colors placeholder:text-text-tertiary focus:border-accent/40 focus:bg-white/[0.04]"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Assunto <span className="text-text-tertiary">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-4 text-white outline-none transition-colors placeholder:text-text-tertiary focus:border-accent/40 focus:bg-white/[0.04]"
                      placeholder="Ex: implantação WMS, processo, projeto web"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      rows={6}
                      className="min-h-[11rem] w-full resize-none rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-4 text-white outline-none transition-colors placeholder:text-text-tertiary focus:border-accent/40 focus:bg-white/[0.04]"
                      placeholder="Descreva o contexto, objetivo e prazo, se houver."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-auto inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4 text-green-200" />
                    Enviar mensagem
                    <FaArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            </article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
