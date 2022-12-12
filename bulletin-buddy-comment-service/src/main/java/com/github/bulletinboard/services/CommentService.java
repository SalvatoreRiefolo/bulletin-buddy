package com.github.bulletinboard.services;

import com.github.bulletinboard.models.Comment;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@Service
public class CommentService {
    private final HashMap<UUID, List<Comment>> comments;

    public CommentService() {
        this.comments = new HashMap<>();
    }

    public Comment[] getCommentsByOfferId(UUID offerId){
        List<Comment> matches = comments.getOrDefault(offerId, Collections.emptyList());
        return matches.toArray(Comment[]::new);
    }

    public void addComment(UUID offerId, String userEmail, String comment){
        List<Comment> matches = comments.getOrDefault(offerId, Collections.emptyList());
        matches.add(new Comment(userEmail, comment));
        comments.put(offerId, matches);
    }
}
