package com.ForumServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ForumServer.repositories.ForumPostRepository;
import com.ForumServer.entities.ForumPost;;

@RestController
@CrossOrigin(origins = "https://forum-app-586.netlify.com")
public class ForumController {
    @Autowired
    ForumPostRepository forumPostRespository;
    
    @GetMapping("/get_posts")
    public @ResponseBody Iterable<ForumPost> getPosts() {
        return forumPostRespository.findAll();
    }

    @PostMapping("/new_post")
    @ResponseBody
    public Integer createPost(@RequestBody ForumPost post){
        forumPostRespository.save(post);
        return post.getId();
    }
}