## Digital Wedding Invitations (Paperless Wedding Invitations)

This project is a full-stack web application that aims to assist couples in planning and organizing their wedding day. Built using Next.js and MongoDB, it features a user-friendly form that collects all the necessary information based on the couple's specific requirements, such as the number of guests and any special requests or preferences.

The landing page is designed to be intuitive and easy to use, allowing couples to provide all the necessary information with ease. Once the form is completed, the collected information is displayed in a dashboard on a separate URL. This allows couples to review and keep track of any changes or updates. The dashboard is user-friendly and easy to navigate, making it simple for couples to manage their wedding details.

Additional features, such as a budget tracker and guest list manager, will be added in the future to solve problems associated with traditional paper invitations.

## DEMO Link

[Landing Page](https://ditialweddinginivitation.netlify.app/)

- The most important feature on this page is the form that will allow you to collect the most important data (based on requirements)
- Test the form by sending fake data and see how it works by going too [Here ](https://ditialweddinginivitation.netlify.app/invitations)



[Dashboard- Summary page ](https://ditialweddinginivitation.netlify.app/invitations)

- Currently only available for desktop, a mobile version will be added soon
- A sidebar is similar to the one on GitLab pages 
- Check the results collected from the form
- A simple login page with password and login functionality is planned for future development
- A button is added that allows the invitation owner to download a PDF file

[Login Page ](https://ditialweddinginivitation.netlify.app/login)

- The component displays a form for users to input their username and password, and a submit button to log in. 
- The component makes a POST request to an API endpoint 'api/login' with the entered username and password, and upon a successful response, 
- It sets a cookie and redirects the user to the '/invitations' page.
### API endpoint 'api/login'
This is an endpoint for handling user authentication and login. When a user submits their username and password, the endpoint will verify their credentials. If the credentials are valid, the endpoint generates a unique session ID and sets it in a cookie. If the credentials are not valid, the endpoint returns an error message. The endpoint also uses MongoDB to store and retrieve user data and sessions.

#### To test:
```bash
username:Maciek
# and
password:secretpassword

```


### Landing Page

The landing page provides basic information about the event. In the future, I plan to integrate the landing page with Sanity CMS, allowing the owner to easily add and update the content of the landing page.

## Status

**Work-in-Progress**

- This project is being actively improved on a daily basis


## Upcoming plans include:

- Refactor code to make reusable functions
- Improve user experience
- Developing a mobile version of the dashboard



![image 1](https://user-images.githubusercontent.com/47687566/199193895-4b9838a3-d3fb-462f-af01-13edae7478ff.jpg)

![image](https://user-images.githubusercontent.com/47687566/199197621-ba202f50-3ac1-4a63-9c3b-98489671487d.png)
