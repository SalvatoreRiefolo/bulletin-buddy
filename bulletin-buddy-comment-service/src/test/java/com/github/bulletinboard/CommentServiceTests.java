package com.github.bulletinboard;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.services.CommentService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CommentServiceTests {

	@Test
	void contextLoads() {
	}

	@Test
	void commentService_AddComment_ShouldAddCorrectComment(){
		// ARRANGE
		UUID commentId = UUID.randomUUID();
		String email = "myEmail@mail.com";
		String content = "my comment";

		CommentService commentService = new CommentService();

		// ACT
		commentService.addComment(commentId, email, content);

		//ASSERT
		Comment[] result = commentService.getCommentsByOfferId(commentId);
		assertEquals(result.length, 1);

		Comment comment = result[0];
		assertEquals(comment.getContent(), content);
		assertEquals(comment.getPosterEmail(), email);
	}

	@Test
	void commentService_AddComment_ShouldAddMultipleCommentsWithSameIdCorrectly(){
		// ARRANGE
		final int COMMENT_COUNT = 5;
		UUID commentId = UUID.randomUUID();
		CommentService commentService = new CommentService();

		// ACT
		for (int i = 0; i < COMMENT_COUNT; i++){
			commentService.addComment(commentId, "email", "comment");
		}

		//ASSERT
		Comment[] result = commentService.getCommentsByOfferId(commentId);
		assertEquals(result.length, COMMENT_COUNT);
	}
}
