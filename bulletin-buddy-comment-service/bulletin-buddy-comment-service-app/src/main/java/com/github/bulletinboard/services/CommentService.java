package com.github.bulletinboard.services;

import com.github.bulletinboard.mapper.CommentMapper;
import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.repositories.CommentRepository;
import com.github.bulletinbuddy.CommentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private CommentMapper commentMapper;

    public CommentDTO[] getCommentsByPostId(UUID offerId){
        List<CommentDTO> matches = commentRepository.findByPostId(offerId).stream().map(commentMapper::map).collect(Collectors.toList());
        return matches.toArray(CommentDTO[]::new);
    }

    public void addComment(CommentDTO comment){
        commentRepository.saveAndFlush(commentMapper.map(comment));
    }
}
