import * as React from "react";
import {
  Body1,
  Caption1,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  typographyStyles,
  makeStyles,
  shorthands,
  Dropdown,
  Option,
} from "@fluentui/react-components";
import { Text, Input, Label } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import Constants from "../../API/Constant.json"; // Importing the JSON data

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "720px",
    maxWidth: "100%",
  },
  text: typographyStyles.body1Strong,
});

const BuyerDashboard = () => {
  const styles = useStyles();

  return (
    <>
      <div>
        <Button>Create Tender</Button>
      </div>
      <Card className={styles.card} appearance="subtle">
        <CardHeader
          header={
            <Body1>
              <b>Created by: </b>Elvia Atkins
            </Body1>
          }
          description={<Caption1>5h ago - Overview</Caption1>}
        />
        <CardPreview>
          <Text className={styles.text}>Section 1:</Text>
          <Label>Reference # :</Label>
          <Input placeholder="Enter reference id" />
          <Label>Tender Name :</Label>
          <Input placeholder="Enter tender name" />
          <Label>Closing Date:</Label> {/* Moved up */}
          <DatePicker placeholder="Select Tender closing date..." />
          <Label>Tender Type:</Label> {/* Dropdown from JSON, moved up */}
          <Dropdown placeholder="-" appearance="outline">
            {Constants.Tender_Type.map((option) => (
              <Option key={option.key}>{option.value}</Option>
            ))}
          </Dropdown>
        </CardPreview>
        <CardFooter>
          <Button>Submit</Button>
          <Button>Cancel</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default BuyerDashboard;
