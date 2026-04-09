import { authRoles } from 'app/auth';
import ContactUsPage from './ContactUsPage';

const ContactUsPageConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      //path: '/landing-page',
      path: '/contact-us',
      component: ContactUsPage,
    },
  ],
};

export default ContactUsPageConfig;
