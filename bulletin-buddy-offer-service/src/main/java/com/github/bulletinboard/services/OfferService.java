package com.github.bulletinboard.services;

import com.github.bulletinboard.models.Offer;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OfferService {
    List<Offer> offers = new ArrayList<>();

    public List<Offer> getAllOffers() {
        return offers;
    }

    public void removeAllOffers() {
        offers.clear();
    }

    public void addOffer(Offer offer) {
        offers.add(offer);
    }
}
