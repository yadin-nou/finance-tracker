import React, { useEffect, useState } from "react";

export const TipContent = () => {
  const [index, setIndex] = useState(0);
  const financialTips = [
    {
      tip: "Live below your means and invest the difference consistently over time.",
      person: "Warren Buffett",
    },
    {
      tip: "Pay yourself first by automating savings before spending on anything else.",
      person: "David Bach",
    },
    {
      tip: "Get out of debt and build wealth by living on a written, zero-based budget.",
      person: "Dave Ramsey",
    },
    {
      tip: "Know the difference between assets and liabilities, and focus on acquiring assets.",
      person: "Robert Kiyosaki",
    },
    {
      tip: "Index funds with low fees usually outperform actively managed funds over the long run.",
      person: "John C. Bogle",
    },
    {
      tip: "Track where every dollar goes so your money has a clear purpose.",
      person: "Dave Ramsey",
    },
    {
      tip: "Time in the market beats timing the market when it comes to long-term investing.",
      person: "Peter Lynch",
    },
    {
      tip: "Understand what you invest in — don't put money into businesses you don't understand.",
      person: "Warren Buffett",
    },
    {
      tip: "Financial independence comes from spending less than you earn and investing the surplus wisely.",
      person: "Suze Orman",
    },
    {
      tip: "Compound interest is one of the most powerful forces for building long-term wealth.",
      person: "Albert Einstein (attributed)",
    },
  ];
  useEffect(() => {
    setInterval(() => {
      setIndex(Math.floor(Math.random() * financialTips.length));
    }, 4000);
  }, []);
  //console.log(index);
  const { tip, person } = financialTips[index];
  return (
    <div className="text-justify">
      <div className="pt-5">{tip}</div>
      <div>By: {person}</div>
    </div>
  );
};
