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

    public boolean authenticateUser(User user) {
        return users.stream().anyMatch(isRegistered(user));
    }

    private static Predicate<User> isRegistered(User user) {
        return u -> u.getName().equals(user.getName()) &&
                    u.getPassword().equals(user.getPassword());
    }
}
