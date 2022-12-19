package com.github.bulletinboard;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.repositories.CommentRepository;
import com.github.bulletinboard.services.CommentService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
class CommentServiceTests {

    @Mock
    private CommentRepository commentRepository;


    @InjectMocks
    private CommentService commentService;


    @Test
    void contextLoads() {
    }

    @Test
    void commentService_AddComment_ShouldAddCorrectComment() {
        // ARRANGE
        UUID offerId = UUID.randomUUID();
        UUID commentId = UUID.randomUUID();
        String email = "myEmail@mail.com";
        String content = "my comment";

        Comment comment = new Comment(commentId, offerId, content, email);
        List<Comment> savedComments = new ArrayList<>();
        savedComments.add(comment);

        when(commentRepository.saveAndFlush(any(Comment.class))).thenReturn(comment);
        when(commentRepository.findByOfferId(any(UUID.class))).thenReturn(savedComments);

        // ACT
        commentService.addComment(comment);

        //ASSERT
        Comment[] result = commentService.getCommentsByOfferId(offerId);
        assertEquals(result.length, 1);

        Comment retrievedComment = result[0];
        assertEquals(retrievedComment.getContent(), content);
        assertEquals(retrievedComment.getPosterEmail(), email);
    }

    @Test
    void commentService_AddComment_ShouldAddMultipleCommentsWithSameIdCorrectly() {
        // ARRANGE
        final int COMMENT_COUNT = 5;
        UUID offerId = UUID.randomUUID();

        List<Comment> savedComments = new ArrayList<>();
        for (int i = 0; i < COMMENT_COUNT; i++) {
            savedComments.add(new Comment(UUID.randomUUID(), offerId, "email", "comment"));
        }

        when(commentRepository.saveAndFlush(any(Comment.class))).thenReturn(null);
        when(commentRepository.findByOfferId(any(UUID.class))).thenReturn(savedComments);

        // ACT
        for (int i = 0; i < COMMENT_COUNT; i++) {
            commentService.addComment(savedComments.get(i));
        }

        // ASSERT
        Comment[] result = commentService.getCommentsByOfferId(offerId);
        assertEquals(result.length, COMMENT_COUNT);
    }
}
