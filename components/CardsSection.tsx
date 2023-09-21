import React from "react";
import { cards } from "@/constant";
import { Card, HorizontalWrapper } from "@/components";
type Props = {
  direction?: "left" | "right";
};

const CardsSection = ({ direction = "left" }: Props) => {
  return (
    <section className="lg:min-h-screen px-10 py-10 flex items-center">
      <div className="max-w-7xl mx-auto">
        <HorizontalWrapper direction={direction}>
          <div className="grid grid-cols-[repeat(5,60%)] md:grid-cols-[repeat(5,35%)] lg:grid-cols-[repeat(5,30%)] gap-6 xl:gap-16">
            {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </HorizontalWrapper>
      </div>
    </section>
  );
};

export default CardsSection;
