package com.github.bulletinboard.models;

import java.util.Date;

public class Offer {

    private String title;
    private String body;
    private String publisherEmail;
    private final Date publishTimestamp;

    public Offer(String title, String body, String publisherEmail){
        this.title = title;
        this.body = body;
        this.publisherEmail = publisherEmail;
        this.publishTimestamp = new Date();
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
