package com.ForumServer;

import java.util.List;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ForumController {

    @GetMapping("/getPost")
    public List<Post> getPost(Post post) {
        List<Post> list = new ArrayList<Post>();
        list.add(post);
        return list;
    }
}