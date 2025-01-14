import {Card} from './FeedbackSystem'

const VoteCard = ({ card }: { card: Card }) : JSX.Element => {

    const {upvotes, title, downvotes, onVote} = card

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="vote-buttons">
        <button onClick={() => onVote && onVote("upvote")} className="upvote-button">
          👍 Upvote
        </button>
        <button onClick={() => onVote && onVote("downvote")} className="downvote-button">
          👎 Downvote
        </button>
      </div>
      <p>
        Upvotes: <strong>{upvotes}</strong>
      </p>
      <p>
        Downvotes: <strong>{downvotes}</strong>
      </p>
    </div>
  );
};

export default VoteCard;
