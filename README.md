# Forum Application

*NOTE: THIS APPLICATION IS NO LONGER BEING HOSTED*

Forum application that shows a feed of all user posts. Also will allow to filter by email.

`GET ALL` fetches all forum posts.
`GET MINE` fetches all forum posts associated with the logged in user.

Technology Stack:
- Spring
- Angular
- MySQL
- Okta
- Netlify (Frontend)
- Google AppEngine (Backend & SQL Database)

- *Was* hosted [here](https://forum-app-586.netlify.com/)


## Notes for Professor
###### Requirements
- Using Okta for authentication and authorization. (Check Local Storage for token)
- Continous deployment. (Netlify)
- Many-to-One relationship between ForumPost and User tables. (Found in ForumPost.java entity)
- Spring -> ORM (JPA) and Dependency Injection
- Angular -> SPA and Dependency Injection
- Added basic testing in `ForumControllerTest.java` (Having some issues)


###### General
- Each account/email is only able to delete or edit its own posts.
- When **editing or deleting posts**, either **refresh** the page or press `GET ALL` again. This would automatically refresh locally, but the auto-refresh doesn't work after deploy. (UX problem)
- Can create an account through Okta or use one of the provided logins below.


###### Test Login Info

1. User: john.doe@example.com
   - Password: Password1!

2. Alt User: howard.washington@example.com
   - Alt Password: Password1!
