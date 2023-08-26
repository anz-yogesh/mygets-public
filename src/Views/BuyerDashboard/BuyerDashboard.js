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
import Constants from "../../API/Constant.json";
import Product_Category from "../../API/Product_Category.json";
import Regions from "../../API/Regions.json";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "720px",
    maxWidth: "100%",
    gap: "8px", // Adding gap between card children
  },
  cardpreview: {
    display: "grid",
    gap: "8px",
    marginTop: "4px", // Adding gap between card children
  },
  text: typographyStyles.body1Strong,
  label: {
    marginBottom: "4px", // Adding margin to labels
  },
});

const BuyerDashboard = () => {
  const styles = useStyles();

  return (
    <div>
      <Button>Create Tender</Button>
      <Card className={styles.card} appearance="subtle">
        <CardHeader
          header={
            <Body1>
              <b>Created by: </b>Elvia Atkins
            </Body1>
          }
          description={<Caption1>5h ago - Overview</Caption1>}
        />
        <CardPreview className={styles.cardpreview}>
          <Text className={styles.text}>Section 1:</Text>
          <Label className={styles.label}>Reference # :</Label>
          <Input placeholder="Enter reference id" />
          <Label className={styles.label}>Tender Name :</Label>
          <Input placeholder="Enter tender name..." />
          <Label className={styles.label}>Closing Date:</Label>
          <DatePicker placeholder="Select Tender closing date..." />
          <Label className={styles.label}>Tender Type:</Label>
          <Dropdown placeholder="Select tender type..." appearance="outline">
            {Constants.Tender_Type.map((option) => (
              <Option key={option.key}>{option.value}</Option>
            ))}
          </Dropdown>
          <Label className={styles.label}>Select Product Category:</Label>
          <Dropdown
            placeholder="Select tender product categories..."
            appearance="outline"
            multiselect={true}
          >
            {Product_Category.Product_Category.map((options) => (
              <Option key={options.code}>{options.name}</Option>
            ))}
          </Dropdown>
          <Label className={styles.label}>Select Tender Regions:</Label>
          <Dropdown
            placeholder="Select tender regions..."
            appearance="outline"
            multiselect={true}
          >
            {Regions.regions.map((options) => (
              <Option key={options.code}>{options.name}</Option>
            ))}
          </Dropdown>
          <Label className={styles.label}>Required Pre-qualifications :</Label>
          <Input placeholder="Required Pre-qualifications..." />
          <Label className={styles.label}>Contact :</Label>
          <Input placeholder="Contact..." />
          <Label className={styles.label}>
            Alternate Physical Delivery Address{" "}
          </Label>
          <Input placeholder="Alternate Physical Delivery Address..." />
          <Label className={styles.label}>
            Alternate Physical Fax Number :{" "}
          </Label>
          <Input placeholder="Alternate Physical Fax Number..." />
        </CardPreview>
        <CardFooter>
          <Button>Submit</Button>
          <Button>Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BuyerDashboard;
