import React from "react";
import { motion } from "motion/react";
import main from "../src/assets/main.jpg";
import t1 from "../src/assets/t1.jpg";
import t2 from "../src/assets/12.jpg";
import t3 from "../src/assets/13.jpg";
import t4 from "../src/assets/14.jpg";

const teamMembers = [
{
name: "Creative Director",
role: "Creative Vision",
image: t1,
number: "01",
},
{
name: "Fashion Designer",
role: "Design & Styling",
image: t2,
number: "02",
},
{
name: "Brand Manager",
role: "Brand Experience",
image: t3,
number: "03",
},
{
name: "Marketing Manager",
role: "Marketing & Strategy",
image: t4,
number: "04",
},
];

const reviews = [
{
name: "Sophia Williams",
role: "Fashion Enthusiast",
review:
"VELORA has an amazing creative team. Their attention to detail and passion for fashion is truly inspiring.",
number: "01",
},
{
name: "Oliver James",
role: "Regular Customer",
review:
"The creativity behind every collection is impressive. The team clearly puts a lot of thought into their designs.",
number: "02",
},
{
name: "Emily Anderson",
role: "Style Blogger",
review:
"I love the vision and elegance of VELORA. Their team brings a unique touch to modern fashion.",
number: "03",
},
];

const OurTeam: React.FC = () => {
return ( <main className="w-full overflow-hidden bg-[#0B0B0B] text-[#F4F0E8]">

```
  {/* HERO SECTION */}
  <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-24 sm:px-10 lg:px-20">

    {/* Background Glow */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-[150px]" />

    {/* Decorative Circle */}
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="pointer-events-none absolute right-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full border border-[#C6A15B]/15 sm:right-[-100px]"
    />

    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="pointer-events-none absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full border border-[#C6A15B]/10"
    />

    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

      {/* HERO TEXT */}
      <div className="text-center lg:text-left">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-7 flex items-center justify-center gap-3 lg:justify-start"
        >
          <span className="h-[1px] w-10 bg-[#C6A15B]" />
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#C6A15B] sm:text-xs">
            The People Behind Velora
          </span>
          <span className="h-[1px] w-10 bg-[#C6A15B] lg:hidden" />
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-6xl font-light leading-[1.05] tracking-wide sm:text-7xl md:text-8xl lg:text-[100px]"
          >
            Meet Our
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-2 font-serif text-6xl font-light italic leading-[1.05] tracking-wide text-[#C6A15B] sm:text-7xl md:text-8xl lg:text-[100px]"
          >
            Creative
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-2 font-serif text-6xl font-light leading-[1.05] tracking-wide sm:text-7xl md:text-8xl lg:text-[100px]"
          >
            Team.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mx-auto mt-8 max-w-md text-sm leading-8 text-[#F4F0E8]/55 sm:text-base lg:mx-0"
        >
          Behind every timeless piece is a team of creative minds,
          passionate hearts, and a shared vision for modern luxury.
        </motion.p>

        <motion.a
          href="#team"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="group mx-auto mt-9 inline-flex items-center gap-5 border border-[#C6A15B]/60 px-7 py-4 text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] transition-all duration-500 hover:bg-[#C6A15B] hover:text-[#0B0B0B] lg:mx-0"
        >
          Discover Our Team
          <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
            →
          </span>
        </motion.a>
      </div>

      {/* HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto w-full max-w-[480px]"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Image Frame */}
          <div className="relative aspect-[4/5] overflow-hidden border border-[#C6A15B]/30 bg-[#171512]">
            <img
              src={main}
              alt="VELORA Creative Team"
              className="h-full w-full object-cover"
            />

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

            {/* Image Label */}
            <div className="absolute bottom-7 left-7">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#C6A15B]">
                VELORA
              </p>
              <p className="mt-2 font-serif text-2xl tracking-wider text-white">
                A Vision. A Team.
              </p>
            </div>
          </div>

          {/* Decorative Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="pointer-events-none absolute -bottom-4 -right-4 -z-0 h-full w-full border border-[#C6A15B]/40"
          />
        </motion.div>

        {/* Floating Number */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-5 top-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#0B0B0B] font-serif text-xl text-[#C6A15B] sm:-left-8 sm:h-20 sm:w-20 sm:text-2xl"
        >
          01
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.a
      href="#team"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[#F4F0E8]/40"
    >
      <span className="text-[8px] uppercase tracking-[0.4em]">
        Scroll to explore
      </span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-lg text-[#C6A15B]"
      >
        ↓
      </motion.span>
    </motion.a>
  </section>

  {/* INTRO SECTION */}
  <section className="relative border-y border-[#C6A15B]/15 bg-[#F4F0E8] px-6 py-24 text-[#0B0B0B] sm:px-10 lg:px-20">
    <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#9B783F]">
          More Than A Brand
        </p>

        <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
          Creativity is our
          <span className="block italic text-[#A47F43]">
            common language.
          </span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="max-w-xl text-sm leading-8 text-black/60 sm:text-base"
      >
        At VELORA, every detail begins with people. Our team brings
        together creativity, thoughtful design, and a passion for
        outerwear. Together, we turn ideas into pieces made to be
        remembered.
      </motion.p>
    </div>
  </section>

  {/* TEAM SECTION */}
  <section
    id="team"
    className="relative px-6 py-24 sm:px-10 lg:px-20"
  >
    <div className="mx-auto max-w-7xl">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-[#C6A15B]">
          The Minds Behind The Magic
        </p>

        <h2 className="font-serif text-5xl font-light sm:text-6xl md:text-7xl">
          Meet The <span className="italic text-[#C6A15B]">Team</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#F4F0E8]/50">
          The people who bring our vision to life with creativity,
          dedication, and attention to every detail.
        </p>
      </motion.div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.number}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
            }}
            whileHover={{ y: -8 }}
            className="group"
          >
            {/* Member Image */}
            <div className="relative aspect-[3/4] overflow-hidden border border-[#C6A15B]/20 bg-[#171512]">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <span className="absolute left-5 top-5 font-serif text-3xl text-[#C6A15B]/80">
                {member.number}
              </span>

              {/* Hover Line */}
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4 + index * 0.1,
                }}
                className="absolute bottom-0 left-0 h-[2px] bg-[#C6A15B]"
              />
            </div>

            {/* Member Details */}
            <div className="mt-6 border-b border-[#C6A15B]/20 pb-5">
              <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-[#C6A15B]">
                {member.role}
              </p>

              <h3 className="font-serif text-xl font-light tracking-wide transition-colors duration-300 group-hover:text-[#C6A15B]">
                {member.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* BOTTOM CTA */}
  <section className="relative overflow-hidden border-t border-[#C6A15B]/20 bg-[#11100E] px-6 py-24 text-center sm:px-10">
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/20 blur-[100px]"
    />

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mx-auto max-w-3xl"
    >
      <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-[#C6A15B]">
        Together We Create
      </p>

      <h2 className="font-serif text-4xl font-light leading-tight sm:text-6xl">
        Every great idea
        <span className="block italic text-[#C6A15B]">
          starts with a team.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#F4F0E8]/50">
        A shared vision, a creative spirit, and a commitment to
        thoughtful design.
      </p>
    </motion.div>
  </section>

  {/* REVIEWS SECTION */}
  <section className="relative overflow-hidden border-t border-[#C6A15B]/20 bg-[#0B0B0B] px-6 py-24 sm:px-10 lg:px-20">
    {/* Background Glow */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-[140px]" />

    <div className="relative z-10 mx-auto max-w-7xl">

      {/* Reviews Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-[#C6A15B]">
          What People Say
        </p>

        <h2 className="font-serif text-5xl font-light sm:text-6xl md:text-7xl">
          Client <span className="italic text-[#C6A15B]">Reviews</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#F4F0E8]/50">
          A few words about the creativity and vision behind VELORA.
        </p>
      </motion.div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.div
            key={review.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            whileHover={{ y: -8 }}
            className="group relative flex h-full flex-col border border-[#C6A15B]/20 bg-[#11100E] p-8 transition-colors duration-500 hover:border-[#C6A15B]/60 sm:p-10"
          >
            {/* Quote Icon */}
            <span className="font-serif text-6xl leading-none text-[#C6A15B]/70">
              “
            </span>

            {/* Stars */}
            <div className="mb-6 flex gap-1 text-lg text-[#C6A15B]">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <span key={starIndex}>★</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="flex-1 text-sm leading-8 text-[#F4F0E8]/65">
              {review.review}
            </p>

            {/* Reviewer Details */}
            <div className="mt-8 flex items-center gap-4 border-t border-[#C6A15B]/20 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#C6A15B]/10 font-serif text-lg text-[#C6A15B]">
                {review.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-serif text-lg font-light tracking-wide text-[#F4F0E8] transition-colors duration-300 group-hover:text-[#C6A15B]">
                  {review.name}
                </h3>
                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#F4F0E8]/40">
                  {review.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
</main>


);
};

export default OurTeam;
