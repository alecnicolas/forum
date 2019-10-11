package com.ForumServer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.ArrayList;
import com.ForumServer.model.ForumPost;;


@RestController
public class ForumController {

    @GetMapping("/getPost")
    public List<ForumPost> getPost(ForumPost post) {
        List<ForumPost> list = new ArrayList<ForumPost>();
        list.add(post);
        return list;
    }
}