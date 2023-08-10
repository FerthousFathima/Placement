package com.example.college.service;


import java.util.List;




import com.example.college.Collegentity.College;


public interface CollegeService {
	
	public College saveCollege(College coll);
	
	public List<College> fetchCollegeList();

	public College CollegeById(Long id);

	public void deleteCollegeById(Long id);

	public College updateCollege(Long id, College coll);


}
