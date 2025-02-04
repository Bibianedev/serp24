package de.app.serp24.serviceImpl;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.app.serp24.dtos.CustomerDto;
import de.app.serp24.dtos.ProjectDto;
import de.app.serp24.model.Customer;
import de.app.serp24.model.Project;
import de.app.serp24.repository.ProjectRepository;
import de.app.serp24.service.ProjectService;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public List<ProjectDto> getAllProjects() {
        List<Project> projects = projectRepository.findAll();
        return projects.stream()
                .map(project -> new ProjectDto(project.getProjectId(),project.getName(),project.getStart(), project.getEnd(), project.getStatus(),project.getProjectCustomer(),project.getConsultants()))
                .collect(Collectors.toList());
    }

    @Override
    public Project createProject(ProjectDto projectDto) {
        Project project = new Project();
        project.setName(projectDto.getName());
        project.setEnd(projectDto.getEnd());
        project.setStart(projectDto.getStart());
        project.setStatus(projectDto.getStatus());

        return projectRepository.save(project);
    }

    @Override
    public Project getProjectById(Long id) {
        return null;
    }

    @Override
    public Project updateProject(Long id, ProjectDto projectDto) {
        return null;
    }

    @Override
    public void deleteProject(long id) {

    }
}
