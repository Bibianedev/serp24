package de.ostfalia.serp24.controller;

import de.ostfalia.serp24.dtos.ConsultantDto;
import de.ostfalia.serp24.serviceImpl.ConsultantServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/consultants")
public class ApiConsultant {

    @Autowired
    private ConsultantServiceImpl consultantService;

    @GetMapping
    public ResponseEntity<List<ConsultantDto>> getAllCustomers(){
        return ResponseEntity.ok(consultantService.getAllConsultants());
    }

}
