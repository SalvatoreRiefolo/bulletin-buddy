package com.github.bulletinboard;

import com.github.bulletinboard.models.Offer;
import com.github.bulletinboard.services.OfferService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.context.SpringBootTest;

import static com.github.bulletinboard.TestUtilities.createAnOffer;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class BulletinBoardApplicationTests {

	@Test
	void contextLoads() {
	}

	@ParameterizedTest
	@ValueSource(ints = {0, 1, 3, 5, 10}) // six numbers
	void commentService_GetAllComments_ShouldReturnCorrectNumberOfComments(int number){
		// ARRANGE
		OfferService offerService = TestUtilities.createCommentServiceWithMessageCount(number);

		// ACT
		int commentCount = offerService.getAllOffers().size();

		//ASSERT
		assertEquals(commentCount, number);
	}

	@Test
	void commentService_removeAllComments_ShouldRemoveAllEntries(){
		// ARRANGE
		final int COMMENT_COUNT = 5;
		OfferService offerService = TestUtilities.createCommentServiceWithMessageCount(COMMENT_COUNT);

		// ACT
		offerService.removeAllOffers();

		// ASSERT
		int commentCount = offerService.getAllOffers().size();
		assertEquals(commentCount, 0);
	}

	@Test
	void commentService_addComment_ShouldAddOneComment(){
		// ARRANGE
		OfferService offerService = new OfferService();

		// ACT
		Offer offer = createAnOffer();
		offerService.addOffer(offer);

		// ASSERT
		int commentCount = offerService.getAllOffers().size();
		assertEquals(commentCount, 1);
	}
}
