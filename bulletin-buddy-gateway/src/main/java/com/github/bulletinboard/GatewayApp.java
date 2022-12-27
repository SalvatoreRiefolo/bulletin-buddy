package com.github.bulletinboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

/**
 * The Bulletin Buddy Gateway application.
 */
@SpringBootApplication
@Configuration
public class GatewayApp {

  public static void main(String[] args) {
    SpringApplication.run(GatewayApp.class, args);
  }
}
