import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  x?: number;
  y?: number;
  du?: number;
  de?: number;
};

const Reveal = ({ children, width = "fit-content", x, y, du, de }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: x, y: y },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: du || 0.7, delay: de }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
