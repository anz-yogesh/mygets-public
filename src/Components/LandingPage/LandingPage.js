// src/pages/LandingPage.js
import React from 'react';
import {
  Card,
  Text,
  Button,
  Image,
} from '@fluentui/react-components';
import { makeStyles } from '@fluentui/react-components';
import { useMsal } from "@azure/msal-react";
import { b2cPolicies } from "../../authConfig";

const useStyles = makeStyles({
  container: {
    padding: '50px',
  },
  heroSection: {
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '8px',
  },
  featureSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    borderBottom: '1px solid #ccc',
  },
  featureText: {
    maxWidth: '400px',
  },
  ctaButton: {
    alignSelf: 'center',
    backgroundColor: '#0078D4',
    color: '#fff',
  },
  signInButton: {
    backgroundColor: '#0078D4',
    color: '#fff',
  },
});

const LandingPage = () => {
  const { instance } = useMsal();
  const styles = useStyles();

  const handleAuth = async (authority) => {
    try {
      await instance.loginPopup({
        authority,
        scopes: ["openid", "profile", "offline_access"],
      });
    } catch (error) {
      console.error("Authentication failed: ", error);
    }
  };

  return (
    <div>
      <Button 
        className={styles.signInButton}
        onClick={() => handleAuth(b2cPolicies.authorities.signInsignUp.authority)}
      >
        Sign In
      </Button>

      <Card className={styles.container}>
        {/* Hero Section */}
        <Card className={styles.heroSection}>
          <Text variant="xxLarge">Welcome to MyGets</Text>
          <Text variant="medium">Your trusted platform for seamless transactions.</Text>
          <Button className={styles.ctaButton}>Get Started</Button>
        </Card>

        {/* Feature Section */}
        <Card className={styles.featureSection}>
          <Text className={styles.featureText} variant="large">
            Feature 1: High Security
            <Text variant="medium">Leveraging Azure AD B2C, we ensure your data is secure.</Text>
          </Text>
          <Image src="/path/to/feature1-image.jpg" alt="Feature 1" />
        </Card>

        <Card className={styles.featureSection}>
          <Image src="/path/to/feature2-image.jpg" alt="Feature 2" />
          <Text className={styles.featureText} variant="large">
            Feature 2: Scalability
            <Text variant="medium">Built on Azure's serverless architecture for seamless scalability.</Text>
          </Text>
        </Card>

        {/* Additional Features */}
        <Card className={styles.featureSection}>
          <Text className={styles.featureText} variant="large">
            Feature 3: Multi-Tenancy
            <Text variant="medium">Effortlessly manage multiple clients under a single account.</Text>
          </Text>
          <Image src="/path/to/feature3-image.jpg" alt="Feature 3" />
        </Card>

        {/* CTA Section */}
        <Card className={styles.heroSection}>
          <Text variant="xxLarge">Ready to Dive In?</Text>
          <Button className={styles.ctaButton}>Join Now</Button>
        </Card>
      </Card>
    </div>
  );
};

export default LandingPage;
