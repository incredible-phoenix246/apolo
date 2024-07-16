import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-secondary p-5"
    >
      <div className="absolute z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
        <span className="text-black text-base ">{card.desc}</span>
      </div>
    </div>
  );
};

type CardType = {
  title: string;
  id: number;
  desc?: string;
};

const cards: CardType[] = [
  {
    title: "PROFILE IMAGE",
    id: 1,
    desc: "I didn't use my image as my profile image, which is against the rules. The rules state that using a personal image helps in creating a more personal and trustworthy online presence. It allows peers and mentors to recognize and connect with you easily, fostering a better sense of community and collaboration.",
  },
  {
    title: "SLACK ID/NAME",
    id: 2,
    desc: "I changed my Slack ID from what it was before, which is against the rules. Consistency in your Slack ID is important for maintaining accurate records and ensuring that mentors and peers can reliably identify and communicate with you. Changing your ID can cause confusion and disrupt the workflow, as people may not be able to recognize who you are.",
  },
];
