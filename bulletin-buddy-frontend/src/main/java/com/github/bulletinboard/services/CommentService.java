package com.github.bulletinboard.services;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    // fake data, to be removed after call to service implemented
    private List<String> comments = new ArrayList<>();

    public List<String> getComments() {
        return comments;
    }

    public void deleteComments() {
        comments = new ArrayList<>();
    }


    public String addComment(String comment) {
        comments.add(comment);
        return comment;
    }
}
