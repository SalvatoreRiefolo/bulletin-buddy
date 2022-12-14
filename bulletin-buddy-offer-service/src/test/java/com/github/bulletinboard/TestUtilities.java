package com.github.bulletinboard;

import com.github.bulletinboard.models.Offer;
import com.github.bulletinboard.services.OfferService;

public class TestUtilities {

    public static OfferService createOfferServiceWithMessageCount(int count){
        OfferService offerService = new OfferService();
        for (int i = 0; i < count; i++){
            offerService.addOffer(createAnOffer());
        }
        return offerService;
    }

    public static Offer createAnOffer(){
        return new Offer("title sample", "body sample", "email@email.com");
    }
}
