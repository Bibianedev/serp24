package de.app.serp24.service;


import org.springframework.web.bind.annotation.PathVariable;

import de.app.serp24.dtos.CustomerDto;
import de.app.serp24.dtos.ProjectDto;
import de.app.serp24.model.Customer;
import de.app.serp24.model.Project;

import java.util.List;

public interface ProjectService {

    List<ProjectDto> getAllProjects();
    Project createProject(ProjectDto projectDto);

    Project getProjectById(Long id);


    Project updateProject(Long id, ProjectDto projectDto);

   void deleteProject(long id);
}
