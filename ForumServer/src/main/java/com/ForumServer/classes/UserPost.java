package com.ForumServer.classes;

import com.ForumServer.entities.ForumPost;
import com.ForumServer.entities.User;

public class UserPost {
    private String firstName, email, content;

    public UserPost(User user, ForumPost post){
        this.firstName = user.getFirstName();
        this.email = user.getEmail();
        this.content = post.getContent();
    }

    public String getFirstName(){
       return this.firstName;
    }

    public String getEmail(){
       return this.email;
    }

    public String getContent() {
        return this.content;
    }
}