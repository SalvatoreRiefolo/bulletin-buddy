package com.github.bulletinboard.services;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class CommentService {
    List<String> comments = new ArrayList<>();

    public List<String> getAllComments() {
        return comments;
    }

    public void removeAllComments() {
        comments.clear();
    }

    public void addComment(String comment) {
        comments.add(comment);
    }
}
