package com.github.bulletinboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@SpringBootApplication
@EnableDiscoveryClient
public class CommentApp {
    public static void main(String[] args) {
        SpringApplication.run(CommentApp.class, args);
    }
}
