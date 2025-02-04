package de.app.serp24.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.app.serp24.model.Entry;

@Repository
public interface EntryRepository extends JpaRepository<Entry, Integer> {
}
