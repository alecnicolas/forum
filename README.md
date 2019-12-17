# Forum Application

Forum application that shows a feed of all user posts. Also will allow to filter by email.

`GET ALL` fetches all forum posts.
`GET MINE` fetches all forum posts associated with the logged in user.

Tools:
- Spring
- Angular
- MySQL
- Okta

Hosted here: https://forum-app-586.netlify.com/


## Notes for Professor

- Using Okta for authentication and authorization. (Check Local Storage for token)
- Continous deployment (Netlify)
- Many-to-One relationship between ForumPost and User tables.


### Login Info:

- User: john.doe@example.com
- Password: Password1!
