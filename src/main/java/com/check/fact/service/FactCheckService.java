package com.check.fact.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

@Service
public class FactCheckService {

    private final String API_URL = "https://factchecktools.googleapis.com/v1alpha1/claims:search?query=";
    private final String API_KEY = "AIzaSyDkI5lm7VxlxzsQZvN0aN74m3kgbrL2I34";

    public String checkFact(String query) {
        RestTemplate restTemplate = new RestTemplate();
        String url = API_URL + query + "&key=" + API_KEY;

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        return response.getBody();
    }
}