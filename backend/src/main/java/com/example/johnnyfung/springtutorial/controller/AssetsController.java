package com.example.johnnyfung.springtutorial.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.johnnyfung.springtutorial.model.Assets;
import com.example.johnnyfung.springtutorial.repository.AssetsRepository;


@RestController
@RequestMapping("/api")
public class AssetsController {

	private AssetsRepository assetsRepository;
	
	public AssetsController(AssetsRepository assetsRepository) {
		super();
		this.assetsRepository = assetsRepository;
	}

    @PostMapping(value = "/calculate")
    ResponseEntity<Assets> calculate(@RequestBody Assets assets) {
//    	if the input var from request hasn't been edited yet (null), set it to 0 instead for calculation
        int a1 = assets.getA1() != null ? assets.getA1() : 0;
        int a2 = assets.getA2() != null ? assets.getA2() : 0;
        int a3 = assets.getA3() != null ? assets.getA3() : 0;
        int a4 = assets.getA4() != null ? assets.getA4() : 0;
        int a5 = assets.getA5() != null ? assets.getA5() : 0;
        int a6 = assets.getA6() != null ? assets.getA6() : 0;
        int a7 = assets.getA7() != null ? assets.getA7() : 0;
        int a8 = assets.getA8() != null ? assets.getA8() : 0;
        int a9 = assets.getA9() != null ? assets.getA9() : 0;
        int a10 = assets.getA10() != null ? assets.getA10() : 0;
        int a11 = assets.getA11() != null ? assets.getA11() : 0;
        int a12 = assets.getA12() != null ? assets.getA12() : 0;
        int a13 = assets.getA13() != null ? assets.getA13() : 0;

        int cash = a1 + a2 + a3 + a4 + a5 + a6;
        int investments = a7 + a8 + a9 + a10;
        int longtermassets = a11 + a12 + a13;
        int totalassets = cash + investments + longtermassets;

        int l1 = assets.getL1() != null ? assets.getL1() : 0;
        int l2 = assets.getL2() != null ? assets.getL2() : 0;
        int l3 = assets.getL3() != null ? assets.getL3() : 0;
        int l4 = assets.getL4() != null ? assets.getL4() : 0;
      	int l5 = assets.getL5() != null ? assets.getL5() : 0;
      	int l6 = assets.getL6() != null ? assets.getL6() : 0;
      	int l7 = assets.getL7() != null ? assets.getL7() : 0;
      	int l8 = assets.getL8() != null ? assets.getL8() : 0;
      	int l9 = assets.getL9() != null ? assets.getL9() : 0;

      	int shorttermdebt = l1 + l2 + l3;
      	int longtermdebt = l4 + l5 + l6 + l7 + l8 + l9;
      	int totalliabilities = shorttermdebt + longtermdebt;

      	int networth = totalassets - totalliabilities;

        assets.setId(1l); //Automatically sets a Long ID of 1 (1L = Long 1)
//      Future feature: If multiple users - if no id is given from post call, set ID to 1
//      if (assets.getId() == 0) {
//          assets.setId(1L);
//      }
//      
        System.out.println("------ RESULT ------");
        assets.setCash(cash);
        assets.setInvestments(investments);
        assets.setLongtermassets(longtermassets);
        assets.setTotalassets(totalassets);
        
        assets.setShorttermdebt(shorttermdebt);
        assets.setLongtermdebt(longtermdebt);
        assets.setTotalliabilities(totalliabilities);
        
        assets.setNetworth(networth);

        assetsRepository.save(assets);

        return ResponseEntity.ok().body(assets);
    }
	
//    Variable Mapping:
	//13 totalassets, 9 totalliabilities;
	//assets - cash:6, investments:4, long term assets: 3
	//  	cash = a[1-6], investments= a[7-10], longtermassets = a[11-13]
	//liab - shorttermdebt: 3, longtermdebt: 6
	//  	shorttermdebt = l[1-3], longtermdebt= l[4-9]
	
	 //31 lines in total
  
	
	
//	Delete option for future features
	@DeleteMapping("/assets/{id}")
	ResponseEntity<?> deleteAssets(@PathVariable Long id){
		assetsRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
}




