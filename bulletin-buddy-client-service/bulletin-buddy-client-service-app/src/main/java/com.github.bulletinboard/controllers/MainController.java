package com.github.bulletinboard.controllers;

import com.github.bulletinboard.services.CommentService;
import com.github.bulletinbuddy.CommentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class MainController {

    @Autowired
    private CommentService commentService;


    @GetMapping("/comments/{id}")
    public CommentDTO[] getCommentsByPostId(@PathVariable("id") UUID postId) {
        return commentService.getCommentsByPostId(postId);
    }

    @PostMapping("/comments")
    public void addCommentToPost(@RequestBody CommentDTO comment) {
        commentService.addComment(comment);
    }

}
