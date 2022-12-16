package com.github.bulletinboard.services;

import com.github.bulletinboard.models.Comment;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@Service
public class CommentService {
    private final HashMap<UUID, ArrayList<Comment>> comments;

    public CommentService() {
        this.comments = new HashMap<>();
    }

    public Comment[] getCommentsByOfferId(UUID offerId){
        List<Comment> matches = comments.getOrDefault(offerId, new ArrayList<>());
        return matches.toArray(Comment[]::new);
    }

    public void addComment(Comment comment){
        UUID offerId = comment.getOfferId();
        ArrayList<Comment> matches = comments.getOrDefault(offerId, new ArrayList<>());
        matches.add(comment);
        comments.put(offerId, matches);
    }
}
