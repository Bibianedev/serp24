package de.app.serp24.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.app.serp24.dtos.CustomerDto;
import de.app.serp24.model.Customer;
import de.app.serp24.serviceImpl.CustomerServiceImpl;

import java.nio.file.Path;
import java.util.List;



@RestController
@RequestMapping("api/customers")
public class ApiCustomer {

    @Autowired
    private CustomerServiceImpl customerService;

    @GetMapping
    public ResponseEntity<List<CustomerDto>> getAllCustomers(){
        return ResponseEntity.ok(customerService.getAllCustomers()) ;
    }

    @PostMapping(produces = { MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Customer> saveCustomer(@RequestBody CustomerDto customerDto){
        System.out.println(customerDto);

        Customer savedCustomer = customerService.createCustomer(customerDto);
        return ResponseEntity.ok(savedCustomer);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id){
return  ResponseEntity.ok(customerService.getCustomerById(id));

    }


@PutMapping("/{id}")
    ResponseEntity<Customer> updateEmployee(@ PathVariable Long id, @RequestBody CustomerDto customerDto){
        Customer updatedCustomer = customerService.updateCustomer(id, customerDto);
        return ResponseEntity.ok(updatedCustomer);
}
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        customerService.deleteCustomer(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
