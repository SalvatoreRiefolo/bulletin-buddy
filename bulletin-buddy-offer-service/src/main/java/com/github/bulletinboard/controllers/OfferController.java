package com.github.bulletinboard.controllers;

import com.github.bulletinboard.models.Offer;
import com.github.bulletinboard.services.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/offers")
public class OfferController {
    @Autowired
    private OfferService offerService;

    @GetMapping()
    public List<Offer> getAllOffers() {
        return offerService.getAllOffers();
    }

    @GetMapping("/{id}")
    public Offer getCommentsByOfferId(@PathVariable("id") UUID offerId) {
        return offerService.getOfferById(offerId);
    }

    @DeleteMapping()
    public void deleteAllOffers() {
        offerService.removeAllOffers();
    }

    @PostMapping()
    public void addOffer(@RequestBody Offer offer) {
        offerService.addOffer(offer);
    }
}
