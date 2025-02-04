package de.ostfalia.serp24.repository;

import de.ostfalia.serp24.model.Consultant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultantRepository extends JpaRepository<Consultant, Integer> {
}
