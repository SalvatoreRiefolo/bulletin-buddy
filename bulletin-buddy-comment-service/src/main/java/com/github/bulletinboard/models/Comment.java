package com.github.bulletinboard.models;

import java.util.Date;

public class Comment {
    private String content;
    private String posterEmail;
    private final Date timestamp;

    public Comment(String content, String posterEmail) {
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
}
