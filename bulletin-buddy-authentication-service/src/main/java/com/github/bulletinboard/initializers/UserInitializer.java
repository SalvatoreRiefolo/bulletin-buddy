package com.github.bulletinboard.initializers;

import com.github.bulletinboard.models.User;
import com.github.bulletinboard.services.AuthenticationService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserInitializer implements InitializingBean {

    @Autowired
    private AuthenticationService authenticationService;
    @Override
    public void afterPropertiesSet() throws Exception {
        User u1 = new User("test@test.com", "test");

        authenticationService.addUser(u1);

    }
}
