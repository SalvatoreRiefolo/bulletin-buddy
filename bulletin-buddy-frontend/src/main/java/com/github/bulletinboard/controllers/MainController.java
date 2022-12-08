package com.github.bulletinboard.controllers;

import com.github.bulletinboard.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@Controller
public class MainController {

    @Autowired
    private CommentService commentService;

    @GetMapping("/")
    public String main(Model model) {
        List<String> comments = commentService.getComments();
        model.addAttribute("comments", comments);
        return "index";
    }

    @PostMapping("/comments")
    public RedirectView addComment(@RequestParam("pComment") String comment, Model model) {
        commentService.addComment(comment);
        return new RedirectView("/");
    }

    @DeleteMapping("/comments/all")
    public RedirectView deleteComments(Model model) {
        commentService.deleteComments();
        return new RedirectView("/");
    }
}
