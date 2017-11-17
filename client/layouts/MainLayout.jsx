import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import { Accounts } from 'meteor/accounts-base';
import 'bootstrap/dist/css/bootstrap.css';

Accounts.ui.config({
  passwordSignupFields:'USERNAME_ONLY'
})


export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2> YouNoteIt </h2>
      <nav>
        <a href = "/home/"> Home </a>
        <a href = "/videos/"> My Videos </a>
        <a href = "/about/"> About </a>
        <AccountsUI />
      </nav>
    </header>
    <main>
      {content}
    </main>
  </div>
)
