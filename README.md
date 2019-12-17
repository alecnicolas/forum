# Forum Application

Forum application that shows a feed of all user posts. Also will allow to filter by email.

`GET ALL` fetches all forum posts.
`GET MINE` fetches all forum posts associated with the logged in user.

Tools:
- Spring
- Angular
- MySQL
- Okta

Hosted [here](https://forum-app-586.netlify.com/)


## Notes for Professor
###### Requirements
- Using Okta for authentication and authorization. (Check Local Storage for token)
- Continous deployment. (Netlify)
- Many-to-One relationship between ForumPost and User tables. (Found in ForumPost.java entity)
- Spring -> ORM (JPA) and Dependency Injection
- Angular -> SPA and Dependency Injection


###### General
- Each account is only able to delete or edit its own posts.
- When editing or deleting posts, either refresh the page or press `GET ALL` again. This would automatically refresh locally, but the auto-refresh doesn't work after deploy.
- Can create an account through Okta or use the provided login below.


### Login Info:

- User: john.doe@example.com
- Password: Password1!
