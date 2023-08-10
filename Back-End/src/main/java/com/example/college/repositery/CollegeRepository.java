package com.example.college.repositery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.college.Collegentity.College;

@Repository
public interface CollegeRepository extends JpaRepository<College, Long>{

}
