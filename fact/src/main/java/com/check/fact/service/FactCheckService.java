package com.check.fact.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class FactCheckService  {
    private final WebClient webClient = WebClient.create("http://localhost:5001"); // Flask API URL

    public String checkFakeNews(String text) {
        return webClient.post()
                .uri("/predict")
                .bodyValue("{\"text\": \"" + text + "\"}")  // Sending the text to Flask API
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}