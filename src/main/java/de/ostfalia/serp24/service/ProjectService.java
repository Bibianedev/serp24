package de.ostfalia.serp24.service;


import de.ostfalia.serp24.dtos.CustomerDto;
import de.ostfalia.serp24.dtos.ProjectDto;
import de.ostfalia.serp24.model.Customer;
import de.ostfalia.serp24.model.Project;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface ProjectService {

    List<ProjectDto> getAllProjects();
    Project createProject(ProjectDto projectDto);

    Project getProjectById(Long id);


    Project updateProject(Long id, ProjectDto projectDto);

   void deleteProject(long id);
}
