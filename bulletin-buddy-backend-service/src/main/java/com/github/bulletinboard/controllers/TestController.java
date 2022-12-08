package com.github.bulletinboard.controllers;

import com.github.bulletinboard.services.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping()
public class TestController {

    @Autowired
    private TestService testService;

    @GetMapping()
    public List<String> comments() {
        return testService.getAllComments();
    }

}
