import React, { useState } from "react";
import VoteCard from "./VoteCard "; // 独立的投票卡片组件

export interface Card {
  id: number;
  title: string;
  upvotes: number;
  downvotes: number;
  onVote?: (type: string) => void;
}


const FeedbackSystem = (): JSX.Element => {
  // 定义每张卡片的初始状态

  const allCards: Card[] = [
    { id: 1, title: "Readability", upvotes: 0, downvotes: 0 },
    { id: 2, title: "Performance", upvotes: 0, downvotes: 0 },
    { id: 3, title: "Security", upvotes: 0, downvotes: 0 },
    { id: 4, title: "Documentation", upvotes: 0, downvotes: 0 },
    { id: 5, title: "Testing", upvotes: 0, downvotes: 0 },
  ];

  const [cards, setCards] = useState(allCards);

  // 更新投票数
  const handleVote = (id: number, type: string) => {
    setCards((prevCards) => {

      return prevCards.map((card) =>
        card.id === id
          ? {
              ...card,
              upvotes: type === "upvote" ? card.upvotes + 1 : card.upvotes,
              downvotes:
                type === "downvote" ? card.downvotes + 1 : card.downvotes,
            }
          : card
      );
    });
  };

  return (
    <div>
      {cards.map((card) => {
        return (
          <VoteCard key={card.id} card={{...card, onVote: (type: string) => handleVote(card.id, type),}} />
        );
      })}
    </div>
  );
};

export default FeedbackSystem;

