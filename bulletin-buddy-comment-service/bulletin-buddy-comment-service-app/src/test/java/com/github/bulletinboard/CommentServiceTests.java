package com.github.bulletinboard;

import com.github.bulletinboard.mapper.CommentMapper;
import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.repositories.CommentRepository;
import com.github.bulletinboard.services.CommentService;
import com.github.bulletinbuddy.CommentDTO;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
class CommentServiceTests {

    private static UUID OFFER_1_ID = UUID.fromString("810b3429-0c80-4b8f-895b-20a4f68c1491");
    private static UUID COMMENT_1_ID = UUID.fromString("352d69e4-5980-4605-8d07-c47268016fb6");
    private static UUID COMMENT_2_ID = UUID.fromString("dfaa9392-4e21-492e-946e-3d562cefd14f");
    private static UUID COMMENT_3_ID = UUID.fromString("47f65270-0ed0-4a20-9ad2-436307025811");
    private static UUID COMMENT_4_ID = UUID.fromString("a7a2fe45-f6cf-4c69-99db-700342e2c2b6");
    private static UUID COMMENT_5_ID = UUID.fromString("f592f1ef-eed6-4af6-a712-94e45e5f0ebf");

    @Mock
    private CommentRepository commentRepository;


    @InjectMocks
    private CommentService commentService;

    @InjectMocks
    private CommentMapper commentMapper;


    @Test
    void contextLoads() {
    }
//
//    @Test
//    void commentService_AddComment_ShouldAddCorrectComment() {
//        // ARRANGE
//        UUID offerId = OFFER_1_ID;
//        UUID commentId = COMMENT_1_ID;
//        String email = "myEmail@mail.com";
//        String content = "my comment";
//
//        Comment comment = new Comment(commentId, offerId, content, email);
//        List<Comment> savedComments = new ArrayList<>();
//        savedComments.add(comment);
//
//        when(commentRepository.saveAndFlush(any(Comment.class))).thenReturn(comment);
//        when(commentRepository.findByPostId(any(UUID.class))).thenReturn(savedComments);
//
//        // ACT
//        commentService.addComment(commentMapper.map(comment));
//
//        //ASSERT
//        CommentDTO[] result = commentService.getCommentsByPostId(offerId);
//        assertEquals(result.length, 1);
//
//        CommentDTO retrievedComment = result[0];
//        assertEquals(retrievedComment.getContent(), content);
//        assertEquals(retrievedComment.getPosterEmail(), email);
//    }
//
//    @Test
//    void commentService_AddComment_ShouldAddMultipleCommentsWithSameIdCorrectly() {
//        // ARRANGE
//        final int COMMENT_COUNT = 5;
//
//        List<Comment> savedComments = new ArrayList<>();
//        savedComments.add(new Comment(COMMENT_1_ID, OFFER_1_ID, "comment1", "comment1@mail.com"));
//        savedComments.add(new Comment(COMMENT_2_ID, OFFER_1_ID, "comment2", "comment2@mail.com"));
//        savedComments.add(new Comment(COMMENT_3_ID, OFFER_1_ID, "comment3", "comment3@mail.com"));
//        savedComments.add(new Comment(COMMENT_4_ID, OFFER_1_ID, "comment4", "comment4@mail.com"));
//        savedComments.add(new Comment(COMMENT_5_ID, OFFER_1_ID, "comment5", "comment5@mail.com"));
//
//        when(commentRepository.saveAndFlush(any(Comment.class))).thenReturn(null);
//        when(commentRepository.findByPostId(any(UUID.class))).thenReturn(savedComments);
//
//        // ACT
//        for (int i = 0; i < COMMENT_COUNT; i++) {
//            commentService.addComment(commentMapper.map(savedComments.get(i)));
//        }
//
//        // ASSERT
//        CommentDTO[] result = commentService.getCommentsByPostId(OFFER_1_ID);
//        assertNotNull(result);
//        assertEquals(result.length, COMMENT_COUNT);

//    }
}
