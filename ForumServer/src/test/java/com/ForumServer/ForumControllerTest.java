package com.ForumServer;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import com.ForumServer.controllers.ForumController;
import com.ForumServer.entities.ForumPost;
import com.ForumServer.entities.User;
import com.ForumServer.repositories.ForumPostRepository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.*;
import org.junit.Assert;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(ForumController.class)
public class ForumControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private ForumPostRepository forumPostRepository;

    @Test
    public void givenForumPosts_whenGetForumPosts_thenReturnJsonArray() throws Exception {

        ForumPost somePost = new ForumPost("alec@gmail.com", "hello");

        List<ForumPost> allPosts = Arrays.asList(somePost);

        given(forumPostRepository.findByOrderByIdDesc()).willReturn(allPosts);

        mvc.perform(get("/get_posts").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1))).andExpect(jsonPath("$[0].email", is(somePost.getEmail())));
    }

    @Test
    public void testForumPostEmail(){
        ForumPost somePost = new ForumPost("alec@gmail.com", "hello");
        String result = somePost.getEmail();
        assertEquals(result, "alec@gmail.com");
    }

    @Test
    public void testUser(){
        User user = new User("alec@gmail.com", "Alec", "Marcum", 1);
        String result = user.getEmail();
        assertEquals(result, "alec@gmail.com");
    }
}