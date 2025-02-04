package de.app.serp24.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.app.serp24.model.Consultant;

@Repository
public interface ConsultantRepository extends JpaRepository<Consultant, Integer> {
}
