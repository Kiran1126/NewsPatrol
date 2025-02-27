package com.check.fact.controller;


import org.springframework.web.bind.annotation.*;

import com.check.fact.service.FactCheckService;

@RestController
@RequestMapping("/api/fact-check")
@CrossOrigin("*")
public class FactCheckController {

    private final FactCheckService factCheckService;

    public FactCheckController(FactCheckService factCheckService) {
        this.factCheckService = factCheckService;
    }

    @GetMapping
    public String checkFact(@RequestParam String query) {
        return factCheckService.checkFact(query);
    }
}