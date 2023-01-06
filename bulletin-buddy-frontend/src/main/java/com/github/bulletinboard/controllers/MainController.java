package com.github.bulletinboard.controllers;

import com.github.bulletinboard.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestClientException;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class MainController {

    public static final String ERROR = "error";

    @Autowired
    private PostService postService;

    @GetMapping("/")
    public String main(Model model) {
        String[] comments;
        try {
            comments = postService.getPosts();
            model.addAttribute(ERROR, false);
        } catch (RestClientException e) {
            comments = new String[0];
            model.addAttribute(ERROR, true);
        }
        model.addAttribute("comments", comments);
        return "index";
    }

    @PostMapping("/comments")
    public RedirectView addComment(@RequestParam("pComment") String comment, Model model) {
        try {
            postService.addPost(comment);
            model.addAttribute(ERROR, false);
        } catch (RestClientException e) {
            model.addAttribute(ERROR, true);
        }
        return new RedirectView("/");
    }

    @DeleteMapping("/comments")
    public RedirectView deleteComments(Model model) {
        try {
            postService.deletePosts();
            model.addAttribute(ERROR, false);
        } catch (RestClientException e) {
            model.addAttribute(ERROR, true);
        }
        return new RedirectView("/");
    }
}
