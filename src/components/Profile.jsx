import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";

const content = {
  en: {
    name: "Mouawia Youmbai",
    role: "Full-Stack Developer",
    heroBio:
      "I build immersive, resilient digital products end-to-end—from expressive interfaces in React to robust backends in Laravel and Node.js—while weaving AI copilots and automation directly into user journeys.",
    highlights: [
      {
        title: "Product Engineering",
        description:
          "Designing resilient architectures, crafting clean APIs, and shipping polished user journeys.",
      },
      {
        title: "Scale & Performance",
        description:
          "Optimizing for speed, monitoring health, and automating workflows that keep teams moving fast.",
      },
      {
        title: "AI-Driven Experiences",
        description:
          "Embedding LLMs, vector search, and intelligent automation into products to unlock smarter workflows.",
      },
      {
        title: "Team Enablement",
        description:
          "Mentoring engineers, improving delivery pipelines, and bringing alignment across disciplines.",
      },
    ],
    toolkitTitle: "Technical Toolkit",
    toolkitDescription:
      "A pragmatic mix of modern frameworks and battle-hardened languages that empower me to deliver fast, secure, and engaging products—across web apps, services, and interactive interfaces.",
    skills: [
      "Laravel",
      "React",
      "Node.js",
      "Spring Boot",
      "PHP",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "AI Integration",
      "GitHub",
    ],
    locationLabel: "Based in",
    locationValue: "Oran, Algeria",
    remoteTags: ["Remote Friendly", "Open To Build"],
    ctaTitle: "Let’s build something memorable.",
    ctaDescription:
      "From concept validation to production launch, I partner with teams to deliver experiences that feel fast, look refined, and scale responsibly. If you have a product to launch or a platform to level up, I’m ready to jump in.",
    ctaButton: "Connect With Me",
    toggleLabel: "العربية",
    toggleAria: "Switch to Arabic",
    profileAlt: "Portrait of Mouawia Youmbai",
  },
  ar: {
    name: "معاوية يومباي",
    role: "مطور برمجيات متكامل",
    heroBio:
      "أبني منتجات رقمية متكاملة وغنية؛ من واجهات React المعبرة إلى الخلفيات المتينة في Laravel وNode.js، مع دمج الذكاء الاصطناعي والمساعدات الذكية داخل تدفقات العمل لإثراء التجربة.",
    highlights: [
      {
        title: "هندسة المنتجات | Product Engineering",
        description: "أصمم بنى مرنة، أبني واجهات برمجية نظيفة، وأطلق رحلات مستخدم مصقولة تلائم الرؤية.",
      },
      {
        title: "الأداء والقابلية للتوسع | Scale & Performance",
        description: "أراقب السرعة والصحة باستمرار، وأؤتمت المسارات لتظل المنظومة متزنة عند ازدياد الضغط.",
      },
      {
        title: "تجارب مدعومة بالذكاء الاصطناعي | AI-Driven Experiences",
        description: "أدمج نماذج اللغة والذكاء الاصطناعي في الواجهات والخدمات لابتكار تدفقات عمل ذكية وتجارب مخصصة.",
      },
      {
        title: "تمكين الفرق | Team Enablement",
        description: "أرشد المطورين، أطور خطوط التسليم، وأخلق انسجاماً بين فرق التصميم والهندسة والإدارة.",
      },
    ],
    toolkitTitle: "صندوق الأدوات التقني",
    toolkitDescription:
      "مزيج عملي من الأطر، قواعد البيانات، وأدوات النشر لإنجاز مشاريع إنتاج حديثة بثقة.",
    skills: [
      "Laravel",
      "React",
      "Node.js",
      "Spring Boot",
      "PHP",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "تكامل الذكاء الاصطناعي | AI Integration",
      "GitHub",
    ],
    locationLabel: "الموقع",
    locationValue: "وهران، الجزائر",
    remoteTags: ["مرن للعمل عن بعد", "جاهز لبناء الحلول"],
    ctaTitle: "لنصنع شيئًا لا يُنسى.",
    ctaDescription:
      "من اختبار الفكرة إلى إطلاقها، أتعاون مع الفرق لتقديم تجارب سريعة، محسّنة، وقابلة للتوسع.",
    ctaButton: "تواصل معي",
    toggleLabel: "English",
    toggleAria: "التبديل إلى الإنجليزية",
    profileAlt: "صورة معاوية يومباي",
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const staggeredReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const Profile = () => {
  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";
  const copy = content[language];

  const toggleLanguage = () => setLanguage(isArabic ? "en" : "ar");

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={`relative min-h-screen overflow-hidden bg-brand-dark text-white ${isArabic ? "font-arabic" : ""}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-[#05060f] via-brand-dark to-[#050812]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-brand-purple/35 blur-[140px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -20, 40, 0],
          rotate: [0, 5, -8, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-120px] h-[28rem] w-[28rem] rounded-full bg-brand-blue/30 blur-[160px]"
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 20, -30, 0],
          rotate: [0, -6, 10, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <motion.nav
        className={`relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10 ${
          isArabic ? "flex-row-reverse" : ""
        }`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span
          className={`text-lg font-semibold ${isArabic ? "text-white" : "uppercase tracking-[0.3em] text-white/70"}`}
        >
          {copy.name}
        </span>
        <div className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse" : ""}`}>
          <span className="hidden text-sm font-medium text-white/40 md:inline">{copy.role}</span>
          <motion.button
            type="button"
            onClick={toggleLanguage}
            className={`rounded-full border border-white/15 px-4 py-1 text-xs font-semibold text-white/80 backdrop-blur transition duration-300 hover:bg-white/10 ${
              isArabic ? "" : "uppercase tracking-[0.3em]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            aria-label={copy.toggleAria}
          >
            {isArabic ? "EN" : "AR"}
          </motion.button>
        </div>
      </motion.nav>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 md:px-10 md:pb-28">
        <motion.section
          className={`flex flex-col items-center gap-12 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl ${
            isArabic ? "md:flex-row-reverse" : "md:flex-row"
          } md:items-stretch md:gap-16`}
          variants={fadeSlideUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className={`flex-1 space-y-8 px-6 py-12 md:px-12 ${isArabic ? "text-center md:text-right" : "text-center md:text-left"}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            >
              <span
                className={`inline-flex items-center rounded-full bg-brand-purple/20 px-4 py-1 text-xs font-semibold text-brand-purple/90 ${
                  isArabic ? "" : "uppercase tracking-[0.4em]"
                }`}
              >
                {copy.role}
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {copy.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl md:max-w-none">
                {copy.heroBio}
              </p>
            </motion.div>

            <motion.div
              key={language}
              className={`grid gap-4 sm:grid-cols-2 ${isArabic ? "text-right" : "text-left"}`}
              initial="hidden"
              animate="visible"
              variants={staggeredReveal}
            >
              {copy.highlights.map((highlight) => (
                <motion.div
                  key={highlight.title}
                  className={`group rounded-2xl border border-white/10 bg-black/20 p-6 shadow-lg shadow-brand-purple/10 transition duration-300 hover:border-brand-purple/40 hover:bg-black/40 ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                  variants={fadeSlideUp}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                >
                  <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex-1 self-stretch overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/30 via-brand-light/30 to-black/60 p-6 md:p-8"
            initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-white/5"
              style={{ mixBlendMode: "overlay" }}
              animate={{ opacity: [0.2, 0.45, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-6 text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/20 shadow-2xl shadow-brand-blue/30 lg:h-56 lg:w-56">
                <img src={profileImage} alt={copy.profileAlt} className="h-full w-full object-cover" />
              </div>
              <div>
                <p
                  className={`text-sm text-white/50 ${isArabic ? "font-medium" : "uppercase tracking-[0.5em]"}`}
                >
                  {copy.locationLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{copy.locationValue}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/60">
                {copy.remoteTags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border border-white/20 px-4 py-1 ${
                      isArabic ? "text-sm font-medium" : "text-xs font-semibold uppercase tracking-[0.3em]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl md:p-12"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className={`flex flex-col gap-10 lg:items-start ${isArabic ? "lg:flex-row-reverse lg:text-right" : "lg:flex-row"}`}
          >
            <motion.div
              className="lg:w-2/5"
              variants={fadeSlideUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.toolkitTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-white/60">{copy.toolkitDescription}</p>
            </motion.div>
            <motion.ul
              key={`skills-${language}`}
              className={`grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 ${isArabic ? "text-right" : ""}`}
              initial="hidden"
              animate="visible"
              variants={staggeredReveal}
            >
              {copy.skills.map((skill) => (
                <motion.li
                  key={skill}
                  className={`group rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-lg font-medium text-white/80 transition duration-300 hover:border-brand-blue/50 hover:bg-brand-blue/10 hover:text-white ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                  variants={fadeSlideUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.section>

        <motion.section
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-brand-light/40 via-brand-dark/40 to-brand-blue/20 p-10 text-center shadow-lg shadow-brand-blue/20 transition duration-500 hover:shadow-brand-purple/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlideUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-40"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.ctaTitle}</h2>
            <p className={`${isArabic ? "text-base leading-loose" : "text-base leading-relaxed"} text-white/70 sm:text-lg`}>
              {copy.ctaDescription}
            </p>
            <motion.a
              href="mailto:mouawia.youmbai@souftech.com"
              className={`inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition duration-300 hover:bg-brand-purple ${
                isArabic ? "" : "uppercase tracking-[0.35em]"
              }`}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {copy.ctaButton}
            </motion.a>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Profile;
