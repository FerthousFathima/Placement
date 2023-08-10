package com.example.college.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.college.Collegentity.College;
import com.example.college.service.CollegeService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CollegeController {
	
	@Autowired
	private CollegeService colle;
	
	@PostMapping ("/college")
	public College saveCollege( @RequestBody College coll) {
		
		return colle.saveCollege(coll);
		
	}
	 @GetMapping("/college")
	    public List<College> fetchCollegeList() {
	        //LOGGER.info("Inside fetchDepartmentList of DepartmentController");
	        return colle.fetchCollegeList();
	    }
	    


	    @GetMapping("/college/{id}")
	    public College CollegeById(@PathVariable("id") Long id)
	            {
	        return colle.CollegeById(id);
	    }
	    
	    @DeleteMapping("/college/{id}")
	    public String deleteCollegeById(@PathVariable("id") Long id) {
	        colle.deleteCollegeById(id);
	        return "College Deleted Successfully!!";
	    }
	    
	    @PutMapping("/college/{id}")
	    public College updateCollege(@PathVariable("id") Long id,
	                                       @RequestBody College coll) {
	        return colle.updateCollege(id,coll);
	    }
	}



