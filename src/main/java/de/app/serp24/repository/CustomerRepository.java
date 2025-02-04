package de.app.serp24.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.app.serp24.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
