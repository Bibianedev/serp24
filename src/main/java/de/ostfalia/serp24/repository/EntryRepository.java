package de.ostfalia.serp24.repository;



import de.ostfalia.serp24.model.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntryRepository extends JpaRepository<Entry, Integer> {
}
