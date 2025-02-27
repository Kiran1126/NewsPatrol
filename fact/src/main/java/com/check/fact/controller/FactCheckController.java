package com.check.fact.controller;

import com.check.fact.service.FactCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class  FactCheckController {

    @Autowired
    private FactCheckService factCheckService;

    @GetMapping("/check-fake-news")
    public String checkFakeNews(@RequestParam String text) {
        return factCheckService.checkFakeNews(text);
    }
}
