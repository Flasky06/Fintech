"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <section>
      <CountUp
        end={amount}
        decimal="."
        prefix="$ "
        duration={2.75}
        decimals={2}
      />
    </section>
  );
};

export default AnimatedCounter;
