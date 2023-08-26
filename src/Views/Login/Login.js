import * as React from "react";
import {
  Button,
  Label,
  Input,
  useId,
  Divider,
} from "@fluentui/react-components";
import { Open16Regular } from "@fluentui/react-icons";
import { Link, NavLink } from "react-router-dom";
import { Card, CardProps, CardFooter } from "@fluentui/react-components";
import "./Login.css";
import Auth from "../../Components/Auth/Auth";

const ASSET_URL =
  "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

const Login: React.FC<CardProps> = (props) => {
  const emailId = useId("input-email");
  const passwordId = useId("input-password");

  return (
    <div className="loginContainer">
      <Card className="card" {...props}>
        <img
          src={`${ASSET_URL}sales_template.png`}
          alt="Sales Presentation Preview"
        />
        <div className="loginRoot">
          <Label htmlFor={emailId}>Email</Label>
          <Input type="email" id={emailId} placeholder="user@example.com" />
          <Label htmlFor={passwordId}>Password</Label>
          <Input type="password" id={passwordId} placeholder="********" />
          <div className="buttonGroup">
            <Button appearance="primary">Submit</Button>
            <Button appearance="outline">Cancel</Button>
          </div>
          <div className="insetstyle">
            <Divider inset>Continue With</Divider>
          </div>
          <CardFooter className="footer">
            <Button appearance="primary" icon={<Open16Regular />}>
              Google
            </Button>
            <Button appearance="primary" icon={<Open16Regular />}>
              Microsoft
            </Button>
          </CardFooter>
          <p className="signUpText">
            Don't have an account?
            <Link to={"/signUp"}> Sign up!</Link>
          </p>
          <Auth />
        </div>
      </Card>
    </div>
  );
};

export default Login;
