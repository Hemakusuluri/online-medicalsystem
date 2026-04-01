package com.hema.medicalbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/addUser")
    public User add(@RequestBody User u) {
        return repo.save(u);
    }

    @GetMapping("/getUsers")
    public List<User> getAll() {
        return repo.findAll();
    }
}