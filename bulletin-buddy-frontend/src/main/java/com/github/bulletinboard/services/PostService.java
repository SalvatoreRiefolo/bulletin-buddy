package com.github.bulletinboard.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Service
public class PostService {

    private final RestTemplate restTemplate;

    @Value("${endpoint.posts}")
    private String postsEndpointUrl;

    public PostService(RestTemplateBuilder restTemplateBuilder) {
        restTemplate = restTemplateBuilder.build();
    }

    public String[] getPosts() throws RestClientException  {
        return restTemplate.getForObject(postsEndpointUrl, String[].class);
    }

    public void addPost(String offer) throws RestClientException {
        restTemplate.postForEntity(postsEndpointUrl, offer, String.class);
    }

    public void deletePosts() throws RestClientException {
        restTemplate.delete(postsEndpointUrl);
    }
}
