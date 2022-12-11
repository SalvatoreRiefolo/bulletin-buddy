package com.github.bulletinboard.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    private final RestTemplate restTemplate;

    @Value("${endpoint.comments}")
    private String commentsEndpointUrl;

    public CommentService(RestTemplateBuilder restTemplateBuilder) {
        restTemplate = restTemplateBuilder.build();
    }

    public String[] getComments() throws RestClientException  {
        return restTemplate.getForObject(commentsEndpointUrl, String[].class);
    }

    public void addComment(String comment) throws RestClientException {
        restTemplate.postForEntity(commentsEndpointUrl, comment, String.class);
    }
}