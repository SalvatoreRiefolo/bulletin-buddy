package com.github.bulletinboard.controllers;

import com.github.bulletinboard.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping()
    public List<String> getAllComments() {
        return commentService.getAllComments();
    }

    @DeleteMapping()
    @ResponseBody()
    public void deleteAllComments() {
        commentService.removeAllComments();
    }

    @PostMapping()
    public void addComment(@RequestBody String comment) {
        commentService.addComment(comment);
    }
}
