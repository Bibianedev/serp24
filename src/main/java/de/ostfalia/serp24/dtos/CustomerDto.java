package de.ostfalia.serp24.dtos;

import lombok.Data;

@Data
public
class CustomerDto {
    private Long customerId;
    private String name;
    private String city;



    public CustomerDto(Long customerId, String name, String city) {
        this.customerId = customerId;
        this.name = name;
        this.city = city;
    }


}
