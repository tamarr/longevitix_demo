"use client";

import { useState } from "react";
import RiskCard from "./risk-card";
import type { RiskExplanation } from "@/lib/risk";
import type { ConditionKey } from "@/lib/ui";

interface RiskCardsProps {
  cards: { key: ConditionKey; score: number; explanation: RiskExplanation }[];
}

export default function RiskCards({ cards }: RiskCardsProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <RiskCard
          key={card.key}
          conditionKey={card.key}
          score={card.score}
          explanation={card.explanation}
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
        />
      ))}
    </div>
  );
}
