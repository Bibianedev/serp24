package de.ostfalia.serp24.service;

import de.ostfalia.serp24.dtos.CustomerDto;
import de.ostfalia.serp24.model.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
 List<CustomerDto> getAllCustomers();

 Customer createCustomer(CustomerDto customerDto);

 Customer getCustomerById(Long id);


 Customer updateCustomer(Long id, CustomerDto customerDto);


  void deleteCustomer(long id) ;

}
