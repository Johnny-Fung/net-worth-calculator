package com.example.johnnyfung.springtutorial.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="assets")
@Data

public class Assets {

//	Data structure: (1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
	
	@Id
	private long id;
	private Integer a1; 
	private Integer a2;
	private Integer a3;
	private Integer a4;
	private Integer a5;
	private Integer a6;
	private Integer a7;
	private Integer a8;
	private Integer a9;
	private Integer a10;
	private Integer a11;
	private Integer a12;
	private Integer a13;
	
	private Integer l1; 
	private Integer l2;
	private Integer l3;
	private Integer l4;
	private Integer l5;
	private Integer l6;
	private Integer l7;
	private Integer l8;
	private Integer l9;
	
	private Integer cash;
	private Integer investments;
	private Integer longtermassets;
	private Integer totalassets;
	
	private Integer shorttermdebt;
	private Integer longtermdebt;
	private Integer totalliabilities;
	
	private Integer networth;
	
//	13 assets, 9 liabilities
//	assets - cash:6, investments:4, long term assets: 3
//		cash = a[1-6], investments= a[7-10], longtermassets = a[11-13]
//	liab - shorttermdebt: 3, longtermdebt: 6
//		shorttermdebt = l[1-3], longtermdebt= l[4-9]
	
//	30 lines in total
	
}
