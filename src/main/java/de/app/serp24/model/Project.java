package de.app.serp24.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

import java.util.List;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name= "project")
public class Project {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectId;

    @Column
    private String name;

    @Column
    private LocalDate start;

    @Column(name = "end")
    private LocalDate end;

    @Column
    private String status ;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    private Customer projectCustomer;


    @OneToMany(mappedBy = "project")
    @JsonManagedReference
        private List<Consultant> consultants;

    @OneToOne(mappedBy = "entryProject")
    @JsonIgnore
    private  Entry entry;

}
