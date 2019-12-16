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

    @Autowired
    UserRepository userRepository;

    @GetMapping("/check-user/{userEmail}")
    public @ResponseBody Integer getUser(@PathVariable ("userEmail") String email){
        User user =  userRepository.findFirstByEmail(email);
        if(user != null){
            return user.getId();
        }
        else{
            return -1;
        }
    }

    @PostMapping("/create-user")
    @ResponseBody
    public Integer createUsers(@RequestBody User user){
        User old = userRepository.findFirstByEmail(user.getEmail());
        if( old != null){
            return old.getId();
        }
        else{
            userRepository.save(user);
        }

        return user.getId();
    }

    @GetMapping("/get_posts")
    public @ResponseBody List<ForumPost> getPosts() {
        return forumPostRespository.findByOrderByIdDesc();
    }

    @GetMapping("/get_posts/{userEmail}")
    public @ResponseBody List<ForumPost> getPostsByEmail(@PathVariable (value = "userEmail") String email){
        return forumPostRespository.findByEmailOrderByIdDesc(email);
    }

    @PostMapping("/new_post/{userId}")
    @ResponseBody
    public Integer createPost(@PathVariable ("userId") Integer userId, @RequestBody ForumPost post) {
        System.out.println("HELLO!!!!!!!!!?????????????????!!!!!!!!!!!!" + post.toString());
        userRepository.findById(userId).map( user -> {
            post.setUser(user);
            return forumPostRespository.save(post);
        });
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