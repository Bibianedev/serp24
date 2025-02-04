package de.app.serp24.dtos;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

import de.app.serp24.model.Consultant;
import de.app.serp24.model.Customer;

@Data
public class ProjectDto {

    private Long projectId;

    private String name;

    private LocalDate start;

    private LocalDate end;

    private String status ;

    private Customer customer;

    private List<Consultant> consultants;

    public ProjectDto(Long projectId, String name, LocalDate start, LocalDate end, String status, Customer customer,List<Consultant> consultants) {
        this.projectId = projectId;
        this.name = name;
        this.start = start;
        this.end = end;
        this.status = status;
        this.customer = customer;
        this.consultants= consultants;
    }
}
