package com.github.bulletinboard.controllers;

import com.github.bulletinboard.models.User;
import com.github.bulletinboard.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping()
    public boolean addUser(@RequestBody String name, @RequestBody String password) {
        return authenticationService.addUser(new User(name, password));
    }

    @PostMapping()
    public boolean authenticateUser(@RequestBody String name, @RequestBody String password) {
        return authenticationService.authenticateUser(name, password);
    }
}