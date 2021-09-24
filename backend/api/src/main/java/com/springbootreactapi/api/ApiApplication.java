package com.springbootreactapi.api;

import com.springbootreactapi.api.model.User;
import com.springbootreactapi.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        this.userRepository.save(new User("Nichson", "Heaton", "nichsonheaton@aidw.com"));
        this.userRepository.save(new User("Hamoni", "Heaton", "nichsonheaton@aidw.com"));
        this.userRepository.save(new User("Synvilla", "Heaton", "nichsonheaton@aidw.com"));
        this.userRepository.save(new User("Nosper", "Brightwind", "nosperbrightwind@warrior.com"));

    }
}
