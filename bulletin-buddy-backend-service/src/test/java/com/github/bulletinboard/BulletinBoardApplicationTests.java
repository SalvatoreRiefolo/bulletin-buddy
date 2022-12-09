package com.github.bulletinboard;

import com.github.bulletinboard.services.CommentService;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BulletinBoardApplicationTests {

	@Test
	void contextLoads() {
	}

	@ParameterizedTest
	@ValueSource(ints = {0, 1, 3, 5, 10}) // six numbers
	void commentService_GetAllComments_ShouldReturnCorrectNumberOfComments(int number){
		// ARRANGE
		CommentService commentService = TestUtilities.createCommentServiceWithMessageCount(number);

		// ACT
		int commentCount = commentService.getAllComments().size();

		//ASSERT
		assertEquals(commentCount, number);
	}

	@Test
	void commentService_removeAllComments_ShouldRemoveAllEntries(){
		// ARRANGE
		final int COMMENT_COUNT = 5;
		CommentService commentService = TestUtilities.createCommentServiceWithMessageCount(COMMENT_COUNT);

		// ACT
		commentService.removeAllComments();

		// ASSERT
		int commentCount = commentService.getAllComments().size();
		assertEquals(commentCount, 0);
	}

	@Test
	void commentService_addComment_ShouldAddOneComment(){
		// ARRANGE
		CommentService commentService = new CommentService();

		// ACT
		commentService.addComment("new comment");

		// ASSERT
		int commentCount = commentService.getAllComments().size();
		assertEquals(commentCount, 1);
	}
}
