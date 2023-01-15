package com.github.bulletinboard.controllers;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.services.CommentService;
import com.github.bulletinbuddy.CommentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/{id}")
    public CommentDTO[] getCommentsByPostId(@PathVariable("id") UUID postId) {
        return commentService.getCommentsByPostId(postId);
    }

    @PostMapping()
    public void addCommentToPost(@RequestBody CommentDTO comment) {
        commentService.addComment(comment);
    }
}
