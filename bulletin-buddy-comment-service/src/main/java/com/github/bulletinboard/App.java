package com.github.bulletinboard;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import java.util.UUID;

@SpringBootApplication
public class App {

    @Autowired
    private CommentRepository repository;

    @EventListener(ApplicationReadyEvent.class)
    public void runAfterStartup() {
        Comment comment = new Comment();
        comment.setContent("Hello");
        comment.setOfferId(UUID.randomUUID());
        comment.setPosterEmail("test@test.com");
        this.repository.save(comment);
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
