package com.github.bulletinboard.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;
import java.util.UUID;

public class Comment {
    private UUID offerId;
    private String content;
    private String posterEmail;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private final Date timestamp;

    public Comment(){
        this.timestamp = new Date();
    }

    public Comment(UUID offerId, String content, String posterEmail) {
        this.offerId = offerId;
        this.content = content;
        this.posterEmail = posterEmail;
        this.timestamp = new Date();
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPosterEmail() {
        return posterEmail;
    }

    public void setPosterEmail(String posterEmail) {
        this.posterEmail = posterEmail;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public UUID getOfferId() {
        return offerId;
    }

    public void setOfferId(UUID offerId) {
        this.offerId = offerId;
    }
}
