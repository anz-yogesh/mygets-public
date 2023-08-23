import * as React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Body1,
  Caption1,
  Button,
  Text, // import Text for the text input
} from "@fluentui/react-components";
import data from "./data.json";
import "./tenderQueries.css";

const TenderQueries = () => {
  const [activeReplyIndex, setActiveReplyIndex] = React.useState(null);
  const [replyText, setReplyText] = React.useState("");

  const handleReplyClick = (index) => {
    setActiveReplyIndex(index);
  };

  const handleCancelClick = () => {
    setActiveReplyIndex(null);
    setReplyText(""); // Clear the text input on cancel
  };

  const handleSubmitClick = () => {
    // TODO: Logic to submit the reply
    setActiveReplyIndex(null);
  };

  return (
    <Card className="containers">
      <div className="items">
        {data.tenderQueries.map((query, index) => (
          <Card key={index} className="query-card">
            <CardHeader
              header={
                <Body1>
                  <b>{query.title}</b>
                </Body1>
              }
              description={
                <Caption1>
                  Date: {query.qdate} · Status: {query.status}
                </Caption1>
              }
            />
            <div className="query-content">
              <Body1>
                Q: {query.question} · {query.qdate}
              </Body1>
              {query.answer && (
                <Body1>
                  A: {query.answer} · {query.adate}
                </Body1>
              )}
            </div>
            <CardFooter>
              {!query.answer && (
                <>
                  {activeReplyIndex === index ? (
                    <>
                      <Text
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <Button onClick={handleSubmitClick}>Submit</Button>
                      <Button onClick={handleCancelClick}>Cancel</Button>
                    </>
                  ) : (
                    <Button onClick={() => handleReplyClick(index)}>
                      Reply
                    </Button>
                  )}
                </>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default TenderQueries;
