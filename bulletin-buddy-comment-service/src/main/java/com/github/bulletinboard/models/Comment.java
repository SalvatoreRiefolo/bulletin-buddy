package com.github.bulletinboard.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "COMMENT")
public class Comment {

    @Column(name = "ID")
    @Id
    private UUID commentId;
    @Column(name = "OFFER_ID")
    private UUID offerId;
    @Column(name = "CONTENT")
    private String content;
    @Column(name = "POSTER_EMAIL")
    private String posterEmail;
    @Column(name = "TIMESTAMP")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private final Date timestamp;

    public Comment(){
        this.timestamp = new Date();
    }

    public Comment(UUID commentId, UUID offerId, String content, String posterEmail) {
        this.commentId = commentId;
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

    public UUID getCommentId() {
        return commentId;
    }

    public void setCommentId(UUID commentId) {
        this.commentId = commentId;
    }
}
