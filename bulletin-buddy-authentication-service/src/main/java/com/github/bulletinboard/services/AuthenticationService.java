package com.github.bulletinboard.services;

import com.github.bulletinboard.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Service
public class AuthenticationService {
    List<User> users = new ArrayList<>();

    public boolean addUser(User user) {
        if (users.stream().anyMatch(u -> u.getName().equals(user.getName())))
            return false;

        users.add(user);
        return true;
    }

    public boolean authenticateUser(String name, String password) {
        return users.stream().anyMatch(isRegistered(name, password));
    }

    private static Predicate<User> isRegistered(String name, String password) {
        return u -> u.getName().equals(name) &&
                    u.getPassword().equals(password);
    }

    public boolean validateEmail(String email) {
        return !(users.stream().anyMatch(u -> u.getName().equals(email)));
    }
}
