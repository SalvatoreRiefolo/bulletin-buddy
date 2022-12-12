package com.github.bulletinboard.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Service
public class OfferService {

    private final RestTemplate restTemplate;

    @Value("${endpoint.offers}")
    private String offersEndpointUrl;

    public OfferService(RestTemplateBuilder restTemplateBuilder) {
        restTemplate = restTemplateBuilder.build();
    }

    public String[] getOffers() throws RestClientException  {
        return restTemplate.getForObject(offersEndpointUrl, String[].class);
    }

    public void addOffer(String offer) throws RestClientException {
        restTemplate.postForEntity(offersEndpointUrl, offer, String.class);
    }

    public void deleteOffers() throws RestClientException {
        restTemplate.delete(offersEndpointUrl);
    }
}
