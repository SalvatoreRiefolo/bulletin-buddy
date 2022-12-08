package com.github.bulletinboard.services;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestService {
    public List<String> getAllComments() {
        List<String> comments = new ArrayList<>();

        comments.add("Hello World!");
        comments.add("Ok, next comment.");

        return comments;
    }
}
