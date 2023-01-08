package com.github.bulletinboard.services;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public Comment[] getCommentsByPostId(UUID offerId){
        List<Comment> matches = commentRepository.findByPostId(offerId);
        return matches.toArray(Comment[]::new);
    }

    public void addComment(Comment comment){
        commentRepository.saveAndFlush(comment);
    }
}
