import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import LogInForm from './components/LogInForm';
import SignIn from '../../../components/auth/SignIn';


const LogIn = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <span className="account__logo">
              <span className="account__logo-accent">TenantFlow</span>
            </span>
          </h3>
          <h4 className="account__subhead subhead">Automate your real estate business</h4>
        </div>
        <SignIn onSubmit />
        <div className="account__or">
          <p>Or Easily Using</p>
        </div>
        <div className="account__social">
          <Link
            className="account__social-btn account__social-btn--facebook"
            to="/dashboard_default"
          ><FacebookIcon />
          </Link>
          <Link
            className="account__social-btn account__social-btn--google"
            to="/dashboard_default"
          ><GooglePlusIcon />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default LogIn;
