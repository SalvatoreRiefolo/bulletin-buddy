package com.github.bulletinboard;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.services.CommentService;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CommentServiceTests {

	@Test
	void contextLoads() {
	}

	@Test
	void commentService_AddComment_ShouldAddCorrectComment(){
		// ARRANGE
		UUID offerId = UUID.randomUUID();
		String email = "myEmail@mail.com";
		String content = "my comment";

		CommentService commentService = new CommentService();

		// ACT
		commentService.addComment(new Comment(offerId, content, email));

		//ASSERT
		Comment[] result = commentService.getCommentsByOfferId(offerId);
		assertEquals(result.length, 1);

		Comment comment = result[0];
		assertEquals(comment.getContent(), content);
		assertEquals(comment.getPosterEmail(), email);
	}

	@Test
	void commentService_AddComment_ShouldAddMultipleCommentsWithSameIdCorrectly(){
		// ARRANGE
		final int COMMENT_COUNT = 5;
		UUID offerId = UUID.randomUUID();
		CommentService commentService = new CommentService();

		// ACT
		for (int i = 0; i < COMMENT_COUNT; i++){
			commentService.addComment(new Comment(offerId, "email", "comment"));
		}

		//ASSERT
		Comment[] result = commentService.getCommentsByOfferId(offerId);
		assertEquals(result.length, COMMENT_COUNT);
	}
}
