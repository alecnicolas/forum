package com.ForumServer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ForumServer.entities.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
@Repository
@CrossOrigin(origins = "https://forum-app-586.netlify.com")
public interface UserRepository extends JpaRepository<User, Integer> {
    public User findFirstByEmail(String email);
}