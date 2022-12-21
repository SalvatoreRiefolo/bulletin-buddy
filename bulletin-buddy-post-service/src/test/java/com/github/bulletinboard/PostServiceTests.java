package com.github.bulletinboard;

import com.github.bulletinboard.models.Post;
import com.github.bulletinboard.services.PostService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.context.SpringBootTest;

import static com.github.bulletinboard.TestUtilities.createAnOffer;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class PostServiceTests {

	@Test
	void contextLoads() {
	}

	@ParameterizedTest
	@ValueSource(ints = {0, 1, 3, 5, 10}) // six numbers
	void offerService_GetAllOffers_ShouldReturnCorrectNumberOfOffers(int number){
		// ARRANGE
		PostService postService = TestUtilities.createOfferServiceWithMessageCount(number);

		// ACT
		int offerCount = postService.getAllPosts().size();

		//ASSERT
		assertEquals(offerCount, number);
	}

	@Test
	void offerService_removeAllOffers_ShouldRemoveAllEntries(){
		// ARRANGE
		final int OFFER_COUNT = 5;
		PostService postService = TestUtilities.createOfferServiceWithMessageCount(OFFER_COUNT);

		// ACT
		postService.removeAllPosts();

		// ASSERT
		int offerCount = postService.getAllPosts().size();
		assertEquals(offerCount, 0);
	}

	@Test
	void offerService_addOffer_ShouldAddOneOffer(){
		// ARRANGE
		PostService postService = new PostService();

		// ACT
		Post post = createAnOffer();
		postService.addPost(post);

		// ASSERT
		int offerCount = postService.getAllPosts().size();
		assertEquals(offerCount, 1);
	}
}
