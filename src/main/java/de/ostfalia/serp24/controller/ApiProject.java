package de.ostfalia.serp24.controller;


import de.ostfalia.serp24.dtos.ProjectDto;
import de.ostfalia.serp24.model.Project;
import de.ostfalia.serp24.serviceImpl.ProjectServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/projects")
public class ApiProject {

    @Autowired
    private ProjectServiceImpl projectService;

    @GetMapping
    public ResponseEntity<List<ProjectDto>> getAllProjects(){
        return ResponseEntity.ok(projectService.getAllProjects()) ;
    }

    @PostMapping(produces = { MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Project> saveCustomer(@RequestBody ProjectDto projectDto){

        System.out.println(projectDto);

        Project savedProject = projectService.createProject(projectDto);
        return ResponseEntity.ok(savedProject);
    }
}
