package com.github.bulletinboard.mapper;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinbuddy.CommentDTO;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {

    public CommentDTO map(Comment comment) {
        return CommentDTO.builder()
                .commentId(comment.getCommentId())
                .postId(comment.getPostId())
                .posterEmail(comment.getPosterEmail())
                .content(comment.getContent())
                .timestamp(comment.getTimestamp()).build();
    }

    public Comment map(CommentDTO commentDTO) {
        return new Comment(commentDTO.getPostId(), commentDTO.getContent(), commentDTO.getPosterEmail(), commentDTO.getTimestamp());
    }

}
