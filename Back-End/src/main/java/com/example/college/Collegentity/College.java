package com.example.college.Collegentity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class College {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String collegeAdmin;
	private String collegeName;
	private String Location;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCollegeAdmin() {
		return collegeAdmin;
	}
	public void setCollegeAdmin(String collegeAdmin) {
		this.collegeAdmin = collegeAdmin;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	public College(long id, String collegeAdmin, String collegeName, String location) {
		
		this.id = id;
		this.collegeAdmin = collegeAdmin;
		this.collegeName = collegeName;
		Location = location;
	}
	public College() {
		
		
	}
	@Override
	public String toString() {
		return "College [id=" + id + ", collegeAdmin=" + collegeAdmin + ", collegeName=" + collegeName + ", Location="
				+ Location + "]";
	}
	
	
	

}
