package de.app.serp24.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.app.serp24.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
