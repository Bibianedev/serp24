package de.app.serp24.service;

import java.util.List;
import java.util.Optional;

import de.app.serp24.dtos.CustomerDto;
import de.app.serp24.model.Customer;

public interface CustomerService {
 List<CustomerDto> getAllCustomers();

 Customer createCustomer(CustomerDto customerDto);

 Customer getCustomerById(Long id);


 Customer updateCustomer(Long id, CustomerDto customerDto);


  void deleteCustomer(long id) ;

}
