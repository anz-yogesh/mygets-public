import React, { useEffect } from 'react';
import { Card, Button, Image } from "@fluentui/react-components";
import { useMsal } from "@azure/msal-react";
import { b2cPolicies } from "../../authConfig";
import { useCookies } from 'react-cookie';
import { createBrowserHistory } from 'history';


const LandingPage = () => {
  const history = createBrowserHistory();
  const { instance, accounts } = useMsal();
  const [cookies, setCookie, removeCookie] = useCookies(['myGetsToken']);

  useEffect(() => {
    if (accounts.length === 0) {
      removeCookie('myGetsToken');
    }
  }, [accounts.length, removeCookie]);

  // Login function
  const handleAuth = async (authority) => {
    try {
      const myGetsAuth = await instance.loginPopup({
        authority,
        scopes: ['openid', 'profile', 'offline_access'],
      });
      setCookie('myGetsToken', myGetsAuth.idToken, {
        path: '/',
      });
      history.push('/');
    } catch (error) {
      console.error('Authentication failed: ', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-indigo-900 h-12 flex justify-between items-center shadow-md">
        <div>
          <Button
            className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
            onClick={() => handleAuth(b2cPolicies.authorities.signIn.authority)}
          >
            Sign In
          </Button>

          <Button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => handleAuth(b2cPolicies.authorities.signUp.authority)}
          >
            Sign Up
          </Button>
        </div>
      </header>

      <main className="p-4">
        <section className="bg-gray-200 rounded p-4 mb-4">
          <h1 className="text-6xl font-bold">Welcome to MyGets</h1>
          <p className="text-base text-center">
            Your trusted platform for seamless transactions.
          </p>
          <Button className="bg-blue-600 text-white mt-4 mx-auto block">Get Started</Button>
        </section>

        <section className="bg-white rounded p-4 mb-4 flex items-center justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold">Feature 1: High Security</h2>
            <p className="text-base">
              Leveraging Azure AD B2C, we ensure your data is secure.
            </p>
          </div>
          <Image src={`https://picsum.photos/400/300?random=1`} alt="Feature 1" />

        </section>

        <section className="bg-white rounded p-4 mb-4 flex items-center justify-between">
        <Image src={`https://picsum.photos/400/300?random=2`} alt="Feature 2" />
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold">Feature 2: Scalability</h2>
            <p className="text-base">
              Built on Azure's serverless architecture for seamless scalability.
            </p>
          </div>
        </section>

        <section className="bg-white rounded p-4 mb-4 flex items-center justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold">Feature 3: Multi-Tenancy</h2>
            <p className="text-base">
              Effortlessly manage multiple clients under a single account.
            </p>
          </div>
          <Image src={`https://picsum.photos/400/300?random=3`} alt="Feature 3" />
        </section>

        <section className="bg-gray-200 rounded p-4">
          <p className="text-4xl text-center">Ready to Dive In?</p>
          <Button className="bg-blue-600 text-white mt-4 mx-auto block">Join Now</Button>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
