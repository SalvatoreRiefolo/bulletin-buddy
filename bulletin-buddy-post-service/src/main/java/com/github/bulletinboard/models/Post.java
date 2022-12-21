package com.github.bulletinboard.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;
import java.util.UUID;

public class Post {
    private UUID id;
    private String title;
    private String body;
    private String publisherEmail;

    // add Enumerated
    private PostType type;

    // can be extended to other types of posts in future
    public enum PostType
    {
        OFFER, REQUEST
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private final Date publishTimestamp;

    public Post() {
        this.publishTimestamp = new Date();
        this.type = PostType.REQUEST; // per default post is request
    }

    public Post(UUID id, String title, String body, String publisherEmail, PostType type) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.publisherEmail = publisherEmail;
        this.publishTimestamp = new Date();
        this.type = type;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID offerId) {
        this.id = offerId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getPublisherEmail() {
        return publisherEmail;
    }

    public void setPublisherEmail(String publisherEmail) {
        this.publisherEmail = publisherEmail;
    }

    public Date getPublishTimestamp() {
        return publishTimestamp;
    }
}
