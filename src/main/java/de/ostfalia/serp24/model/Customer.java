package de.ostfalia.serp24.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name= "customer")
public class Customer {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    @Column
    private String name;

    @Column
    private String city;

    @OneToOne(mappedBy = "projectCustomer")
    @JsonIgnore
    private  Project project;

}
