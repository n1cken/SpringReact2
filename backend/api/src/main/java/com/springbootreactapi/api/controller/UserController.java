package com.springbootreactapi.api.controller;

import com.springbootreactapi.api.model.User;
import com.springbootreactapi.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3023") test comment
@RestController
@RequestMapping("api/")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("users")
    public List<User> getUsers () {
        return this.userRepository.findAll();
    }

    @PostMapping("users")
    public String addUser(@RequestBody User user) {
        User userToSave = new User(user.getFirstName(), user.getLastName(), user.getEmail());
        userRepository.save(userToSave);
        return "redirect:/api/users";
    }
}
