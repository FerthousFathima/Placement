package com.example.college.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Objects;


import com.example.college.Collegentity.College;
import com.example.college.repositery.CollegeRepository;


@Service
public class CollegeServiceImpl  implements CollegeService{
	
	@Autowired
	private CollegeRepository cR;
	
	@Override
	public College saveCollege(College coll)
	{
		return cR.save(coll);
	}
	 @Override
	    public List<College> fetchCollegeList() {
	        return cR.findAll();
	    }

	   @Override
	   public College CollegeById(Long id) {
		   return cR.findById(id).get();
	   }
		
	   @Override
	   public void deleteCollegeById(Long id) {
	       cR.deleteById(id);
	   }


	   @Override
	   public College updateCollege(Long id, College coll) {
	       College collDB = cR.findById(id).get();

	       if(Objects.nonNull(coll.getCollegeName()) &&
	       !"".equalsIgnoreCase(coll.getCollegeName())) {
	           collDB.setCollegeName(coll.getCollegeName());
	       }

	       if(Objects.nonNull(coll.getCollegeAdmin()) &&
	               !"".equalsIgnoreCase(coll.getCollegeAdmin())) {
	           collDB.setCollegeAdmin(coll.getCollegeAdmin());
	       }

	       if(Objects.nonNull(coll.getLocation()) &&
	               !"".equalsIgnoreCase(coll.getLocation())) {
	           collDB.setLocation(coll.getLocation());
	       }

	       return cR.save(collDB);
	   }

	    
	    

}
