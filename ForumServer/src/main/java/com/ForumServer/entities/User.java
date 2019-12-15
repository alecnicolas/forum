package com.ForumServer.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String email;
    private ForumPost[] posts;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPosts(ForumPost[] posts){
        this.posts = posts;
    }

    public String getEmail() {
        return this.email;
    }

    public ForumPost[] getPosts() {
        return this.posts;
    }
}