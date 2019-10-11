package com.ForumServer.model;

public class ForumPost {
    private final String author, content;

    public ForumPost(String author, String content) {
        this.author = author;
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public String getContent() {
        return content;
    }
}