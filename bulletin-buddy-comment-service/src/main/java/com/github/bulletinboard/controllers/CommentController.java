package com.github.bulletinboard.controllers;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/{id}")
    public Comment[] getCommentsByOfferId(@PathVariable("id") UUID offerId) {
        return commentService.getCommentsByOfferId(offerId);
    }

    @PostMapping()
    public void addCommentToOffer(@RequestBody Comment comment) {
        commentService.addComment(comment);
    }
}
