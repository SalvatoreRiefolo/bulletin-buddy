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
    public boolean authenticateUser(@RequestParam("name") String name, @RequestParam("passwd") String password) {
        User user = new User(name, password);
        System.out.println(user);
        return authenticationService.authenticateUser(user.getName(), user.getPassword());
    }
    @GetMapping(value = "/validate")
    public boolean validateEmail(@RequestParam("name") String name){
       return authenticationService.validateEmail(name);
    }
}
