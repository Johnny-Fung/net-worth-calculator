package com.example.johnnyfung.springtutorial;

import com.example.johnnyfung.springtutorial.model.Assets;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class AssetsControllerTest {
    @Autowired
    private MockMvc mockMvc;

//Test 1: Check if the POST response results in correct value and 200 success response
    @Test
    void saveAssests() throws Exception {
        Assets newAsset = new Assets();
        newAsset.setId(2L);
        newAsset.setA1(1000);
        newAsset.setA2(5555);
        newAsset.setA3(7777);
        newAsset.setA4(2222);
        newAsset.setA5(1333);
        newAsset.setA6(1000);
        newAsset.setA7(5555);
        newAsset.setA8(7777);
        newAsset.setA9(2222);
        newAsset.setA10(1333);
        newAsset.setA11(1000);
        newAsset.setA12(5555);
        newAsset.setA13(7777);
        
        newAsset.setL1(1000);
        newAsset.setL2(5555);
        newAsset.setL3(7777);
        newAsset.setL4(2222);
        newAsset.setL5(1333);
        newAsset.setL6(1000);
        newAsset.setL7(5555);
        newAsset.setL8(7777);
        newAsset.setL9(8888);

        mockMvc.perform(MockMvcRequestBuilders
                .post("/api/calculate")
                .content(asJsonString(newAsset))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
        		.andExpect(jsonPath("$.networth").value(8999));
    }

// Function: since .content expects a string, so we convert newAsset from an object to a string
    public static String asJsonString(final Object obj) {
        try { 	
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


}