package de.app.serp24.serviceImpl;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.app.serp24.dtos.CustomerDto;
import de.app.serp24.model.Customer;
import de.app.serp24.repository.CustomerRepository;
import de.app.serp24.service.CustomerService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<CustomerDto> getAllCustomers() {
        List<Customer> customers = customerRepository.findAll();
        return customers.stream()
                .map(customer -> new CustomerDto(customer.getCustomerId(), customer.getName(), customer.getCity()))
                .collect(Collectors.toList());
    }

    @Override
    public Customer createCustomer(CustomerDto customerDto) {
        Customer customer = new Customer();
        customer.setCity(customerDto.getName());
        customer.setName(customerDto.getCity());
        return customerRepository.save(customer);
    }

    @Override
    public Customer getCustomerById(Long id) {
        Customer customer = customerRepository.findById(Math.toIntExact(id)).orElseThrow(() -> new RuntimeException("Customer not exist with: " + id));

        return customer;
    }

    @Override
    public Customer updateCustomer(Long id, CustomerDto customerDto) {
      Customer customer =  getCustomerById(id);
        customer.setName(customerDto.getName());
        customer.setCity(customerDto.getCity());
        return customerRepository.save(customer);
    }

    @Override
    public void deleteCustomer(long id) {
        Customer employee = customerRepository.findById((int) id)
                .orElseThrow(() -> new RuntimeException("Customer not exist with id: " + id));

        customerRepository.delete(employee);
    }


}
