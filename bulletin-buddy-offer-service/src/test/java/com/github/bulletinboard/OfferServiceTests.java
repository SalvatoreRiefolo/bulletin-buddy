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
class OfferServiceTests {

	@Test
	void contextLoads() {
	}

	@ParameterizedTest
	@ValueSource(ints = {0, 1, 3, 5, 10}) // six numbers
	void offerService_GetAllOffers_ShouldReturnCorrectNumberOfOffers(int number){
		// ARRANGE
		OfferService offerService = TestUtilities.createOfferServiceWithMessageCount(number);

		// ACT
		int offerCount = offerService.getAllOffers().size();

		//ASSERT
		assertEquals(offerCount, number);
	}

	@Test
	void offerService_removeAllOffers_ShouldRemoveAllEntries(){
		// ARRANGE
		final int OFFER_COUNT = 5;
		OfferService offerService = TestUtilities.createOfferServiceWithMessageCount(OFFER_COUNT);

		// ACT
		offerService.removeAllOffers();

		// ASSERT
		int offerCount = offerService.getAllOffers().size();
		assertEquals(offerCount, 0);
	}

	@Test
	void offerService_addOffer_ShouldAddOneOffer(){
		// ARRANGE
		OfferService offerService = new OfferService();

		// ACT
		Offer offer = createAnOffer();
		offerService.addOffer(offer);

		// ASSERT
		int offerCount = offerService.getAllOffers().size();
		assertEquals(offerCount, 1);
	}
}
