package com.springbootreactapi.api.repository;

import com.springbootreactapi.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {

}
