import React, { useState } from "react";
import Comments from "./components/Comments";
import FeedbackForm from "./components/FeedbackForm";
import TrendGraph from "./components/TrendGraph";
import { IComment, IComments } from "./interfaces";

const App = () => {
  const [comments, setComments] = useState<IComment[]>([
    {
      name: "Harry",
      email: "harry.juggins@gmail.com",
      rating: 4,
      comment: "i love it!",
    },
    {
      name: "Harry",
      email: "harry.juggins@gmail.com",
      rating: 5,
      comment: "i love it!",
    },
    {
      name: "Harry",
      email: "harry.juggins@gmail.com",
      rating: 3,
      comment: "i love it!",
    },
  ]);

  const addComment = (data: IComment) => {
    setComments((prev: any) => [...prev, data]);
  };

  return (
    <div className="container">
      <FeedbackForm addComment={(data) => addComment(data)} />
      <TrendGraph data={comments} />
      <Comments comments={comments} />
    </div>
  );
};

export default App;
