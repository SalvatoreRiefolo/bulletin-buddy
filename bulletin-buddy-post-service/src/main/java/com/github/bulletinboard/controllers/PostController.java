package com.github.bulletinboard.controllers;

import com.github.bulletinboard.models.Post;
import com.github.bulletinboard.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping()
    public List<Post> getAllPosts() {
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
