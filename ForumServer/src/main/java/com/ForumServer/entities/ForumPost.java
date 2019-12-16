package com.ForumServer.entities;

import javax.persistence.*;

@Entity
public class ForumPost {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    
    private String email, content;

    @ManyToOne(optional = false)
    @JoinColumn(name = "userId", nullable = false)
    private User user;

    public Integer getId() {
        return this.id;
    }
    
    public String getEmail() {
        return this.email;
    }

    public String getContent() {
        return this.content;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setContent(String content){
        this.content = content;
    }

}