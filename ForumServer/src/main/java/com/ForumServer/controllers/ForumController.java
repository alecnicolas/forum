package com.ForumServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ForumServer.repositories.ForumPostRepository;
import com.ForumServer.repositories.UserRepository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.ForumServer.entities.ForumPost;
import com.ForumServer.entities.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
// @CrossOrigin(origins = "https://forum-app-586.netlify.com")
public class ForumController {
    @Autowired
    ForumPostRepository forumPostRespository;
    UserRepository userRepository;

    @GetMapping("/check-user/{userEmail}")
    public @ResponseBody User getUser(@PathVariable ("userEmail") String email){
        return userRepository.findFirstByEmail(email);
    }

    @PostMapping("/create-user")
    public Integer createUsers(@RequestBody User user){
        return -1;
    }

    @GetMapping("/get_posts")
    public @ResponseBody List<ForumPost> getPosts() {
        return forumPostRespository.findAll();
    }

    @GetMapping("/get_posts/{userEmail}")
    public @ResponseBody List<ForumPost> getPostsByEmail(@PathVariable (value = "userEmail") String email){
        return forumPostRespository.findByEmail(email);
    }

    @PostMapping("/new_post")
    @ResponseBody
    public Integer createPost(@RequestBody ForumPost post) {
        forumPostRespository.save(post);
        return post.getId();
    }

    @PutMapping("/edit")
    public String editPost(@RequestBody Map<String, String> post) {
        Integer id = Integer.parseInt(post.get("id"));
        Optional<ForumPost> optionalPost = forumPostRespository.findById(id);
        ForumPost oldPost = optionalPost.get();
        oldPost.setContent(post.get("content"));
        forumPostRespository.save(oldPost);
        return oldPost.getContent();
    }

    @DeleteMapping("/delete_post/{id}")
    public ResponseEntity<Integer> deletePost(@PathVariable Integer id){
        forumPostRespository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @PostMapping("/login")
    @ResponseBody
    public Integer createUser(@RequestBody User user) {
        userRepository.save(user);
        return user.getId();
    }
}