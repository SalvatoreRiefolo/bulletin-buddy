package com.github.bulletinboard.controllers;

import com.github.bulletinboard.models.Post;
import com.github.bulletinboard.services.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/posts")
public class PostController {

    Logger logger = LoggerFactory.getLogger(PostController.class);

    @Autowired
    private Environment environment;
    @Autowired
    private PostService postService;

    @GetMapping()
    public List<Post> getAllPosts() {
        logger.info("Calling getAllPosts on instance " + environment.getProperty("spring..cloud.consul.discovery.instanceId"));
        return postService.getAllPosts();
    }

    @GetMapping("/{id}")
    public Post getCommentsByPostId(@PathVariable("id") UUID postId) {
        return postService.getPostById(postId);
    }

    @DeleteMapping()
    public void deleteAllPosts() {
        postService.removeAllPosts();
    }

    @PostMapping()
    public void addPost(@RequestBody Post post) {
        postService.addPost(post);
    }
}
