package com.github.bulletinboard.controllers;

import com.github.bulletinboard.models.User;
import com.github.bulletinboard.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping()
    public boolean addUser(@RequestBody User user) {
        System.out.println(user);
        return authenticationService.addUser(user);
    }

    @GetMapping()
    public boolean authenticateUser(@RequestBody User user) {
        System.out.println(user);
        return authenticationService.authenticateUser(user.getName(), user.getPassword());
    }
}
