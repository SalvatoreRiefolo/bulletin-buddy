package com.github.bulletinboard.services;

import com.github.bulletinbuddy.CommentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;


@Service
public class CommentService {

    private final RestTemplate restTemplate;

    @Value("${endpoint.comment}")
    private String commentEndpointUrl;


    public CommentService(RestTemplateBuilder restTemplateBuilder) {
        restTemplate = restTemplateBuilder.build();
    }

    public CommentDTO[] getCommentsByPostId(@PathVariable("id") UUID postId) throws RestClientException {
        ArrayList<CommentDTO> commentDTOS = new ArrayList<>();
        commentDTOS.add(CommentDTO.builder()
                .commentId(UUID.randomUUID())
                .content("content")
                .posterEmail("email")
                .postId(postId)
                .timestamp(new Date()).build());
        return commentDTOS.toArray(new CommentDTO[0]);
        // return restTemplate.getForObject(commentEndpointUrl + "/" + postId, CommentDTO[].class);
    }

    public void addComment(CommentDTO e) {
        // restTemplate.postForEntity(commentEndpointUrl, e, CommentDTO.class);
    }
}
